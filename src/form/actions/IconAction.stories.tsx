import { Box, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from 'react-flex-element'
import { IconAction } from './IconAction'
import { ICON_NAMES } from './types/IconName'

const meta: Meta<typeof IconAction> = {
  component: IconAction,
  argTypes: {
    name: {
      control: 'text',
    },
    icon: {
      control: 'select',
      options: ICON_NAMES,
    },
    positive: {
      control: 'boolean',
    },
    negative: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    name: 'edit',
    icon: 'create',
    positive: false,
    negative: false,
    disabled: false,
  },
}

export default meta

type Story = StoryObj<typeof IconAction>

export const Basic: Story = {}

export const CompleteList: Story = {
  render: () => (
    <Flex row wrap>
      {Object.values(ICON_NAMES).map((iconName) => (
        // @ts-ignore
        <Flex as={Box} col gap={1} m={1} width={100}>
          <IconAction name={iconName} icon={iconName} onClick={() => null} />
          <Typography
            variant="caption"
            textAlign="center"
            sx={{
              width: 100,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {iconName}
          </Typography>
        </Flex>
      ))}
    </Flex>
  ),
}
