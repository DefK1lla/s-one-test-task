import s from './modal.module.css'

import { FC, PropsWithChildren } from 'react'

import { IconButton, Modal as MuiModal, Paper } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

interface Props extends PropsWithChildren {
  isOpen: boolean
  withCloseBtn?: boolean
  onClose: () => void
}

export const Modal: FC<Props> = ({
  isOpen,
  onClose,
  withCloseBtn = true,
  children,
}) => {
  return (
    <MuiModal
      className={s.modalOverlay}
      open={isOpen}
      onClose={onClose}
    >
      <Paper className={s.modalBody}>
        {withCloseBtn && (
          <div className={s.closeBtn}>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </div>
        )}
        {children}
      </Paper>
    </MuiModal>
  )
}
