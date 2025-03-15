import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

import SignUpTemplate from '@/components/sign-up'
import { baseURL } from '@/constants/api'
import * as localStorageKeys from '@/constants/local-storage'

export default function RegisterPage() {
  const router = useRouter()

  const handleSubmit = useCallback(
    async (data: {
      city: string
      email: string
      name: string
      state: string
      whatsapp: string
    }) => {
      try {
        const response = await fetch(`${baseURL}/ngos`, {
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        })
        const { id, name } = await response.json()

        alert(
          `Your access ID: ${id}. Write it down because it is necessary to access the platform.`,
        )

        localStorage.setItem(localStorageKeys.ID, id)
        localStorage.setItem(localStorageKeys.NAME, name)

        router.push('/')
      } catch (error) {
        console.error(error)
        alert('There was a problem. Please try again later.')
      }
    },
    [router],
  )

  return (
    <>
      <Head>
        <title>Be The Hero</title>
      </Head>
      <SignUpTemplate onSubmit={handleSubmit} />
    </>
  )
}
