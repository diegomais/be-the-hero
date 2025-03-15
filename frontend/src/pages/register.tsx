import { useRouter } from 'next/router'
import { useCallback } from 'react'

import { baseURL } from '@/constants/api'
import * as localStorageKeys from '@/constants/local-storage'
import SignUpTemplate from '@/templates/sign-up'

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
          `Your access ID: ${id}. Write it down because it is necessary to access the platform.`
        )

        localStorage.setItem(localStorageKeys.ID, id)
        localStorage.setItem(localStorageKeys.NAME, name)

        router.push('/')
      } catch (error) {
        console.error(error)
        alert('There was a problem. Please try again later.')
      }
    },
    [router]
  )

  return <SignUpTemplate onSubmit={handleSubmit} />
}
