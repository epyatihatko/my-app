import React from 'react'
import { Box } from '@mui/material'

import styles from './slide.module.scss'

export const SlideBlock = ({ image, text }) => {
  return (
    <Box>
      <Box
        sx={{
          padding: '43%',
          background: `url(${image}) center no-repeat`,
          backgroundSize: 'cover'
        }}
      />
      <Box className={styles.textBlock}>{text}</Box>
    </Box>
  )
}
