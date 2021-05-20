import Link from 'next/link'
import { FormEvent, useCallback, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import s from './styles.module.css'

export type SignUpTemplateProps = {
  onSubmit(data: {
    name: string
    email: string
    whatsapp: string
    city: string
    state: string
  }): void
}

export default function SignUpTemplate({
  onSubmit,
}: SignUpTemplateProps): JSX.Element {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      onSubmit({ city, email, name, state, whatsapp })
    },
    [city, email, name, onSubmit, state, whatsapp]
  )

  return (
    <div className={s.container}>
      <div className={s.content}>
        <section className={s.section}>
          <img src="images/logo.svg" alt="Logo" />

          <h1 className={s.heading}>Sign Up</h1>

          <p className={s.paragraph}>
            Sign up, enter the platform and help people discover incidents in
            your NGO.
          </p>

          <Link href="/">
            <a className="back-link">
              <FiArrowLeft size={16} color="#E02041" />
              Sign In
            </a>
          </Link>
        </section>

        <form className={s.form} onSubmit={handleSubmit}>
          <input
            placeholder="Name of NGO"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
          />

          <input
            placeholder="WhatsApp"
            onChange={(e) => setWhatsapp(e.target.value)}
            value={whatsapp}
          />

          <div className={s.group}>
            <input
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />

            <input
              className={s.state}
              placeholder="State"
              onChange={(e) => setState(e.target.value)}
              value={state}
            />
          </div>

          <button className="button" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}
