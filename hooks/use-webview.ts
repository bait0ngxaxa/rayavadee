// hooks/use-webview.ts
"use client";

export function isWebView() {
  const ua = window.navigator.userAgent || "";

  // ตรวจจับ Android WebView
  const isAndroidWebView =
    ua.includes("wv") || (ua.includes("Android") && !ua.includes("Chrome"));

  // ตรวจจับ iOS WKWebView: มี AppleWebKit แต่ไม่มี Safari
  const isIOSWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(ua);

  return isAndroidWebView || isIOSWebView;
}
