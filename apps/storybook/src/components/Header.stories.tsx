import type { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Header } from '@mono/components'

type HeaderCover = NonNullable<ComponentProps<typeof Header>['cover']>

const coverUrl = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
  <rect width="1600" height="900" fill="#00264d"/>
  <circle cx="1110" cy="265" r="210" fill="#d9822b"/>
  <path d="M140 610C285 470 430 480 565 620C700 760 875 770 1020 625C1165 480 1310 475 1460 615" fill="none" stroke="#73d6ed" stroke-width="48" stroke-linecap="round"/>
  <path d="M180 280H780" stroke="#ffffff" stroke-width="24" stroke-linecap="round" opacity="0.86"/>
  <path d="M180 350H610" stroke="#ffffff" stroke-width="24" stroke-linecap="round" opacity="0.64"/>
</svg>
`)}`

const cover: HeaderCover = {
  id: 'lundi-bleu-header-cover',
  title: 'Abstract concert image',
  description: 'Abstract concert image',
  width: 1600,
  height: 900,
  url: coverUrl,
}

const introBody = (
  <div style={{ maxWidth: '42rem' }}>
    <h2>Franse kamermuziek in Amsterdam</h2>
    <p>
      Programma's met werken van Debussy, Ravel en Poulenc, uitgevoerd in
      intieme concertzalen.
    </p>
  </div>
)

const sectionBody = (
  <div style={{ maxWidth: '42rem' }}>
    <h2>Over Lundi Bleu</h2>
    <p>
      Een compacte introductie voor tussenliggende paginasecties met dezelfde
      visuele behandeling als de paginakop.
    </p>
  </div>
)

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    tag: {
      control: 'select',
      options: ['header', 'section'],
    },
    title: {
      control: 'text',
    },
    body: {
      control: false,
    },
    className: {
      control: false,
    },
    cover: {
      control: 'object',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const TitleOnly: Story = {
  args: {
    title: 'Lundi Bleu',
  },
}

export const WithBody: Story = {
  args: {
    title: 'Concerten',
    body: introBody,
  },
}

export const WithCover: Story = {
  args: {
    title: 'Lundi Bleu',
    cover,
  },
}

export const WithCoverAndBody: Story = {
  args: {
    title: 'Concerten',
    body: introBody,
    cover,
  },
}

export const SectionHeader: Story = {
  args: {
    tag: 'section',
    title: 'Over Lundi Bleu',
    body: sectionBody,
  },
}
