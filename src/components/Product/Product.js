import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import useLanguage from '../../hooks/useLanguage'
import {v4 as uuidv4} from 'uuid'
import {BeerSlide, Slider, LoadingSpinner} from '../../common-components'
import {SwiperSlide} from 'swiper/react/swiper-slide'
import {productData, beerSliderSettings} from './product.data'
import {getLocationData} from '../../store/slices/getLocationDataSlice'
import * as Styled from './ProductStyles'


const Product = () => {
    const [isMobileMode, setIsMobileMode] = useState(true)
    const {location, address} = useSelector(state => state.actualLocation)
    const {loading: isDataLoading, cards: beerCardsData}= useSelector(state => state.locationData)
    const langSwitch = useSelector(state => state.selectLanguage.langSwitch)
    const title = useLanguage(productData, langSwitch)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getLocationData({location: location, kind: 'beer'}))
    }, [location])

    const startWidth = () => {
        if (document.documentElement.clientWidth <= 1104) {
            setIsMobileMode(true)
        } else {
            setIsMobileMode(false)
        }
    }

    window.addEventListener('resize', () => {
        startWidth()
    })

    const slides = beerCardsData.map(item => (
        <SwiperSlide key={ uuidv4() }>
            <BeerSlide 
                linkToCard={ `/beer_page/${location}/${ item.id }` }
                country={item.country}
                cardNumber={item.id}
                title={item.title}
                name={item.name}
                type={item.type}
                vol03={item.vol03}
                vol05={item.vol05}
                vol1={item.vol1}
                updateDate={item.updateDate}
            />
        </SwiperSlide>
    ))

    return (
        <Styled.ProductContainer onLoad={ startWidth }>
            <Styled.ProductTitle>
                {title}
                <span> {address}</span>
            </Styled.ProductTitle>
            {isDataLoading 
                ? (<LoadingSpinner 
                    loading={isDataLoading}
                    color='#cfc600'
                    size={10}
                    titleSize='3'
                />)
                : (<Slider 
                    isMobileMode={isMobileMode}
                    sliderSettings={beerSliderSettings}
                    slides={slides}
                />)
            }
        </Styled.ProductContainer>
    )
}

export default Product