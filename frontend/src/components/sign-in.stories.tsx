import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn, userEvent, waitFor, within } from '@storybook/test'

import SignInTemplate from './sign-in'

const meta = {
  title: 'Templates/SignIn',
  component: SignInTemplate,
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
} satisfies Meta<typeof SignInTemplate>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const FilledForm: Story = {
  play: async ({ args, canvasElement }) => {
    args.onSubmit.mockClear()
    const canvas = within(canvasElement)
    const data = {
      id: 'some-id',
    }

    const idInput = canvas.getByPlaceholderText(/your id/i)
    await expect(idInput).toBeInTheDocument()
    await userEvent.type(idInput, data.id)
    await expect(idInput).toHaveValue(data.id)

    expect(args.onSubmit).not.toHaveBeenCalled()
    const submitButton = canvas.getByRole('button', {
      name: /sign in/i,
    })
    await expect(submitButton).toBeInTheDocument()
    await userEvent.click(submitButton)
    await waitFor(() => expect(args.onSubmit).toHaveBeenNthCalledWith(1, data))
  },
}
