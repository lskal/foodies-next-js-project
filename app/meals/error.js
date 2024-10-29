'use client'

export default function Error({ error }) {
    return (
        <main className='error'>
            <h1>An error occured!</h1>
            {/* {console.log(error)} */}

            <p>Failed to randomly fetch meal data. Please try again later.</p>
        </main>
    )
}