import { useEffect, useState } from "react";

function dataFetch () {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {

        function dataFetch(){fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
            .catch((error) => {
                setError(error)
                setLoading(false)
            })}
        dataFetch()
        return () => {

        }
   
    }, [])
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    )

}