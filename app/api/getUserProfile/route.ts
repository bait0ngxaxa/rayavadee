import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";

export async function GET() {
  try {
    const user = await currentUser();
    if (!user)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    // ✅ ตรวจสอบว่ามี `privateMetadata` และ `hasProfile`
    const hasProfile =
      user.privateMetadata && user.privateMetadata.hasProfile ? true : false;

   

    return NextResponse.json({ hasProfile });
  } catch (error) {
    console.error("🔥 Error in getUserProfile API:", error);
    return NextResponse.json(
      { error: "Failed to fetch user profile" },
      { status: 500 }
    );
  }
}
