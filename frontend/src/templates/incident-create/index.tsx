import Link from 'next/link'
import { useCallback, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import s from './styles.module.css'

interface Props {
  onSubmit(data: { description: string; title: string; value: string }): void
}

export default function CreateIncidentTemplate({ onSubmit }: Props) {
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      onSubmit({ description, title, value })
    },
    [description, onSubmit, title, value]
  )

  return (
    <div className={s.container}>
      <div className={s.content}>
        <section className={s.section}>
          <img src="../images/logo.svg" alt="Logo" />

          <h1 className={s.heading}>Register New Incident</h1>

          <p className={s.paragraph}>
            Describe the incident in detail to find a hero to solve it.
          </p>

          <Link href="/profile" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Back to Profile
          </Link>
        </section>

        <form className={s.form} onSubmit={handleSubmit}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Incident title"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />

          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Value"
          />

          <button className="button" type="submit">
            Register Incident
          </button>
        </form>
      </div>
    </div>
  )
}
