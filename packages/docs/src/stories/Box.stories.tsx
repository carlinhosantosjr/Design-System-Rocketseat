import { Box, BoxProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <p>Testando o elemente box</p>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
