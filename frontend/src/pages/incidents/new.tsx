import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import { baseURL } from '@/constants/api'
import * as localStorageKeys from '@/constants/local-storage'
import CreateIncidentTemplate from '@/templates/incident-create'

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

  return <CreateIncidentTemplate onSubmit={handleSubmit} />
}
