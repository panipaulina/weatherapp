import React from 'react';

export default function Contact({ data }: { data: string }) {
    return <div>{data}</div>
}


// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const data = 'hello'

    // Pass data to the page via props
    return { props: { data } }
}


