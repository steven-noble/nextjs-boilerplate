export const currencyFormatter = (value: string, currencyCode?: string) => {
    const number = parseFloat(value)
    let locale = 'en-GB'

    switch (currencyCode) {
        case 'GBP':
            locale = 'en-GB'
            break
        default:
            locale = 'en-GB'
            currencyCode = 'GBP'
    }

    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currencyCode,
    }).format(number)
}
