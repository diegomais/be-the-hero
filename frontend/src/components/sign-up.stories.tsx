import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn, userEvent, waitFor, within } from '@storybook/test'

import SignUpTemplate from './sign-up'

const meta = {
  title: 'Templates/SignUp',
  component: SignUpTemplate,
  decorators: [
    (Story) => (
      <div className="bg-gray-100 antialiased">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onSubmit: fn(),
  },
} satisfies Meta<typeof SignUpTemplate>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const FilledForm: Story = {
  play: async ({ args, canvasElement }) => {
    args.onSubmit.mockClear()
    const canvas = within(canvasElement)
    const data = {
      name: 'Some name',
      email: 'user@example.com',
      whatsapp: '9998765431',
      city: 'Some city',
      state: 'SP',
    }

    const nameInput = canvas.getByPlaceholderText(/name of ngo/i)
    await expect(nameInput).toBeInTheDocument()
    await userEvent.type(nameInput, data.name)
    await expect(nameInput).toHaveValue(data.name)

    const emailInput = canvas.getByPlaceholderText(/email/i)
    await expect(emailInput).toBeInTheDocument()
    await userEvent.type(emailInput, data.email)
    await expect(emailInput).toHaveValue(data.email)

    const whatsappInput = canvas.getByPlaceholderText(/whatsapp/i)
    await expect(whatsappInput).toBeInTheDocument()
    await userEvent.type(whatsappInput, data.whatsapp)
    await expect(whatsappInput).toHaveValue(data.whatsapp)

    const cityInput = canvas.getByPlaceholderText(/city/i)
    await expect(cityInput).toBeInTheDocument()
    await userEvent.type(cityInput, data.city)
    await expect(cityInput).toHaveValue(data.city)

    const ufInput = canvas.getByPlaceholderText(/state/i)
    await expect(ufInput).toBeInTheDocument()
    await userEvent.type(ufInput, data.state)
    await expect(ufInput).toHaveValue(data.state)

    expect(args.onSubmit).not.toHaveBeenCalled()
    const submitButton = canvas.getByRole('button', {
      name: /sign up/i,
    })
    await expect(submitButton).toBeInTheDocument()
    await userEvent.click(submitButton)
    await waitFor(() => expect(args.onSubmit).toHaveBeenNthCalledWith(1, data))
  },
}
