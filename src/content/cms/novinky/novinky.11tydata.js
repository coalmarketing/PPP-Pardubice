export default {
    layout: "layouts/post.njk",
    tags: "novinky",
    eleventyComputed: {
        preloadImg: data => data.image ? data.image : null,
        permalink: data => `/novinky/${data.page.fileSlug}/index.html`
    }
};