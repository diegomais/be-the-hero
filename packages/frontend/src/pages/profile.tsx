import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import * as localStorageKeys from '../constants/local-storage'
import api from '../services/api'
import ProfileTemplate from '../templates/profile'

export default function ProfilePage(): JSX.Element {
  const router = useRouter()
  const [ngoId, setNgoId] = useState('')
  const [incidents, setIncidents] = useState([])
  const [ngoName, setNgoName] = useState('')

  useEffect(() => {
    setNgoId(localStorage.getItem(localStorageKeys.ID))
    setNgoName(localStorage.getItem(localStorageKeys.NAME))
  }, [])

  useEffect(() => {
    api
      .get('profile', { headers: { Authorization: ngoId } })
      .then((response) => {
        setIncidents(response.data || [])
      })
  }, [ngoId])

  const handleDeleteIncident = useCallback(
    async (id: string) => {
      try {
        await api.delete(`incidents/${id}`, {
          headers: { Authorization: ngoId },
        })

        setIncidents((prevIncidents) =>
          prevIncidents.filter((incident) => incident.id !== id)
        )
      } catch (error) {
        alert('There was an error removing the incident, please try again.')
      }
    },
    [ngoId]
  )

  const handleLogout = useCallback(() => {
    localStorage.clear()

    router.push('/')
  }, [router])

  return (
    <ProfileTemplate
      handleDeleteIncident={handleDeleteIncident}
      handleLogout={handleLogout}
      incidents={incidents}
      ngoName={ngoName}
    />
  )
}
