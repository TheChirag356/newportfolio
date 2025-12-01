import type { Week } from '$lib/types';
import { GITHUB_TOKEN } from '$env/static/private';

export async function load() {
	try {
		const query = `
			query {
				user(login: "TheChirag356") {
					contributionsCollection {
						contributionCalendar {
							totalContributions
							weeks {
								contributionDays {
									date
									contributionCount
									color
								}
							}
						}
					}
				}
			}
		`;

		const response = await fetch('https://api.github.com/graphql', {
			headers: {
				Authorization: `Bearer ${GITHUB_TOKEN}`,
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({ query })
		});

		if (!response.ok) {
			// GitHub error (API down, bad token, rate-limit, etc)
			console.error('GitHub API error:', await response.text());
			return { weeks: [], error: true };
		}

		const data = await response.json();
		const weeks: Week[] =
			data?.data?.user?.contributionsCollection?.contributionCalendar?.weeks ?? [];

		return { weeks, error: false };
	} catch (err) {
		// Network down, DNS failure, offline, etc
		console.error('Network error:', err);
		return { weeks: [], error: true };
	}
}
