export async function load({ fetch }) {
	const res = await fetch('/api/github');

	if (!res.ok) {
		return { weeks: [], error: true };
	}

	const { weeks } = await res.json();
	return { weeks, error: false };
}
