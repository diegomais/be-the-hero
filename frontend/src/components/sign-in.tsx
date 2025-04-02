import { FormEvent, useCallback, useState } from 'react'
import { FiLogIn } from 'react-icons/fi'

import BackLink from '@/components/ui/back-link'
import Button from '@/components/ui/button'
import Input from '@/components/ui/input'

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
    <div className="container mx-auto flex min-h-svh items-center justify-center gap-16 lg:gap-40">
      <section className="mr-8 w-full max-w-80">
        <img alt="Logo" src="images/logo.svg" />

        <form className="mt-24" onSubmit={handleSubmit}>
          <h1 className="mb-8 text-3xl font-bold">Sign In</h1>

          <Input
            placeholder="Your ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />

          <Button className="mt-4" type="submit">
            Sign In
          </Button>

          <BackLink.Root href="/register">
            <FiLogIn className="mr-2 text-rose-600" />
            Create Your Profile
          </BackLink.Root>
        </form>
      </section>

      <img
        alt="Heroes"
        className="hidden w-1/2 md:block"
        src="images/heroes.png"
      />
    </div>
  )
}
