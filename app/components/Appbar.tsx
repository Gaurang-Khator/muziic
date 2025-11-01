"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export function Appbar() {
    const session = useSession();

  return <div>
    <div className="flex justify-between">
        <div className="p-2 m-2 text-blue-800 font-bold">
            Muziic
        </div>
        <div>
            {session.data?.user && <button className="m-2 p-2 bg-blue-400 font-bold" onClick={() => signOut()}>Log Out</button>}
            {!session.data?.user && <button className="m-2 p-2 bg-blue-400 font-bold" onClick={() => signIn()}>Sign In</button>}
        </div>
    </div>
  </div>
}