import Link from 'next/link'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import s from './styles.module.css'

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
    <div className={s.container}>
      <header className={s.header}>
        <img className={s.image} src="images/logo.svg" alt="Logo" />

        <span className={s.welcome}>Welcome, {ngoName}</span>

        <Link href="/incidents/new" className="button">
          Register New Incident
        </Link>

        <button onClick={onLogout} type="button" data-testid="logout-button">
          <FiPower size={20} color="#E02041" />
        </button>
      </header>

      <h1 className={s.heading}>Registered incidents</h1>

      <ul className={s.list}>
        {incidents.map((incident) => (
          <li className={s.item} key={incident.id}>
            <strong>Incident:</strong>
            <p>{incident.title}</p>

            <strong>Description:</strong>
            <p>{incident.description} </p>

            <strong>Value:</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </p>

            <button onClick={() => onIncidentDelete(incident.id)} type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
              <span className="sr-only">Delete</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
