import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1>{session?.user?.email}</h1>
          <h1>{session?.user?.name}</h1>
          <Image
            alt="avatar do usuário"
            width={200}
            height={200}
            src={session?.user?.image!}
          />
          <button onClick={() => signOut()}>Deslogar</button>
        </main>
      </>
    )
  }
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Você não está logado. <br />
        <button onClick={() => signIn()}>Logar</button>
      </main>
    </>
  )
}
