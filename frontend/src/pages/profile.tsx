import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import ProfileTemplate from '@/components/profile'
import { baseURL } from '@/constants/api'
import * as localStorageKeys from '@/constants/local-storage'

type Incidents = React.ComponentProps<typeof ProfileTemplate>['incidents']

export default function ProfilePage() {
  const router = useRouter()
  const [incidents, setIncidents] = useState<Incidents>([])
  const [ngoId, setNgoId] = useState('')
  const [ngoName, setNgoName] = useState('')

  useEffect(() => {
    setNgoId(localStorage.getItem(localStorageKeys.ID) ?? '')
    setNgoName(localStorage.getItem(localStorageKeys.NAME) ?? '')
  }, [])

  useEffect(() => {
    if (!ngoId) return

    fetch(`${baseURL}/profile`, {
      headers: { Authorization: ngoId },
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setIncidents(data || [])
          })
        }
      })
      .catch((error) => {
        alert('There was an error fetching the incidents, please try again.')
        console.error(error)
      })
  }, [ngoId])

  const handleDeleteIncident = useCallback(
    async (id: string) => {
      if (!ngoId) return

      try {
        await fetch(`${baseURL}/incidents/${id}`, {
          method: 'DELETE',
          headers: { Authorization: ngoId, 'Content-Type': 'application/json' },
        })

        setIncidents((prevIncidents) =>
          prevIncidents.filter((incident) => incident.id !== id),
        )
      } catch (error) {
        alert('There was an error removing the incident, please try again.')
        console.error(error)
      }
    },
    [ngoId],
  )

  const handleLogout = useCallback(() => {
    localStorage.clear()

    router.push('/')
  }, [router])

  return (
    <>
      <Head>
        <title>Be The Hero</title>
      </Head>
      <ProfileTemplate
        onIncidentDelete={handleDeleteIncident}
        onLogout={handleLogout}
        incidents={incidents}
        ngoName={ngoName}
      />
    </>
  )
}
