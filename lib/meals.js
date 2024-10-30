import sql from 'better-sqlite3'
import { error } from 'console';

const db = sql('meals.db')

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const randomErrorGenerator = Math.floor(Math.random() * 10)
    if (randomErrorGenerator === 7) throw new error('random loading meals failed')

    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}