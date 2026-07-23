import { NextResponse } from "next/server";

export async function GET() {
  const query = `
    query {
      user(login: "Angadveer185") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
          }
        }
      }
    }
  `;

  const response = await fetch(
    "https://api.github.com/graphql",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),

      // Cache for one hour
      next: {
        revalidate: 3600,
      },
    }
  );

  const data = await response.json();

  return NextResponse.json({
    contributions:
      data.data.user.contributionsCollection
        .contributionCalendar.totalContributions,
  });
}