import { styled } from '../../styles'
import { TooltipArrow, TooltipContent } from '@radix-ui/react-tooltip'

export const TooltipPrimitiveContent = styled(TooltipContent, {
  backgroundColor: '$gray900',
  padding: '$4',
  borderRadius: '$sm',
  fontFamily: '$default',
  color: '$gray100',
})

export const TooltipPrimitiveArrow = styled(TooltipArrow, {
  fill: '$gray900',
})
