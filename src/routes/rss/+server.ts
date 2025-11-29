export const prerender = true;

import * as config from "$lib/config";
import type { Blog } from "$lib/types";
import { getBlogs } from "$lib/server/getBlogs";

export async function GET() {
    const blogs: Blog[] = await getBlogs();

    const headers = { "Content-Type": "application/xml" };

    const xml = `
    <rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
    <channel>
        <title>${config.title}</title>
        <description>${config.description}</description>
        <link>${config.url}</link>
        <atom:link href="${config.url}/rss" rel="self" type="application/rss+xml" />
        ${blogs
            .map(
                (blog) => `
                <item>
                    <title>${blog.title}</title>
                    <description>${blog.description}</description>
                    <link>${config.url}/blog/${blog.slug}</link>
                    <guid isPermaLink="true">${config.url}/blog/${blog.slug}</guid>
                    <pubDate>${new Date(blog.date).toUTCString()}</pubDate>
                </item>`
            )
            .join("")}
    </channel>
    </rss>
    `;

    return new Response(xml, { headers });
}