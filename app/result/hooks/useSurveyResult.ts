import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MoodLevel, getMoodByScore, MOOD_LEVELS } from "../constants";

interface SurveyResultState {
  totalScore: number | null;
  mood: MoodLevel;
  loading: boolean;
  error: string | null;
}

export const useSurveyResult = () => {
  const router = useRouter();
  const [state, setState] = useState<SurveyResultState>({
    totalScore: null,
    mood: MOOD_LEVELS[0],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchSurveyResult = async () => {
      try {
        const response = await fetch("/api/getLatestSurvey");
        
        if (!response.ok) {
          throw new Error("Failed to fetch survey result");
        }

        const data = await response.json();

        if (data.totalScore === null) {
          console.log("❌ ไม่พบข้อมูลแบบประเมิน → Redirect ไปที่ /survey");
          router.push("/survey");
          return;
        }

        const matchedMood = getMoodByScore(data.totalScore);
        
        setState({
          totalScore: data.totalScore,
          mood: matchedMood,
          loading: false,
          error: null,
        });
      } catch (error) {
        console.error("🔥 Error fetching survey result:", error);
        setState((prev) => ({
          ...prev,
          loading: false,
          error: error instanceof Error ? error.message : "เกิดข้อผิดพลาด",
        }));
        router.push("/survey");
      }
    };

    fetchSurveyResult();
  }, [router]);

  return state;
};
