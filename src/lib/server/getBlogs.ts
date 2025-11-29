import type { Blog } from "$lib/types";

export async function getBlogs() {
    let blogs: Blog[] = [];

    const paths = import.meta.glob("/src/blogs/*.md", { eager: true });

    for (const path in paths) {
        const file = paths[path];

        const slug = path.split("/").at(-1)?.replace(".md", "");

        if (file && typeof file === "object" && "metadata" in file && slug) {
            const metadata = file.metadata as Omit<Blog, "slug">;
            const blog = { ...metadata, slug } satisfies Blog;

            if (blog.published) blogs.push(blog);
        }
    }

    blogs.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return blogs;
}
