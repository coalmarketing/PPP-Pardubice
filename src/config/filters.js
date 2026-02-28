import { DateTime } from "luxon";


/**
 * Converts a date into a machine-readable ISO 8601 string.
 * Useful for <time datetime="..."> attributes.
 * 
 * @example "2024-03-24T12:00:00.000Z"
 * @param {Date|string|number} dateObj - The date to convert.
 * @returns {string|null} The ISO formatted date string.
 */
export const isoDate = (dateObj) => {
    const date = new Date(dateObj);

    return DateTime.fromJSDate(date).toISO();
};


/**
 * Formats a date into a localized Czech string using medium date format.
 * 
 * @example "24. 3. 2024"
 * @param {Date|string|number} dateObj - The date to format.
 * @returns {string} The localized date string in 'cs' locale.
 */
export const postDate = (dateObj) => {
    const date = new Date(dateObj);

    return DateTime.fromJSDate(date).setLocale("cs").toLocaleString(DateTime.DATE_MED);
};


/**
 * Removes Markdown syntax and HTML tags from a string to return plain text.
 * 
 * Useful for generating SEO descriptions, social media snippets, or search 
 * indexes from Markdown content.
 * 
 * @param {string} value - The Markdown content to be stripped.
 * @returns {string} The processed plain-text string with collapsed whitespace.
 * 
 * @example
 * // In your .eleventy.js or plugin file:
 * eleventyConfig.addFilter("stripMarkdown", stripMarkdown);
 * 
 * // In a Nunjucks template:
 * // {{ content | stripMarkdown | truncate(160) }}
 */
export const stripMarkdown = (value) => {
    return value
        // remove fenced code blocks
        .replace(/```[\s\S]*?```/g, "")
        // remove inline code
        .replace(/`([^`]+)`/g, "$1")
        // remove images
        .replace(/!\[.*?\]\(.*?\)/g, "")
        // remove links but keep text
        .replace(/\[(.*?)\]\(.*?\)/g, "$1")
        // remove headings
        .replace(/^#{1,6}\s*/gm, "")
        // bold/italic
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .replace(/\*(.*?)\*/g, "$1")
        .replace(/_(.*?)_/g, "$1")
        // blockquotes
        .replace(/^>\s?/gm, "")
        // lists
        .replace(/^\s*[-+*]\s+/gm, "")
        .replace(/^\s*\d+\.\s+/gm, "")
        // remove HTML tags
        .replace(/<\/?[^>]+(>|$)/g, "")
        // collapse whitespace
        .replace(/\s+/g, " ")
        .trim();
};