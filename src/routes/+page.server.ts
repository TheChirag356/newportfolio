import type { Week } from '$lib/types';
import { GITHUB_TOKEN } from '$env/static/private';

export async function load() {
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
	`
    const response = await fetch('https://api.github.com/graphql', {
        headers: {
            'Authorization': `Bearer ${GITHUB_TOKEN}`,
            'Content-Type': 'application/json'
        },
        method: "POST",
		body: JSON.stringify({ query })
    });

    const data = await response.json();
    console.log('GITHUB GRAPHQL RESPONSE:', data);
    const weeks: Week[] = data?.data?.user?.contributionsCollection?.contributionCalendar?.weeks ?? [];
    return { weeks };
}