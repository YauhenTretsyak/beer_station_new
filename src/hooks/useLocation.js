const useLocation = (location, street) => {
    let addressData
    switch (street.toLowerCase()) {
    case 'kepna':
        addressData = location.kepna
        break
    case 'lwowska':
        addressData = location.lwowska
        break
    case 'ursynow':
        addressData = location.ursynow
        break
    default: 
        addressData = location.kepna
        break
    }

    return addressData
}

export default useLocation
