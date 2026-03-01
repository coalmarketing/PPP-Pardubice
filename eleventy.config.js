// ─────────────────────────────────────────────────────────────────────────────
// ELEVENTY CONFIGURATION
// This file configures how Eleventy builds your static site
// Documentation: https://www.11ty.dev/docs/config/
// ─────────────────────────────────────────────────────────────────────────────

// 📦 Plugin Imports
import pluginImages from "@codestitchofficial/eleventy-plugin-sharp-images";
import pluginMinifier from "@codestitchofficial/eleventy-plugin-minify";
import pluginNavigation from "@11ty/eleventy-navigation";
import { I18nPlugin } from "@11ty/eleventy";

// ⚙️ Configuration Files
import { configI18n, configImages } from "./src/config/plugins.js";

// 🔧 Processing Functions
import css from "./src/config/processors/css.js";
import javascript from "./src/config/processors/javascript.js";

// 🛠️ Utilities
import { isoDate, postDate, stripMarkdown } from "./src/config/filters.js";

const isProduction = process.env.ELEVENTY_ENV === "PROD";


/** @param {import('@11ty/eleventy/UserConfig').default} eleventyConfig*/
export default (eleventyConfig) => {
    // ═════════════════════════════════════════════════════════════════════════
    // LANGUAGES
    // Using Eleventy's build events to process non-template languages
    // Learn more: https://www.11ty.dev/docs/events/
    // ═════════════════════════════════════════════════════════════════════════

    /*
     * CSS Processing
     * These processors handle Tailwind CSS compilation and minification.
     * - CSS: Processed with Tailwind CSS v4 (Oxide engine) and PostCSS.
     * - Minification: Optimized via cssnano for production builds.
     */
    eleventyConfig.on("eleventy.before", async () => {
        // Only minify CSS on production
        const minify = isProduction ? true : false;
        await css({ minify: minify });
    });

    /*
     * JavaScript Processing
     * These processors handle bundling, transpiling, and minification
     * - JavaScript: Compiled with esbuild for modern bundling
     */
    eleventyConfig.on("eleventy.after", javascript);

    // ═════════════════════════════════════════════════════════════════════════
    // PLUGINS
    // Extend Eleventy with additional functionality
    // Learn more: https://www.11ty.dev/docs/plugins/
    // ═════════════════════════════════════════════════════════════════════════

    /*
     * 🖼️ Image Optimization
     * Resize and optimize images for better performance using {% getUrl %}
     * Documentation: https://github.com/CodeStitchOfficial/eleventy-plugin-sharp-images
     */
    eleventyConfig.addPlugin(pluginImages, configImages);

    /*
     * 🧭 Navigation Plugin
     * Enables hierarchical navigation structure via front matter
     * Documentation: https://www.11ty.dev/docs/plugins/navigation/
     */
    eleventyConfig.addPlugin(pluginNavigation);

    /*
     * 🌍 Internationalization (i18n) Plugin
     * Adds support for translating content and generating localized URLs
     * Documentation: https://www.11ty.dev/docs/plugins/i18n/
     */
    eleventyConfig.addPlugin(I18nPlugin, configI18n);

    /*
     * 📦 Production Minification
     * Minifies HTML, CSS, JSON, XML, XSL, and webmanifest files
     * Only runs during production builds (npm run build)
     * Documentation: https://github.com/CodeStitchOfficial/eleventy-plugin-minify
     */
    if (isProduction) {
        eleventyConfig.addPlugin(pluginMinifier);
    }

    // ═════════════════════════════════════════════════════════════════════════
    // PASSTHROUGH COPIES
    // Copy files directly to output without processing
    // Learn more: https://www.11ty.dev/docs/copy/
    // ═════════════════════════════════════════════════════════════════════════

    eleventyConfig.addPassthroughCopy("./src/assets"); // Static assets
    eleventyConfig.addPassthroughCopy("./src/admin"); // CMS admin files
    eleventyConfig.addPassthroughCopy("./src/_redirects"); // Redirect rules

    // ═════════════════════════════════════════════════════════════════════════
    // FILTERS
    // Transform data in templates at build time
    // Learn more: https://www.11ty.dev/docs/filters/
    // ═════════════════════════════════════════════════════════════════════════

    /**
     * 🔍 Debugging Logger Filter
     * Logs the provided value to the terminal console during the build process.
     * Usage: {{ myData | debug }}
     * Powered by Node util: https://nodejs.org/api/util.html#utilinspectobject-options
     */
    eleventyConfig.addFilter("log", (value) => {
        console.log(value);
    });

    /*
     * 📅 Human-Readable Date Formatting Filter
     * Converts JavaScript dates to human-readable format
     * Usage: {{ "2023-12-02" | postDate }}
     * Powered by Luxon: https://moment.github.io/luxon/api-docs/
     */
    eleventyConfig.addFilter("postDate", postDate);

    /*
     * 📅 ISO Date Formatting Filter
     * Converts JavaScript dates to ISO 8601 format
     * Usage: {{ "2023-12-02" | isoDate }}
     * Powered by Luxon: https://moment.github.io/luxon/api-docs/
     */
    eleventyConfig.addFilter("isoDate", isoDate);

    /*
     * 🔢 Limit Filter
     * Returns a limited number of items from the beginning of an array
     * Usage: {{ collection | limit(5) }}
     * Useful for truncating lists, e.g. showing only the latest N items
     */
    eleventyConfig.addFilter("limit", function (array, limit) {
        return array.slice(0, limit);
    });

    /*
     * 🏷️ Page Language Filter
     * Filters collections by the current page language for i18n compatibility
     * Usage: {{ collections.all | pageLang | eleventyNavigation }}
     */
    eleventyConfig.addFilter("pageLang", function (value) {
        return value.filter(item => item.page.lang === this.page.lang)
    });

    /**
     * 📝 Markdown Stripping Filter
     * Removes common Markdown syntax such as headings, emphasis,
     * links, images, code blocks, and inline code, returning clean plaintext.
     *
     * Ideal for excerpts, meta descriptions, search indexing, or anywhere
     * Markdown formatting should be removed while keeping readable text.
     * 
     * Usage: {{ content | stripMarkdown }}
     */
    eleventyConfig.addFilter("stripMarkdown", stripMarkdown);

    /**
     * 🔍 Multi-Property Equality Filter
     * Filters a collection based on multiple property-value pairs.
     * Supports nested properties like "eleventyNavigation.parent".
     * Usage:
     *   {{ collections.all | whereAll({ category: "skola", "eleventyNavigation.parent": "Škola" }) }}
     */
    eleventyConfig.addFilter("whereAll", function (collection, conditions = {}) {
        if (!Array.isArray(collection)) return [];

        const getDeep = (obj, path) => {
            return path.split(".").reduce((acc, key) => acc && acc[key], obj);
        }

        return collection.filter((item) => {
            return Object.entries(conditions).every(([prop, expected]) => {
                const actual = getDeep(item.data, prop);

                // NEW LOGIC: If the value in the file is an array, check if it contains the expected value
                if (Array.isArray(actual)) {
                    return actual.includes(expected);
                }

                // Fallback to strict equality for strings/booleans
                return actual === expected;
            });
        });
    });

    /**
     * 🎯 Find a Single Item in a Collection
     * Finds the first item in a collection that matches multiple property-value pairs.
     * Supports nested properties like "eleventyNavigation.key".
     * Returns the first matching item object, or undefined if no match is found.
     *
     * Usage:
     *   {% set pageNav = collections.all | findWhere({ "eleventyNavigation.key": page.fileSlug }) %}
     *   {% if pageNav %}
     *     <h2>{{ pageNav.data.title }}</h2>
     *   {% endif %}
     */
    eleventyConfig.addFilter("findWhere", function (collection, conditions = {}) {
        if (!Array.isArray(collection)) return undefined;

        function getDeep(obj, path) {
            if (!obj) return undefined;
            return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
        }

        function normalize(v) {
            if (v === undefined || v === null) return v;
            if (typeof v === "string") return v.trim().toLowerCase();
            return v;
        }

        return collection.find((item) => {
            return Object.entries(conditions).every(([prop, expectedValue]) => {
                // Try several places where Eleventy might store the value
                const tries = [
                    getDeep(item.data, prop),       // e.g. item.data.fileSlug
                    getDeep(item, prop),            // e.g. item.fileSlug
                    getDeep(item.data && item.data.page, prop), // e.g. item.data.page.fileSlug
                ];

                // first non-undefined
                const actualRaw = tries.find(x => x !== undefined);

                // Normalize for lenient comparison
                const actual = normalize(actualRaw);
                const expected = normalize(expectedValue);

                // Strictly compare normalized values (works for strings and most primitives)
                return actual === expected;
            });
        });
    });

    /**
     * Sorting Filter
     * Sorts an array of objects by a specified key.
     *
     * - Supports nested properties using dot notation (e.g., "data.order").
     * - Handles numbers, strings, and dates (as strings).
     * - Allows ascending ('asc') or descending ('desc') order.
     * - Pushes items with missing/null keys to the end of the array.
     *
     * Usage:
     *   {# Sort by title, ascending (default) #}
     *   {% set sortedPosts = collections.posts | sortBy("data.title") %}
     *
     *   {# Sort by a custom order field, descending #}
     *   {% set sortedProjects = collections.projects | sortBy("data.order", "desc") %}
     */
    eleventyConfig.addFilter("sortBy", function (array, key, order = 'asc') {
        // Return the array as-is if it's not a valid array
        if (!Array.isArray(array)) {
            return array;
        }

        // Helper to safely access nested properties
        function getDeep(obj, path) {
            return path.split('.').reduce((acc, part) => acc && acc[part] !== undefined ? acc[part] : undefined, obj);
        }

        // Create a mutable copy to avoid side effects
        const sortedArray = [...array];

        // Determine the sort direction multiplier
        const direction = order.toLowerCase() === 'desc' ? -1 : 1;

        sortedArray.sort((a, b) => {
            const valA = getDeep(a, key);
            const valB = getDeep(b, key);

            // --- Comparison Logic ---

            // Push items with null or undefined values to the end
            if (valA == null) return 1;
            if (valB == null) return -1;

            // A. Numeric sort (if both values are numbers)
            if (typeof valA === 'number' && typeof valB === 'number') {
                return (valA - valB) * direction;
            }

            // B. Default to locale-aware string sort for everything else
            const stringA = String(valA);
            const stringB = String(valB);

            return stringA.localeCompare(stringB) * direction;
        });

        return sortedArray;
    });

    /**
     * 🗂️ Group by Property Filter (with Custom Ordering)
     * Groups an array of objects based on a specified key, with optional custom sorting for the groups.
     *
     * - Supports nested properties using dot notation (e.g., "data.section").
     * - If the key's value is an ARRAY, the item will be added to a group for EACH value in the array.
     * - Items where the key is not set, undefined, or an empty array will be in a group with the key "_ungrouped".
     * - Accepts an optional third argument: an array of strings to define a custom sort order for the groups.
     *   Groups not in the order array will be appended alphabetically.
     *
     * @param {Array} array The array to group.
     * @param {string} key The property to group by.
     * @param {Array<string>} [order=[]] Optional. An array defining the desired order of group keys.
     *
     * @returns {Array<{key: string, items: Array<Object>}>} An array of group objects.
     *
     * @example
     * {# Basic usage #}
     * {% set postsByTag = collections.posts | groupBy("data.tags") %}
     *
     * @example
     * {# Usage with custom ordering #}
     * {% set order = ["Pedagogové", "Nepedagogové"] %}
     * {% set employeesByGroup = section.items | groupBy("data.group", order) %}
     */
    eleventyConfig.addFilter("groupBy", (array, key, order = []) => {
        // Return an empty array if the input isn't a valid array
        if (!Array.isArray(array)) {
            return [];
        }

        const ungroupedKey = "_ungrouped";
        const grouped = {};

        array.forEach(item => {
            // Resolve the value of the key, which could be a string, an array, or undefined.
            const groupValue = key.split('.').reduce((obj, k) => (obj && obj[k] !== undefined) ? obj[k] : undefined, item);

            // Logic for handling arrays
            if (Array.isArray(groupValue)) {
                // If the array is empty, treat the item as ungrouped.
                if (groupValue.length === 0) {
                    if (!grouped[ungroupedKey]) {
                        grouped[ungroupedKey] = [];
                    }
                    grouped[ungroupedKey].push(item);
                } else {
                    // If the array has values, add the item to a group for EACH value.
                    groupValue.forEach(keyInArray => {
                        if (!grouped[keyInArray]) {
                            grouped[keyInArray] = [];
                        }
                        grouped[keyInArray].push(item);
                    });
                }
            }

            // Fallback logic for single values
            else {
                let groupKey = groupValue;

                if (groupKey === undefined) {
                    groupKey = ungroupedKey;
                }

                if (!grouped[groupKey]) {
                    grouped[groupKey] = [];
                }
                grouped[groupKey].push(item);
            }
        });

        // Sorting and final transformation
        const allKeys = Object.keys(grouped);
        let sortedKeys;

        // If a custom order array is provided, use it.
        if (order && order.length > 0) {
            // Get the keys that are in the custom order array, maintaining that order.
            const orderedKeys = order.filter(k => allKeys.includes(k));
            // Get the remaining keys that were not in the custom order array.
            const remainingKeys = allKeys.filter(k => !order.includes(k));
            // Sort the remaining keys alphabetically for predictable results.
            remainingKeys.sort((a, b) => a.localeCompare(b, 'cs'));

            // Combine them, with the custom-ordered keys first.
            sortedKeys = [...orderedKeys, ...remainingKeys];
        } else {
            // Default behavior: if no order is provided, sort all keys alphabetically.
            sortedKeys = allKeys.sort((a, b) => a.localeCompare(b, 'cs'));
        }

        // Map over the new sorted array of keys to create the final output.
        return sortedKeys.map(groupKey => ({
            key: groupKey,
            items: grouped[groupKey]
        }));
    });

    // ═════════════════════════════════════════════════════════════════════════
    // SHORTCODES
    // Generate dynamic content with JavaScript
    // Learn more: https://www.11ty.dev/docs/shortcodes/
    // ═════════════════════════════════════════════════════════════════════════

    /*
     * 📆 Current Year Shortcode
     * Outputs the current year (useful for copyright notices)
     * Usage: {% year %}
     * Updates automatically with each build
     */
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    // ═════════════════════════════════════════════════════════════════════════
    // BUILD CONFIGURATION
    // Define input/output directories and template engine
    // ═════════════════════════════════════════════════════════════════════════

    return {
        dir: {
            input: "src", // Source files directory
            output: "public", // Build output directory
            includes: "_includes", // Partial templates directory
            data: "_data", // Global data files directory
        },
        htmlTemplateEngine: "njk", // Nunjucks for HTML templates
    };
};
