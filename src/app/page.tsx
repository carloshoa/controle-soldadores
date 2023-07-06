'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function Home() {
    const { data: session } = useSession()

     return (
        <>
            <h1>tela inicial</h1>
            <ul>
                <li>
                    <Link href={'/app'}> App </Link>
                </li>
                <li>
                    <Link href={'/*'}> Area de teste </Link>
                </li>
                <li>

                </li>
                <div>
                    <div>{session?.user?.name}</div>
                </div>
                {session?.user ? (
                    <button onClick={() => signOut()}>Sign Out</button>
                ) : (
                    <div></div>
                )}
            </ul>
        </  >
    )
}
