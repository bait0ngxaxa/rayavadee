// components/InAppBrowserBlocker.tsx
"use client";

import React, { useEffect, useState } from "react";
import { isWebView } from "@/hooks/use-webview";

interface InAppBrowserBlockerProps {
    children: React.ReactNode;
}
const InAppBrowserBlocker = ({ children }: InAppBrowserBlockerProps) => {
    const [showBlocker, setShowBlocker] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopyLink = async () => {
        const url = window.location.href;
        if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
            try {
                await navigator.clipboard.writeText(url);
                setCopied(true);
                setTimeout(() => setCopied(false), 3000);
            } catch (error) {
                console.error("Error copying text with Clipboard API:", error);
                fallbackCopyText(url);
            }
        } else {
            fallbackCopyText(url);
        }
    };

    const fallbackCopyText = (text: string) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        // ทำให้ textarea ไม่แสดงผลและไม่รบกวนการจัดวาง
        textArea.style.position = "fixed";
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.width = "2em";
        textArea.style.height = "2em";
        textArea.style.padding = "0";
        textArea.style.border = "none";
        textArea.style.outline = "none";
        textArea.style.boxShadow = "none";
        textArea.style.background = "transparent";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            const successful = document.execCommand("copy");
            if (successful) {
                setCopied(true);
                setTimeout(() => setCopied(false), 3000);
            } else {
                console.error("Fallback: Copy command was unsuccessful");
            }
        } catch (err) {
            console.error("Fallback: Oops, unable to copy", err);
        }
        document.body.removeChild(textArea);
    };

    const handleInstruction = () => {
        alert(
            "กรุณากดปุ่มเมนู (⋮) ที่มุมขวาบน แล้วเลือก 'เปิดในเบราว์เซอร์' เพื่อเปิดเว็บไซต์ในเบราว์เซอร์ภายนอก"
        );
    };

    useEffect(() => {
        if (isWebView()) {
            setShowBlocker(true);
        }
    }, []);

    if (showBlocker) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center p-4">
                <h1 className="text-2xl font-bold mb-4">
                    โปรดเปิดเว็บไซต์ในเบราว์เซอร์ภายนอก
                </h1>
                <p className="mb-6 text-sm text-gray-700">
                    คุณกำลังใช้งานผ่าน In-App Browser ซึ่งอาจมีข้อจำกัดในการใช้งานระบบล็อกอิน
                    เช่น Clerk สำหรับประสบการณ์ที่ดีที่สุด กรุณาเปิดเว็บไซต์ใน Chrome, Safari
                    หรือเบราว์เซอร์ภายนอก
                </p>
                <div className="flex flex-col gap-4">
                    <button
                        onClick={handleCopyLink}
                        className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        คัดลอก URL
                    </button>
                    <button
                        onClick={handleInstruction}
                        className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                        วิธีเปิดในเบราว์เซอร์
                    </button>
                </div>
            </div>
        );
    }

    return <>{children}</>;
};

export default InAppBrowserBlocker;
