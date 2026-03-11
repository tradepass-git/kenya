export async function GET() {
  try {
    const res = await fetch(
      "https://kenya.worldfis.com/past-speakers-feed-json/",
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