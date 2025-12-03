export async function load({ fetch }) {
	const res = await fetch('/api/github');

	if (!res.ok) {
		return { weeks: [], totalContributions: 0, error: true };
	}

	const { weeks, totalContributions } = await res.json();
	return { weeks, totalContributions, error: false };
}
