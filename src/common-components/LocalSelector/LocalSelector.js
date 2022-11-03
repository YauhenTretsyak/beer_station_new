import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setFullAddress} from '../../store/slices/setLocationSlice'
import {v4 as uuidv4} from 'uuid'
import locations from './localSelector.data'
import * as Styled from './LocalSelectorStyles'

const LocalSelector = ({isDisabled}) => {

    const dispatch = useDispatch()
    const address = useSelector(state => state.actualLocation.address)
    const [isDisplay, setIsDisplay] = useState(false)

    const handlerLocation = (e) => {
        if (isDisabled) return
        const location = e.target.getAttribute('data-local')
        const address = e.target.textContent
        dispatch(setFullAddress({
            location: location, 
            address: address,
        }))
        setIsDisplay(false)
    }

    const hadlerOpenMenu = () => {
        if (isDisabled) return
        setIsDisplay(!isDisplay)
    }

    const local = locations.map(item => (
        <Styled.Place 
            key={uuidv4()}
            data-local={item.data}
            onClick={handlerLocation}
        >
            {item.loc}
        </Styled.Place>
    ))

    return (
        <Styled.Selector 
            isDisabled={isDisabled}
            isDisplay={isDisplay}
        >
            <Styled.Paragraph 
                isDisplay={isDisplay}
                onClick={hadlerOpenMenu}
            >
                {address}
            </Styled.Paragraph>
            <Styled.Wrapper isDisplay={isDisplay}>
                {local}
            </Styled.Wrapper>
        </Styled.Selector>
    )
}

export default LocalSelector