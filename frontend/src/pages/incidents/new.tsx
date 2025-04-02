import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import CreateIncidentTemplate from '@/components/incident-create'
import { baseURL } from '@/constants/api'
import * as localStorageKeys from '@/constants/local-storage'

export default function CreateIncidentPage() {
  const router = useRouter()
  const [ngoId, setNgoId] = useState('')

  useEffect(() => {
    setNgoId(localStorage.getItem(localStorageKeys.ID) ?? '')
  }, [])

  const handleSubmit = useCallback(
    async (data: { title: string; description: string; value: string }) => {
      if (!ngoId) return
      try {
        await fetch(`${baseURL}/incidents`, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { Authorization: ngoId, 'Content-Type': 'application/json' },
        })

        router.push('/profile')
      } catch (error) {
        alert('There was an error. Please try again.')
        console.error(error)
      }
    },
    [ngoId, router]
  )

  return (
    <>
      <Head>
        <title>Be The Hero</title>
      </Head>
      <CreateIncidentTemplate onSubmit={handleSubmit} />
    </>
  )
}
