import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'
import { TooltipPrimitiveArrow, TooltipPrimitiveContent } from './styles'

export interface TooltipProps
  extends ComponentProps<typeof TooltipPrimitive.Root> {
  children: ReactNode
  content: string
}

export function Tooltip({ children }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitiveContent>
          23 de Outubro - Disponível
          <TooltipPrimitiveArrow />
        </TooltipPrimitiveContent>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
