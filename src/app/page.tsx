import { Button } from "@nextui-org/react"
import * as actions from '@/actions'
import { auth } from '@/auth'
import Profile from '@/components/profile'

export default async function Home() {
  const session = await auth()
  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">로그인</Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit">로그아웃</Button>
      </form>
      {
      session?.user ? <div>{JSON.stringify(session.user)}</div> : <div>Signed Out</div>
    }
    <Profile />
    </div>


  )
}
