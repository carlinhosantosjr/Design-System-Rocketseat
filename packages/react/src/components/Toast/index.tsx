import {
  CloseButton,
  TextDescription,
  ToastContainer,
  ToastContent,
  ToastRoot,
  ToastViewportStyled,
} from './styles'
import { ToastClose, ToastProvider } from '@radix-ui/react-toast'
import { Heading } from '../Heading'
import { ComponentProps } from 'react'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string
  description: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastProvider>
      <ToastRoot asChild {...props}>
        <ToastContainer>
          <ToastContent>
            <Heading size={'sm'}> {title} </Heading>
            <TextDescription size={'sm'}>{description}</TextDescription>
          </ToastContent>
          <ToastClose asChild>
            <CloseButton />
          </ToastClose>
        </ToastContainer>
      </ToastRoot>
      <ToastViewportStyled />
    </ToastProvider>
  )
}
