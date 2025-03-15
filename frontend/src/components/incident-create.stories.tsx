import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn, userEvent, waitFor, within } from '@storybook/test'

import CreateIncidentTemplate from './incident-create'

const meta = {
  title: 'Templates/CreateIncident',
  component: CreateIncidentTemplate,
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
} satisfies Meta<typeof CreateIncidentTemplate>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const FilledForm: Story = {
  play: async ({ args, canvasElement }) => {
    args.onSubmit.mockClear()
    const canvas = within(canvasElement)
    const data = {
      title: 'Some title',
      description: 'Some description',
      value: '123',
    }

    const titleInput = canvas.getByPlaceholderText(/incident title/i)
    await expect(titleInput).toBeInTheDocument()
    await userEvent.type(titleInput, data.title)
    await expect(titleInput).toHaveValue(data.title)

    const descriptionInput = canvas.getByPlaceholderText(/description/i)
    await expect(descriptionInput).toBeInTheDocument()
    await userEvent.type(descriptionInput, data.description)
    await expect(descriptionInput).toHaveValue(data.description)

    const valueInput = canvas.getByPlaceholderText(/value/i)
    await expect(valueInput).toBeInTheDocument()
    await userEvent.type(valueInput, data.value)
    await expect(valueInput).toHaveValue(data.value)

    expect(args.onSubmit).not.toHaveBeenCalled()
    const submitButton = canvas.getByRole('button', {
      name: /register incident/i,
    })
    await expect(submitButton).toBeInTheDocument()
    await userEvent.click(submitButton)
    await waitFor(() => expect(args.onSubmit).toHaveBeenNthCalledWith(1, data))
  },
}
