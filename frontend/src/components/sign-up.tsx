import { useCallback, useState } from 'react'

import BackLink from '@/components/ui/back-link'
import Button from '@/components/ui/button'
import Input from '@/components/ui/input'

interface Props {
  onSubmit(data: {
    name: string
    email: string
    whatsapp: string
    city: string
    state: string
  }): void
}

export default function SignUpTemplate({ onSubmit }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      onSubmit({ city, email, name, state, whatsapp })
    },
    [city, email, name, onSubmit, state, whatsapp]
  )

  return (
    <div className="container mx-auto flex min-h-svh items-center justify-center">
      <div className="flex w-full flex-col items-center justify-between gap-8 rounded-lg bg-gray-100 p-24 shadow-xl md:flex-row">
        <section className="w-full max-w-96">
          <img src="images/logo.svg" alt="Logo" />

          <h1 className="mt-16 mb-8 text-3xl font-bold">Sign Up</h1>

          <p className="text-lg/8 text-zinc-500">
            Sign up, enter the platform and help people discover incidents in
            your NGO.
          </p>

          <BackLink.Root href="/">
            <BackLink.Icon />
            Sign In
          </BackLink.Root>
        </section>

        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <Input
            placeholder="Name of NGO"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            className="mt-2"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            className="mt-2"
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />

          <div className="mt-2 flex gap-2">
            <Input
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <Input
              className="w-1/3"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>

          <Button type="submit" className="mt-4">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  )
}
