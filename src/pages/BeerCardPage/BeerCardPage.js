import React, {useContext, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import {SwitchContext} from '../../context/SwitchContext'
import {Header} from '../../components/index'
import {BeerCard, LoadingSpinner} from '../../common-components'
import navigationData from '../../components/Navigation/navigation.data'
import {getLocationData} from '../../store/slices/getLocationDataSlice'

import {
    BeerCardPageWrapper,
    BeerPageInfoWrapper,
    BeersInteresting,
} from './BeerCardPage.styles'


const BeerCardPage = () => {
    const {locationSwitch} = useContext(SwitchContext)
    let params = useParams()
    const cardNumber = Number(params.id)
    const isDataLoading = useSelector(state => state.locationData.loading)
    const beerInfo = useSelector(state => state.locationData.cards)
    const beer = beerInfo.find(beerCard => beerCard.id === cardNumber)

    const dispatch = useDispatch()
    
    useEffect(() => {
        if (beerInfo.length > 0) return
        dispatch(getLocationData({location: locationSwitch.location, kind: 'beer'}))
    }, [locationSwitch.location])

    return (
        <>
            <Header 
                navigationLinksData={ navigationData.menu.beer_card_page }
            />
            <BeerCardPageWrapper>
                <BeerPageInfoWrapper>
                    {isDataLoading 
                        ? (<LoadingSpinner 
                                loading={isDataLoading}
                                color="#cfc600"
                                size={10}
                                titleSize="3"
                        />)
                        : (<BeerCard
                                country={ beer.country }
                                cardNumber={ beer.id }
                                title={ beer.title }
                                name={ beer.name }
                                type={ beer.type }
                                vol03={ beer.vol03 }
                                vol05={ beer.vol05 }
                                vol1={ beer.vol1 }
                        />)}
                    <BeersInteresting>
            Ежегодно 17 марта в мире отмечается ещё один праздник, связанный с пивом — День Святого Патрика, крестителя ирландцев. Его придумали ирландские эмигранты в США в XVIII-XIX веках, желая сохранить память о своих корнях. О самом Патрике достоверно известно крайне мало, некоторые исследователи даже сомневаются в его существовании. Исторически он не был связан с алкогольными напитками, а традиция пить крепкое тёмное пиво в этот день достаточно новая и, возможно, связана с продвижением бренда Guinness. 
                    </BeersInteresting>
                </BeerPageInfoWrapper>
            </BeerCardPageWrapper>
        </>
    )
}

export default BeerCardPage