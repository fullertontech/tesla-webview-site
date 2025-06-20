"use client";

import * as React from "react";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/lib/emotion-cache";

export default function EmotionRegistry({ children }: { children: React.ReactNode }) {
    const [emotionCache] = React.useState(() => createEmotionCache());

    return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
}
