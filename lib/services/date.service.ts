export const formatDate = (dateString: string) => {
    const YYYYMMDD = dateString.split('T')[0]
    const [year, month, day] = YYYYMMDD.split('-')
    return `${day}/${month}/${year}`
}
