/* loading.js is a protected keywork in next, automaticly attaches to the closest page.js and manages the responce */
/* file named to loading-out to remove this feature, and managed direcly inside the page.js */
import classes from './loading.module.css'

export default function MealsLoadingPage() {
    return <p className={classes.loading}>Fetching data...</p>
}