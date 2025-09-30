import { useRouter } from "next/navigation";

export const RetakeButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
      aria-label="ทำแบบประเมินอีกครั้ง"
    >
      ทำแบบประเมินอีกครั้ง
    </button>
  );
};
