import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import * as localStorageKeys from '../../constants/local-storage'
import api from '../../services/api'
import CreateIncidentTemplate from '../../templates/incident-create'

export default function CreateIncidentPage(): JSX.Element {
  const router = useRouter()
  const [ngoId, setNgoId] = useState('')

  useEffect(() => {
    setNgoId(localStorage.getItem(localStorageKeys.ID))
  }, [])

  const handleSubmit = useCallback(
    async (data: { title: string; description: string; value: string }) => {
      try {
        await api.post('incidents', data, { headers: { Authorization: ngoId } })

        router.push('/profile')
      } catch (error) {
        alert('There was an error. Please try again.')
      }
    },
    [ngoId, router]
  )

  return <CreateIncidentTemplate onSubmit={handleSubmit} />
}
