import Link from 'next/link'

import classes from './page.module.css'
import MealsGrid from '../components/meals/meals-grid'
import { getMeals } from '../../lib/meals'

export default async function Meals() {
  const meals = await getMeals()

  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meals, created <span className={classes.highlight}>by you </span></h1>
      </header>
      <p>Choose your fabourite recipes and cook it yourself. It is easy and fun</p>
      <p className={classes.cta}>
        <Link href='/meals/share'>Share your favourite recipe</Link>
      </p>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  )
}
