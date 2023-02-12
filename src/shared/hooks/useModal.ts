import { useState } from 'react'

export const useModal = (initialMode = false) => {
  const [isOpen, setModalOpen] = useState(initialMode)
  const toggle = () => setModalOpen(prevState => !prevState)
  return [isOpen, setModalOpen, toggle] as const
}
