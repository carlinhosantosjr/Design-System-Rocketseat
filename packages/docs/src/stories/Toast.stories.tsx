import { Button, Toast, ToastProps } from '@carlinhosantosjr-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react/*'
import { useState } from 'react'

const ToastTest = (props: ToastProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100px' }}>
      <Button size={'sm'} onClick={() => setIsOpenModal(true)}>
        Click
      </Button>
      <Toast open={isOpenModal} {...props} onOpenChange={setIsOpenModal} />
    </div>
  )
}

export default {
  title: 'Surfaces/Toast',
  component: ToastTest,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
