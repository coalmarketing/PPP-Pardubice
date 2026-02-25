export default {
    tags: "aktuality",
    eleventyComputed: {
        layout: data => !data.page.rawInput ? null : "layouts/post.njk",
        preloadImg: data => data.image ? data.image : null,
        permalink: data => !data.page.rawInput ? false : `/oznameni/${data.page.fileSlug}/index.html`,

        landing: (data) => {
            console.log("page.rawInput: ", !data.page.rawInput);
            return {
                heading: data.title
            }
        }
    }
};