import React from 'react'
import classNames from 'classnames'

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Box, Typography } from '@mui/material'

import styles from './card.module.scss'

export const CustomCard: React.FC<IMembersList> = ({ icon, title, text, theme }) => {
  return (
    <Box
      className={classNames(styles.root, {
        [styles.dark]: theme === 'dark',
        [styles.warning]: theme === 'warning',
        [styles.success]: theme === 'success'
      })}
    >
      <Box
        className={classNames(styles.iconContainer, {
          [styles.iconDark]: theme === 'dark',
          [styles.iconWarning]: theme === 'warning',
          [styles.iconSuccess]: theme === 'success'
        })}
      >
        <img src={icon} />
      </Box>
      <Box className={styles.body}>
        <Box className={styles.cardTitle}>
          <Typography>{title}</Typography>
        </Box>
        <Typography>{text}</Typography>
      </Box>
      <Box>
        <ArrowRightAltIcon />
      </Box>
    </Box>
  )
}
