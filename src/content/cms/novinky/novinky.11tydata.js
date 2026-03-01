export default {
    layout: "layouts/post.njk",
    tags: "novinky",
    eleventyComputed: {
        preloadImg: data => data.image ? data.image : null,
        permalink: data => `/novinky/${data.page.fileSlug}/index.html`
    },
    landing: {
        heading: "Novinka",
        breadcrumbs: [
            { url: "/", title: "Domů" },
            { url: "/novinky", title: "Novinky" },
            { title: "Tento příspěvek" }
        ]
    }
};