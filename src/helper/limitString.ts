const subDesc = (str: string, n: number): string => {
    return str?.length >= n ? `${str.substring(0, n)}...` : str
}

export default subDesc
