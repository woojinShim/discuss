'use client'

import { useSession } from "next-auth/react"

export default function Profile() {
    const session = new useSession();

    if(session.data?.user) {
        return <div>from client: {JSON.stringify(session.data.user.name)} signed in</div>
    }
    return <div>NOT signed in</div>
}