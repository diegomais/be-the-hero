import { useRouter } from 'next/router'
import { useCallback } from 'react'
import * as localStorageKeys from '../constants/local-storage'
import api from '../services/api'
import SignInTemplate from '../templates/sign-in'

export default function HomePage(): JSX.Element {
  const router = useRouter()

  const handleLogin = useCallback(
    async ({ id }: { id: string }) => {
      try {
        const { data } = await api.post('sessions', { id })

        localStorage.setItem(localStorageKeys.ID, id)
        localStorage.setItem(localStorageKeys.NAME, data.name)

        router.push('/profile')
      } catch (error) {
        alert('There was an error. Please try again later.')
      }
    },
    [router]
  )

  return <SignInTemplate onSubmit={handleLogin} />
}
