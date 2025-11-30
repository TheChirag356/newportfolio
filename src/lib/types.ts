export type Blog = {
    title: string;
    slug: string;
    description: string;
    date: string;
    categories: string[];
    published: boolean;
};

export type Week = {
    contributionDays: ContributionDay[];
}

export type ContributionDay = {
    date: string;
    contributionCount: number;
    color: string;
}