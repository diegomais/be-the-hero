import type { Meta, StoryObj } from '@storybook/react'
import BackLink from './back-link'

const meta: Meta<typeof BackLink.Root> = {
  title: 'UI/BackLink',
  component: BackLink.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BackLink.Root>

export const Default: Story = {
  render: () => <BackLink.Root href="/">Back to Home</BackLink.Root>,
}

export const WithIcon: Story = {
  render: () => (
    <BackLink.Root href="/">
      <BackLink.Icon />
      Back to Projects
    </BackLink.Root>
  ),
}
