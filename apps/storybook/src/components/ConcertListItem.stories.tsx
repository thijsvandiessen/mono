import type { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ConcertListItem } from '@mono/components'

type ConcertData = ComponentProps<typeof ConcertListItem>['data']
type ConcertLocation = ConcertData['locations'][number]

const posterUrl = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1273" viewBox="0 0 900 1273">
  <rect width="900" height="1273" fill="#00264d"/>
  <circle cx="450" cy="350" r="230" fill="#d9822b"/>
  <path d="M120 900C250 760 360 820 460 920C560 1020 690 1040 780 900" fill="none" stroke="#73d6ed" stroke-width="42" stroke-linecap="round"/>
  <text x="450" y="680" text-anchor="middle" font-family="Arial, sans-serif" font-size="86" font-weight="700" fill="#ffffff">Lundi Bleu</text>
</svg>
`)}`

const location: ConcertLocation = {
  id: 'amstelkerk',
  title: 'Amstelkerk',
  address: 'Amstelveld 10, Amsterdam',
  lat: 52.3635,
  lng: 4.8975,
  startTime: '2027-03-14T20:15:00+01:00',
  ticketLink: 'https://example.com/tickets',
}

const secondLocation: ConcertLocation = {
  id: 'muziekgebouw',
  title: 'Muziekgebouw aan het IJ',
  address: 'Piet Heinkade 1, Amsterdam',
  lat: 52.3779,
  lng: 4.9129,
  startTime: '2027-04-02T15:00:00+02:00',
  ticketLink: 'https://example.com/tickets',
}

const baseConcert: ConcertData = {
  id: 'lundi-bleu-amstelkerk',
  title: 'Lundi Bleu speelt Franse kamermuziek',
  image: undefined,
  locations: [location],
  url: '/concerten/lundi-bleu-amstelkerk',
  content: [],
}

const concertWithImage: ConcertData = {
  ...baseConcert,
  image: {
    id: 'poster',
    title: 'Concert poster',
    description: 'Abstracte concertposter voor Lundi Bleu',
    width: 900,
    height: 1273,
    url: posterUrl,
  },
}

const meta: Meta<typeof ConcertListItem> = {
  title: 'Components/ConcertListItem',
  component: ConcertListItem,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'large'],
    },
    isLast: {
      control: 'boolean',
    },
    showLink: {
      control: 'boolean',
    },
    showImage: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{ maxWidth: '56rem', margin: '0 auto', paddingBottom: '8rem' }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ConcertListItem>

export default meta

type Story = StoryObj<typeof meta>

export const Small: Story = {
  args: {
    data: baseConcert,
    size: 'small',
  },
}

export const Large: Story = {
  args: {
    data: concertWithImage,
    size: 'large',
  },
}

export const MultipleLocations: Story = {
  args: {
    data: {
      ...concertWithImage,
      locations: [location, secondLocation],
    },
    size: 'large',
  },
}

export const WithoutTicketLink: Story = {
  args: {
    data: {
      ...baseConcert,
      locations: [
        {
          ...location,
          ticketLink: null,
        },
      ],
    },
    size: 'small',
  },
}

export const PastConcert: Story = {
  args: {
    data: {
      ...baseConcert,
      locations: [
        {
          ...location,
          startTime: '2025-03-14T20:15:00+01:00',
        },
      ],
    },
    size: 'small',
  },
}

export const AgendaMode: Story = {
  args: {
    data: {
      ...baseConcert,
      locations: [location, secondLocation],
    },
    size: 'large',
    isLast: true,
    showImage: false,
    showLink: false,
    title: 'Agenda',
  },
}
