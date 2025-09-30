// app/not-found.tsx
"use client";

import React from "react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-gray-700 p-6">
            <h1 className="text-6xl font-extrabold mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-2">ไม่พบหน้าที่คุณค้นหา</h2>
            <p className="mb-8 text-lg text-center max-w-md">
                ขอโทษครับ, หน้าที่คุณกำลังมองหาอาจถูกย้าย, ลบไปแล้ว หรือไม่เคยมีอยู่
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition"
            >
                กลับสู่หน้าหลัก
            </Link>
        </div>
    );
}
