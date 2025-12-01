import { json } from '@sveltejs/kit';
import { GITHUB_TOKEN } from '$env/static/private';

export async function GET() {
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

    try {
        const response = await fetch('https://api.github.com/graphql', {
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ query })
        });

        if (!response.ok) {
            return json({ weeks: [], error: true }, { status: 500 });
        }

        const data = await response.json();

        const weeks =
            data?.data?.user?.contributionsCollection?.contributionCalendar?.weeks ?? [];

        return json({ weeks, error: false });
    } catch (e) {
        return json({ weeks: [], error: true }, { status: 500 });
    }
}
