import { PropsWithChildren } from 'react'
import { App } from '../src/core/App'
import { Part } from '../src/core/Part'

export const StoryContainer = ({ children }: PropsWithChildren<{}>) => (
  <App>
    <Part name="storybook">{children}</Part>
  </App>
)
