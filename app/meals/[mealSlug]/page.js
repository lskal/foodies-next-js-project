'use client'

import { useParams } from "next/navigation";

export default function MealDetails() {
    const params = useParams();
    const mealSlug = params.mealSlug;

    return (
        <div>
            <h2>You are on the MealDetails page, this is the slug page</h2>
            <h2>Slug URL: {mealSlug}</h2>
        </div>
    )

}