"use server";

import { profileSchema, validateWithZod } from "@/utils/schemas";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import db from "@/utils/db";
import { redirect } from "next/navigation";

const getAuthUser = async () => {
  //code body
  const user = await currentUser();
  if (!user) {
    throw new Error("You must Logged!!");
  }
  if (!user.privateMetadata.hasProfile) redirect("/profile/create");
  return user;
};

const renderError = (error: unknown): { message: string } => {
  return {
    message: error instanceof Error ? error.message : "An error!!",
  };
};

export const createProfileAction = async (
  prevState: { message: string } | null,
  formData: FormData
) => {
  try {
    const user = await currentUser();
    if (!user) {
      throw new Error("You must be logged in!");
    }

    const rawData = Object.fromEntries(formData);
    console.log("✅ rawData:", rawData);

    // 🛠 กำหนด Type ให้ validateField ชัดเจน
    const validateField: {
      firstName: string;
      lastName: string;
      webName: string;
    } = validateWithZod(profileSchema, rawData);

    console.log("✅ validateField:", validateField);

    await db.profile.create({
      data: {
        clerkId: user.id,
        firstName: validateField.firstName, // ✅ TypeScript รู้จักค่าพวกนี้แล้ว
        lastName: validateField.lastName,
        webName: validateField.webName,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? "",
      },
    });

    const client = await clerkClient();
    await client.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
  } catch (error) {
    console.error("🔥 Error:", error);
    return renderError(error);
  }
  redirect("/");
};

export const createSurveyAction = async (answers: number[]) => {
  try {
    const user = await getAuthUser();

    if (!answers || answers.length !== 12) {
      throw new Error("ข้อมูลคำตอบไม่ครบหรือผิดพลาด");
    }

    const totalScore = answers.reduce((sum, score) => sum + score, 0);

    await db.survey.create({
      data: {
        profileId: user.id, // ✅ ใช้ clerkId ตาม schema relation
        survey1: answers[0],
        survey2: answers[1],
        survey3: answers[2],
        survey4: answers[3],
        survey5: answers[4],
        survey6: answers[5],
        survey7: answers[6],
        survey8: answers[7],
        survey9: answers[8],
        survey10: answers[9],
        survey11: answers[10],
        survey12: answers[11],
        totalScore: totalScore,
      },
    });
  } catch (error) {
    console.error("🔥 Error:", error);
    throw new Error("บันทึกข้อมูลไม่สำเร็จ");
  }
};
