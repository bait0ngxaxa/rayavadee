"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import InAppBrowserBlocker from "@/components/InAppBrowserBlocker";

const messages = [
  "สวัสดีคนทำงาน! เหนื่อยหน่อยนะช่วงนี้",
  "เธอเก่งมากนะ ดูแลคนรอบตัวได้ดีเลย แต่ครั้งสุดท้ายที่เธอดูแลตัวเองคือเมื่อไหร่กัน 😉",
  "มา… ขอเวลาเธอสัก 5 นาที พักเพื่อสำรวจใจตัวเองกัน",
  "ลองทบทวนตัวเองดูสิว่า ช่วงนี้ ... ",
];

const HomePage = () => {
  const router = useRouter();
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem("userConsent");
    if (!consentGiven) {
      setShowDialog(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("userConsent", "true");
    localStorage.setItem("isPlaying", "true");
    setShowDialog(false);
    window.location.reload(); // รีเฟรชเพื่อให้เพลงเล่นผ่าน Navbar
  };

  const handleReject = () => {
    localStorage.setItem("userConsent", "false");
    localStorage.setItem("isPlaying", "false");
    setShowDialog(false);
  };

  const handleClick = () => {
    if (currentMessage < messages.length - 1) {
      setCurrentMessage((prev) => prev + 1);
    } else {
      router.push("/survey");
    }
  };

  return (
    <InAppBrowserBlocker>
      <section
        className="flex flex-col items-center justify-center min-h-screen text-center px-6 relative bg-white dark:bg-gray-900"
        onClick={handleClick}
      >
        {/* Dialog ขออนุญาตเล่นเพลง */}
        {showDialog && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-sm">
              <h2 className="text-xl font-semibold mb-4">🎵 เปิดเสียงเพลงไหม?</h2>
              <p className="text-gray-600 dark:text-gray-300">
                เสียงเพลงจะช่วยให้คุณผ่อนคลายระหว่างทำแบบประเมิน
              </p>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={handleReject}
                  className="px-4 py-2 bg-gray-400 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-500 dark:hover:bg-gray-700 transition"
                >
                  ปิดเสียง
                </button>
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 bg-green-500 dark:bg-green-600 text-white rounded-lg hover:bg-green-600 dark:hover:bg-green-700 transition"
                >
                  เปิดเสียง
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ข้อความที่เปลี่ยนได้ พร้อม Animation */}
        <motion.h1
          key={currentMessage}
          className="text-3xl font-semibold font-[Kanit] text-gray-700 dark:text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {messages[currentMessage]}
          <br />
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
            กดที่หน้าจอเพื่อดำเนินการต่อ
          </span>
        </motion.h1>

        {/* เอฟเฟกต์แสงพื้นหลัง */}
        <div className="absolute inset-0 pointer-events-none"></div>
      </section>
    </InAppBrowserBlocker>
  );
};

export default HomePage;
