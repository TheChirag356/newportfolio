import { json } from "@sveltejs/kit";
import { getBlogs } from "$lib/server/getBlogs";

export async function GET() {
    return json(await getBlogs());
}
