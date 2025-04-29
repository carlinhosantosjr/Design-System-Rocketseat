import { keyframes, styled } from '../../styles'
import { Box } from '../Box'
import { space } from '@carlinhosantosjr-ignite-ui/tokens'
import { Text } from '../Text'
import { X } from 'phosphor-react'
import { Root, ToastViewport } from '@radix-ui/react-toast'

const VIEWPORT_PADDING = 32

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastRoot = styled(Root, {
  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
})

export const ToastContainer = styled(Box, {
  display: 'flex',
  justifyContent: 'space-between',
  height: '45px',
  width: '350px',
})

export const ToastContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: space[2],
})

export const TextDescription = styled(Text, {
  color: '$gray200',
})

export const CloseButton = styled(X, {
  height: 20,
  width: 20,
  color: '$gray200',
})

export const ToastViewportStyled = styled(ToastViewport, {
  position: 'fixed',
  bottom: 0,
  right: 10,
  zIndex: 9999,
})
