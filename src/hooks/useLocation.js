const useLocation = (location, street) => {
  let address;
  switch (street.toLowerCase()) {
    case 'kepna':
      address = location.kepna
      break
    case 'lwowska':
      address = location.lwowska
      break
    case 'ursynow':
      address = location.ursynow
      break
    default: 
    address = location.kepna
      break
  }

  return address
}

export default useLocation;