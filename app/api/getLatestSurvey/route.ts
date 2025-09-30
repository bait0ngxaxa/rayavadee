import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import db from "@/utils/db";

export async function GET() {
  try {
    const user = await currentUser();
    if (!user)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const latestSurvey = await db.survey.findFirst({
      where: { profileId: user.id },
      orderBy: { createdAt: "desc" },
    });

    if (!latestSurvey) return NextResponse.json({ totalScore: null });

    return NextResponse.json({
      hasProfile: user.privateMetadata.hasProfile || false,
      totalScore: latestSurvey?.totalScore ?? null,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch survey data" },
      { status: 500 }
    );
  }
}
