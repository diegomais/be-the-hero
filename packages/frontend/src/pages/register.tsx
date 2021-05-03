import { useRouter } from 'next/router'
import { useCallback } from 'react'
import api from '../services/api'
import SignUpTemplate from '../templates/sign-up'

export default function RegisterPage(): JSX.Element {
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
        const response = await api.post('ngos', data)

        alert(
          `Your access ID: ${response.data.id}. Write it down because it is necessary to access the platform.`
        )

        router.push('/')
      } catch (error) {
        alert('There was a problem. Please try again later.')
      }
    },
    [router]
  )

  return <SignUpTemplate onSubmit={handleSubmit} />
}
