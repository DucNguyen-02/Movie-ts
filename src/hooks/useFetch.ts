import { useEffect, useState } from 'react'

const useFetch = ({ fetcher, url }: any, deps: any[] = []) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [data, setData] = useState()

    useEffect(() => {
        setLoading(true)
        setError(undefined)
        setData(undefined)

        fetcher(url)
            .then((value: any) => setData(value))
            .catch(setError)
            .finally(() => setLoading(false))
    }, [...deps])
    return { loading, error, data }
}

export default useFetch
