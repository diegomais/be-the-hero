import { useCallback, useState } from 'react'

import BackLink from '@/components/ui/back-link'
import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
import Textarea from '@/components/ui/textarea'

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
    [description, onSubmit, title, value],
  )

  return (
    <div className="container mx-auto flex min-h-svh items-center justify-center">
      <div className="flex w-full flex-col items-center justify-between gap-8 rounded-lg bg-gray-100 p-24 shadow-xl md:flex-row">
        <section className="w-full max-w-96">
          <img src="../images/logo.svg" alt="Logo" />

          <h1 className="mt-16 mb-8 text-3xl font-bold">
            Register New Incident
          </h1>

          <p className="text-lg/8 text-zinc-500">
            Describe the incident in detail to find a hero to solve it.
          </p>

          <BackLink.Root href="/profile">
            <BackLink.Icon />
            Back to Profile
          </BackLink.Root>
        </section>

        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <Input
            placeholder="Incident title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Textarea
            className="mt-2"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Input
            className="mt-2"
            placeholder="Value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <Button className="mt-4" type="submit">
            Register Incident
          </Button>
        </form>
      </div>
    </div>
  )
}
