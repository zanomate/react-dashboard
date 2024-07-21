import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from 'react-flex-element'
import { Part } from '../../core/Part'
import { ICON_NAMES } from './types/IconName'
import { SecondaryAction } from './SecondaryAction'

const meta: Meta<typeof SecondaryAction> = {
  component: SecondaryAction,
  decorators: [
    (Story) => (
      <Part name="actions.secondaryAction">
        <Story />
      </Part>
    ),
  ],
  argTypes: {
    name: {
      control: 'text',
    },
    icon: {
      control: 'select',
      options: ['', ...ICON_NAMES],
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta

export type Story = StoryObj<typeof SecondaryAction>

export const Basic: Story = {
  args: {
    name: 'basic',
    icon: 'create',
    disabled: false,
  },
}

export const Tooltips: Story = {
  render: (props) => (
    <Flex row gap={8}>
      <SecondaryAction {...props} />
      <SecondaryAction {...props} disabled />
    </Flex>
  ),
  args: {
    name: 'tooltips',
    icon: 'create',
  },
}
