import Link from 'next/link'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import s from './styles.module.css'

export type ProfileTemplateProps = {
  handleDeleteIncident(id: string): void
  handleLogout(): void
  incidents: Array<{
    id: string
    description: string
    title: string
    value: number
  }>
  ngoName: string
}

export default function ProfileTemplate({
  handleDeleteIncident,
  handleLogout,
  incidents,
  ngoName,
}: ProfileTemplateProps): JSX.Element {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <img className={s.image} src="images/logo.svg" alt="Logo" />

        <span className={s.welcome}>Welcome, {ngoName}</span>

        <Link href="/incidents/new">
          <a className="button">Register New Incident</a>
        </Link>

        <button
          onClick={handleLogout}
          type="button"
          data-testid="logout-button"
        >
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

            <button
              onClick={() => handleDeleteIncident(incident.id)}
              type="button"
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
