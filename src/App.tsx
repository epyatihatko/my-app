import { Box, Typography } from '@mui/material'

import { CustomCard } from './components/card'
import { Slider } from './components/slider'
import { Header } from './components/header'

import { membersList, actionList, careList } from './mock'

import styles from './app.module.scss'

function App() {
  return (
    <div className={styles.root}>
      <Header />
      <Box className={styles.container}>
        <Box className={styles.title}>
          <Typography component='h1'>Hi, [Kyle]!</Typography>
        </Box>
        <Box className={styles.cardContainer}>
          {membersList.map((el, index) => (
            <CustomCard
              key={index}
              icon={el.icon}
              title={el.title}
              text={el.text}
              theme={el.theme}
            />
          ))}
        </Box>

        <Box className={styles.title}>
          <Typography component='h2'>Action items</Typography>
        </Box>
        <Box className={styles.cardContainer}>
          {actionList.map((el, index) => (
            <CustomCard
              key={index}
              icon={el.icon}
              title={el.title}
              text={el.text}
              theme={el.theme}
            />
          ))}
        </Box>

        <Box className={styles.title}>
          <Typography component='h2'>Action items</Typography>
        </Box>
        <Box className={styles.cardContainer}>
          {careList.map((el, index) => (
            <CustomCard
              key={index}
              icon={el.icon}
              title={el.title}
              text={el.text}
              theme={el.theme}
            />
          ))}
        </Box>

        <Box className={styles.title}>
          <Typography component='h1'>Explore our offerings</Typography>
        </Box>

        <Slider />
      </Box>
    </div>
  )
}

export default App
