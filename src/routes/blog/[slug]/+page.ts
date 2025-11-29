import { error } from "@sveltejs/kit"

const blogs = import.meta.glob('../../../blogs/*.md');

export async function load({ params }) {
    const slug = params.slug;
    const match = blogs[`../../../blogs/${slug}.md`];

    if (!match) {
        throw error(404, "Post not found");
    }

    const post: any = await match();
    return {
        content: post.default,
        meta: post.metadata
    };
}


export const prerender = false;