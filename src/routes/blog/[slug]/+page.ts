import { error } from "@sveltejs/kit"

const blogs = import.meta.glob('../../../blogs/*.md');

export async function load({ params }) {
    const slug = params.slug;
    const blog = blogs[`../../../blogs/${slug}.md`];

    if (!blog) {
        throw error(404, "Blog not found");
    }

    const newBlog: any = await blog();
    return {
        content: newBlog.default,
        meta: newBlog.metadata,
        ogImage: newBlog.metadata.src
    };
}


export const prerender = false;