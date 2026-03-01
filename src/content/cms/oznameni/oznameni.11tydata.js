export default {
    tags: "oznameni",
    eleventyComputed: {
        layout: data => !data.page.rawInput ? null : "layouts/post.njk",
        preloadImg: data => data.image ? data.image : null,
        permalink: data => !data.page.rawInput ? false : `/oznameni/${data.page.fileSlug}/index.html`,
    },
    landing: {
        heading: "Oznamení",
        breadcrumbs: [
            { url: "/", title: "Domů" },
            { title: "Toto oznámení" }
        ]
    }
};