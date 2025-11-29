export async function load({ url }) {
	return {
		url: url.pathname,
		meta: {
            ogImage: "/og.png"
        }
	}
}