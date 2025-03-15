import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn, userEvent, waitFor, within } from '@storybook/test'

import ProfileTemplate from '.'

const meta = {
  title: 'Templates/Profile',
  component: ProfileTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    incidents: [],
    ngoName: 'Some name',
    onIncidentDelete: fn(),
    onLogout: fn(),
  },
} satisfies Meta<typeof ProfileTemplate>

export default meta
type Story = StoryObj<typeof meta>

export const Empty: Story = {}

export const Default: Story = {
  args: {
    incidents: [
      {
        id: 'first-id',
        title: 'First title',
        description: 'first description',
        value: 123,
      },
      {
        id: 'second-id',
        title: 'Second title',
        description: 'second description',
        value: 321,
      },
    ],
  },
}

export const DeleteIncident: Story = {
  args: {
    incidents: Default.args?.incidents,
  },
  play: async ({ args, canvasElement }) => {
    args.onIncidentDelete.mockClear()
    const canvas = within(canvasElement)

    const [firstDeleteButton, secondDeleteButton] = canvas.getAllByRole(
      'button',
      { name: /delete/i }
    )
    await expect(firstDeleteButton).toBeInTheDocument()
    await expect(secondDeleteButton).toBeInTheDocument()
    expect(args.onIncidentDelete).not.toHaveBeenCalled()
    await userEvent.click(firstDeleteButton)
    await waitFor(() =>
      expect(args.onIncidentDelete).toHaveBeenNthCalledWith(
        1,
        args.incidents[0].id
      )
    )
  },
}

export const LogOut: Story = {
  play: async ({ args, canvasElement }) => {
    args.onLogout.mockClear()
    const canvas = within(canvasElement)

    const logOutButton = canvas.getByRole('button', { name: /log out/i })
    await expect(logOutButton).toBeInTheDocument()
    expect(args.onLogout).not.toHaveBeenCalled()
    await userEvent.click(logOutButton)
    await waitFor(() => expect(args.onLogout).toHaveBeenCalled())
  },
}
