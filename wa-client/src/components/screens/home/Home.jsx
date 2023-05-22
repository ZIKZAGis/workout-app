import { useNavigate } from 'react-router-dom'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import styles from './Home.module.scss'
import Statistics from '../profile/statistics/Statistics'

function Home() {
  const navigate = useNavigate()
  return (
      <Layout bgImage='/images/home-bg3.jpg'>
        <Button clickHandler={() => navigate('/new-workout')}>
          New Workout
        </Button>
        <h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
        <Statistics/>
      </Layout>
  )
}

export default Home
