import Link from 'next/link'
import { FormEvent, useCallback, useState } from 'react'
import { FiLogIn } from 'react-icons/fi'
import s from './styles.module.css'

interface Props {
  onSubmit(data: { id: string }): void
}

export default function SignInTemplate({ onSubmit }: Props) {
  const [id, setId] = useState('')

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      onSubmit({ id })
    },
    [id, onSubmit]
  )

  return (
    <div className={s.container}>
      <section className={s.section}>
        <img src="images/logo.svg" alt="Logo" />

        <form className={s.form} onSubmit={handleSubmit}>
          <h1 className={s.header}>Sign In</h1>

          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Your ID"
          />

          <button className="button" type="submit">
            Sign In
          </button>

          <Link href="/register" className="back-link">
            <FiLogIn size={16} color="#E02041" />
            Create Your Profile
          </Link>
        </form>
      </section>

      <img src="images/heroes.png" alt="Heroes" />
    </div>
  )
}
