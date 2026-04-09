import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@mono/components'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    target: {
      control: 'select',
      options: [undefined, '_blank'],
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    href: '#',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    href: '#',
  },
}

export const Tertiary: Story = {
  args: {
    children: 'Button',
    variant: 'tertiary',
    href: '#',
  },
}

export const WithSuffix: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    href: '#',
    suffix: '→',
  },
}

export const ExternalLink: Story = {
  args: {
    children: 'External Link',
    variant: 'primary',
    href: 'https://example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
}
