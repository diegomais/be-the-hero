import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

import SignInTemplate from '@/components/sign-in'
import { baseURL } from '@/constants/api'
import * as localStorageKeys from '@/constants/local-storage'

export default function HomePage() {
  const router = useRouter()

  const handleLogin = useCallback(
    async ({ id }: { id: string }) => {
      try {
        const response = await fetch(`${baseURL}/sessions`, {
          body: JSON.stringify({ id }),
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
        })
        const { name } = await response.json()

        localStorage.setItem(localStorageKeys.ID, id)
        localStorage.setItem(localStorageKeys.NAME, name)

        router.push('/profile')
      } catch (error) {
        alert('There was an error. Please try again later.')
        console.error(error)
      }
    },
    [router]
  )

  return (
    <>
      <Head>
        <title>Be The Hero</title>
      </Head>
      <SignInTemplate onSubmit={handleLogin} />
    </>
  )
}
