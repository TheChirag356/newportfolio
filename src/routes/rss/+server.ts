export const prerender = true;

import * as config from "$lib/config";
import type { Blog } from "$lib/types";
import { getBlogs } from "$lib/server/getBlogs";

function escapeXml(unsafe: string): string {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

export async function GET() {
    const blogs: Blog[] = await getBlogs();

    const headers = { "Content-Type": "application/xml" };

    const xml = `
    <rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
    <channel>
        <title>${escapeXml(config.title)}</title>
        <description>${escapeXml(config.description)}</description>
        <link>${config.url}</link>
        <atom:link href="${config.url}/rss" rel="self" type="application/rss+xml" />
        <image>
        <url>${config.url}/og.png</url>
        <title>${escapeXml(config.title)}</title>
        <link>${config.url}</link>
        </image>

        ${blogs
            .map(
                (blog) => `
                    <item>
                        <title>${escapeXml(blog.title)}</title>
                        <description>${escapeXml(blog.description)}</description>
                        <link>${config.url}/blog/${blog.slug}</link>
                        <guid isPermaLink="true">${config.url}/blog/${blog.slug}</guid>
                        <pubDate>${new Date(blog.date).toUTCString()}</pubDate>
                        <enclosure 
                        url="${config.url}/images/${blog.slug}.png" 
                        length="0" 
                        type="image/png" 
                        />
                    </item>`
            )
            .join("")}
    </channel>
    </rss>
    `;

    return new Response(xml, { headers });
}