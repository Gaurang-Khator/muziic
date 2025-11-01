"use client";

// recoil, Themes Provider, next-auth provider etc can be added here in future

//Providers like sessionProvider -> context-api in React

import { SessionProvider } from "next-auth/react";

export function Providers({children}: {children: React.ReactNode}) {
  return <SessionProvider>
        {children}
    </SessionProvider>;
}