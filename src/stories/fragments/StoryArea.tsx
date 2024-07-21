import { Box, styled } from '@mui/material'

export const StoryArea = styled(Box)<{ width: number; height: number }>(
  ({ width = 1, height = 1 }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 2px dashed #333;
  background-color: #ccc;
  min-width: ${width}px;
  width: 100%;
  min-height: ${height}px;
  height: 100%;
`,
)
