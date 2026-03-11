export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const year = searchParams.get("_year");

    const res = await fetch(
      `https://kenya.worldfis.com/speakers-feed-json/?_year=${year}`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch API");
    }

    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "API error" }, { status: 500 });
  }
}