import type { Blog } from "$lib/types";

export async function load(event) {
    const response = await event.fetch('/api/blogs');
    const blogs: Blog[] = await response.json();
    return { blogs };
}