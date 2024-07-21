import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from 'react-flex-element'
import { Part } from '../../core/Part'
import { CancelAction } from './CancelAction'
import { ICON_NAMES } from './types/IconName'

const meta: Meta<typeof CancelAction> = {
  component: CancelAction,
  decorators: [
    (Story) => (
      <Part name="actions.cancelAction">
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

export type Story = StoryObj<typeof CancelAction>

export const Basic: Story = {
  args: {
    name: 'basic',
    disabled: false,
  },
}

export const Tooltips: Story = {
  render: (props) => (
    <Flex row gap={8}>
      <CancelAction {...props} />
      <CancelAction {...props} disabled />
    </Flex>
  ),
  args: {
    name: 'tooltips',
  },
}
