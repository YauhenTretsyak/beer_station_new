import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import useLanguage from '../../hooks/useLanguage'
import {Header} from '../../components/index'
import {BeerCard, LoadingSpinner} from '../../common-components'
import navigationData from '../../components/Navigation/navigation.data'
import beerCardPageData from './beerCardPage.data'
import {getLocationData} from '../../store/slices/getLocationDataSlice'

import * as Styled from './BeerCardPageStyles'


const BeerCardPage = () => {
    let params = useParams()
    const dispatch = useDispatch()
    const {loading: isDataLoading, cards: beerInfo}= useSelector(state => state.locationData)
    const location = useSelector(state => state.actualLocation.location)
    const langSwitch = useSelector(state => state.selectLanguage.langSwitch)
    const cardNumber = Number(params.id)
    const beer = beerInfo.find(beerCard => beerCard.id === cardNumber)
    const beerInterestingData = useLanguage(beerCardPageData, langSwitch)
    
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
                            country={beer.country}
                            cardNumber={beer.id}
                            title={beer.title}
                            name={beer.name}
                            type={beer.type}
                            volAlc={beer.volAlc}
                            vol03={beer.vol03}
                            vol05={beer.vol05}
                            vol1={beer.vol1}
                            updateDate={beer.updateDate}
                        />)}
                    <Styled.BeersInteresting>
                        {beerInterestingData[0].info}
                    </Styled.BeersInteresting>
                </Styled.BeerPageInfoWrapper>
            </Styled.BeerCardPageWrapper>
        </>
    )
}

export default BeerCardPage
