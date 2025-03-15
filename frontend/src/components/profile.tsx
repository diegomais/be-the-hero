import Link from 'next/link'
import { FiPower, FiTrash2 } from 'react-icons/fi'

interface Incident {
  id: string
  description: string
  title: string
  value: number
}

interface Props {
  incidents: Incident[]
  ngoName: string
  onIncidentDelete(id: string): void
  onLogout(): void
}

export default function ProfileTemplate({
  incidents,
  ngoName,
  onIncidentDelete,
  onLogout,
}: Props) {
  return (
    <div className="container mx-auto my-8 px-8">
      <header className="flex flex-col items-center gap-4 sm:flex-row">
        <img className="h-16" src="images/logo.svg" alt="Logo" />

        <span className="ml-6 text-xl">Welcome, {ngoName}</span>

        <Link
          href="/incidents/new"
          className="flex h-14 w-64 cursor-pointer items-center justify-center rounded-lg bg-rose-600 p-6 text-lg font-bold whitespace-nowrap text-white transition-all duration-200 hover:brightness-90 sm:ml-auto"
        >
          Register New Incident
        </Link>

        <button
          className="flex h-14 w-14 min-w-14 items-center justify-center rounded border border-zinc-300 bg-transparent text-xl text-rose-600 transition-colors hover:border-neutral-400"
          type="button"
          onClick={onLogout}
        >
          <FiPower />
          <span className="sr-only">Log Out</span>
        </button>
      </header>

      <h1 className="mt-20 mb-6 text-2xl font-bold">Registered incidents</h1>

      <ul className="grid list-none gap-6 md:grid-cols-2">
        {incidents.map((incident) => (
          <li key={incident.id} className="relative rounded-lg bg-gray-100 p-6">
            <strong className="mb-4 block text-zinc-700 uppercase">
              Incident:
            </strong>
            <p className="text-base text-zinc-500">{incident.title}</p>

            <strong className="mt-8 mb-4 block text-zinc-700 uppercase">
              Description:
            </strong>
            <p className="text-base text-zinc-500">{incident.description} </p>

            <strong className="mt-8 mb-4 block text-zinc-700 uppercase">
              Value:
            </strong>
            <p className="text-base text-zinc-500">
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </p>

            <button
              onClick={() => onIncidentDelete(incident.id)}
              type="button"
              className="absolute top-6 right-6 border-0 bg-transparent text-xl text-zinc-400 transition-opacity hover:opacity-80"
            >
              <FiTrash2 />
              <span className="sr-only">Delete</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
