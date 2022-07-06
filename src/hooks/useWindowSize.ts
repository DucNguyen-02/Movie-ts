import { useCallback, useEffect, useState } from 'react'

const useWindowSize = () => {
    const validWindow = typeof window === 'object'

    const getSize = useCallback(() => {
        const size: any = {
            width: validWindow ? window.innerWidth : undefined,
            height: validWindow ? window.innerHeight : undefined,
        }

        return size
    }, [validWindow])

    const [size, setSize] = useState(getSize())

    useEffect(() => {
        const handleResize = () => {
            setSize(getSize())
        }

        if (validWindow) {
            window.addEventListener('resize', handleResize)

            return () => window.removeEventListener('resize', handleResize)
        }
    }, [validWindow, getSize, size])

    return size
}

export default useWindowSize
