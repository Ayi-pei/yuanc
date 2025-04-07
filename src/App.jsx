import { useEffect, useState } from "react";

export default function App() {
    const [isChrome, setIsChrome] = useState(false);
    const [code, setCode] = useState("");

    useEffect(() => {
        const ua = navigator.userAgent.toLowerCase();
        setIsChrome(ua.includes("chrome") && !ua.includes("edg"));
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        alert("✅ 已复制共享码，可粘贴发给客服");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 space-y-6 sm:p-12">
            <h1 className="text-3xl font-bold text-center mt-6 text-blue-600">
                🖥️ 远程协助 · 引导中心
            </h1>

            {!isChrome && (
                <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded shadow">
                    ⚠️ 建议使用 Chrome 浏览器访问本页面
                </div>
            )}

            {/* 响应式视频部分 */}
            <video
                controls
                className="w-full max-w-2xl rounded shadow-md aspect-video"
            >
                <source src="/intro.mp4" type="video/mp4" />
                您的浏览器不支持播放视频。
            </video>

            <a
                href="https://remotedesktop.google.com/support"
                target="_blank"
                className="text-blue-600 underline hover:text-blue-800"
            >
                👉 点击这里打开 Chrome Remote Desktop（生成共享码）
            </a>

            {/* 响应式输入框 */}
            <input
                type="text"
                placeholder="请粘贴共享码..."
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="border border-gray-300 p-3 rounded w-full max-w-md mt-4"
            />

            {/* 响应式按钮 */}
            <button
                onClick={handleCopy}
                className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 mt-4"
            >
                📋 一键复制共享码
            </button>

            <div className="mt-10 text-center text-sm text-gray-500">
                您的共享码仅用于此次远程协助，我们承诺不记录任何信息。
            </div>
        </div>
    );
}
