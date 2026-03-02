export default {
    layout: "layouts/post.njk",
    tags: "aktuality",
    eleventyComputed: {
        preloadImg: data => data.image ? data.image : null,
        permalink: data => `/aktuality/${data.page.fileSlug}/index.html`,
    },
    landing: {
        heading: "Aktualita",
        breadcrumbs: [
            { url: "/", title: "Domů" },
            { url: "/novinky#aktuality", title: "Aktuality" },
            { title: "Tento příspěvek" }
        ]
    }
};