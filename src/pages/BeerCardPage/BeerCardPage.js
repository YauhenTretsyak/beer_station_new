import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import {Header} from '../../components/index'
import {BeerCard, LoadingSpinner} from '../../common-components'
import navigationData from '../../components/Navigation/navigation.data'
import {getLocationData} from '../../store/slices/getLocationDataSlice'

import * as Styled from './BeerCardPageStyles'


const BeerCardPage = () => {
    let params = useParams()
    const dispatch = useDispatch()
    const cardNumber = Number(params.id)
    const isDataLoading = useSelector(state => state.locationData.loading)
    const beerInfo = useSelector(state => state.locationData.cards)
    const location = useSelector(state => state.actualLocation.location)
    const beer = beerInfo.find(beerCard => beerCard.id === cardNumber)

    
    if (beerInfo.length === 0) dispatch(getLocationData({location: location, kind: 'beer'}))

    return (
        <>
            <Header 
                navigationLinksData={navigationData.menu.beer_card_page}
            />
            <Styled.BeerCardPageWrapper>
                <Styled.BeerPageInfoWrapper>
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
                    <Styled.BeersInteresting>
            Ежегодно 17 марта в мире отмечается ещё один праздник, связанный с пивом — День Святого Патрика, крестителя ирландцев. Его придумали ирландские эмигранты в США в XVIII-XIX веках, желая сохранить память о своих корнях. О самом Патрике достоверно известно крайне мало, некоторые исследователи даже сомневаются в его существовании. Исторически он не был связан с алкогольными напитками, а традиция пить крепкое тёмное пиво в этот день достаточно новая и, возможно, связана с продвижением бренда Guinness. 
                    </Styled.BeersInteresting>
                </Styled.BeerPageInfoWrapper>
            </Styled.BeerCardPageWrapper>
        </>
    )
}

export default BeerCardPage