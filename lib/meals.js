import sql from 'better-sqlite3'
import { error } from 'console';

const db = sql('meals.db')

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 5000))

    const randomNumber = Math.floor(Math.random() * 10)
    if (randomNumber === 7) throw new error('random loading meals failed')

    return db.prepare('SELECT * FROM meals').all();
}