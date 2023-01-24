export default async function getRepositoryData(): Promise<RepositoryData> {
    try {
        const request = await fetch("https://api.github.com/repos/agusjkdev/portfolio");
        if (request.status !== 200) {
            throw new Error(`getRepositoryData responded with status code: ${request.status}!`);
        }

        const { stargazers_count: stars, forks_count: forks } = (await request.json()) as {
            stargazers_count: number;
            forks_count: number;
        };

        return { stars, forks };
    } catch (e) {
        console.error(e);

        return { stars: 0, forks: 0 };
    }
}
