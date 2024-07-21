import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from 'react-flex-element'
import { Part } from '../../core/Part'
import { PrimaryAction } from './PrimaryAction'
import { ICON_NAMES } from './types/IconName'

const meta: Meta<typeof PrimaryAction> = {
  component: PrimaryAction,
  decorators: [
    (Story) => (
      <Part name="actions.primaryAction">
        <Story />
      </Part>
    ),
  ],
  argTypes: {
    name: {
      control: 'text',
    },
    action: {
      control: false,
      action: 'click',
      table: {
        type: { summary: 'submit | reset | clear | Function' },
      },
    },
    icon: {
      control: 'select',
      options: ICON_NAMES,
      table: {
        type: {
          summary: 'MUI icon name',
        },
      },
    },
    positive: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    negative: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
}

export default meta

export type Story = StoryObj<typeof PrimaryAction>

export const Basic: Story = {
  args: {
    name: 'basic',
  },
}

export const Icon: Story = {
  args: {
    name: 'basic',
    icon: 'add',
  },
}

export const Positive: Story = {
  args: {
    name: 'positive',
    positive: true,
  },
}

export const Negative: Story = {
  args: {
    name: 'negative',
    negative: true,
  },
}

export const Tooltips: Story = {
  render: (props) => (
    <Flex row gap={8}>
      <PrimaryAction {...props} />
      <PrimaryAction {...props} disabled />
    </Flex>
  ),
  args: {
    name: 'tooltips',
  },
}
