/**
 * POST /api/submit
 */
export async function onRequestPost(context) {
    try {
        const { request, env } = context;
        const formData = await request.formData();

        const formApiKey = context.env.BASIN_FORM_API_KEY;
        const formUrl = context.env.BASIN_FORM_URL;

    } catch (err) {
        return new Response(`Error during processing the form submission: ${err}`, { status: 400 });
    }
}