import { NextResponse } from "next/server";

type GithubRepo = {
  name?: string;
  description?: string | null;
  html_url?: string;
  stargazers_count?: number;
  language?: string | null;
  fork?: boolean;
  archived?: boolean;
  private?: boolean;
};

type ProjectItem = {
  name: string;
  desc: string;
  url: string;
  stars: number;
  lang: string;
};

function getGithubUsername() {
  return process.env.GITHUB_USERNAME ?? "y1xshh";
}

export async function GET() {
  try {
    const username = getGithubUsername();

    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "portfolio-site",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        {
          error: "GitHub request failed.",
          details: errorText,
        },
        { status: response.status }
      );
    }

    const data: GithubRepo[] = await response.json();

    const projects: ProjectItem[] = data
      .filter(
        (repo) => !repo.fork && !repo.archived && !repo.private && repo.name
      )
      .map((repo) => ({
        name: repo.name ?? "",
        desc: repo.description ?? "",
        url: repo.html_url ?? "",
        stars: repo.stargazers_count ?? 0,
        lang: repo.language ?? "Unknown",
      }));

    return NextResponse.json(projects);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch GitHub projects." },
      { status: 500 }
    );
  }
}
