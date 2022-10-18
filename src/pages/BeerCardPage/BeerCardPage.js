import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import useLocation from '../../hooks/useLocation'
import {SwitchContext} from '../../context/SwitchContext'
import {Header} from '../../components/index'
import {BeerCard} from '../../common-components'
import {beerSlidesData} from '../../dataComponents/beerSlides.data'
import navigationData from '../../components/Navigation/navigation.data'

import {
    BeerCardPageWrapper,
    BeerPageInfoWrapper,
    BeersInteresting,
} from './BeerCardPage.styles'


const BeerCardPage = () => {
    const {locationSwitch} = useContext(SwitchContext)
    let params = useParams()
    const cardNumber = Number(params.id)

    const beerInfo = useLocation(beerSlidesData, locationSwitch.location)

    const beer = beerInfo.find(beerCard => beerCard.id === cardNumber)

    return (
        <>
            <Header 
                navigationLinksData={ navigationData.menu.beer_card_page }
            />
            <BeerCardPageWrapper>
                <BeerPageInfoWrapper>
                    <BeerCard
                        country={ beer.country }
                        cardNumber={ beer.id }
                        title={ beer.title }
                        name={ beer.name }
                        type={ beer.type }
                        vol03={ beer.vol03 }
                        vol05={ beer.vol05 }
                        vol1={ beer.vol1 }
                    />

                    <BeersInteresting>
            Ежегодно 17 марта в мире отмечается ещё один праздник, связанный с пивом — День Святого Патрика, крестителя ирландцев. Его придумали ирландские эмигранты в США в XVIII-XIX веках, желая сохранить память о своих корнях. О самом Патрике достоверно известно крайне мало, некоторые исследователи даже сомневаются в его существовании. Исторически он не был связан с алкогольными напитками, а традиция пить крепкое тёмное пиво в этот день достаточно новая и, возможно, связана с продвижением бренда Guinness. 
                    </BeersInteresting>
                </BeerPageInfoWrapper>
            </BeerCardPageWrapper>
        </>
    )
}

export default BeerCardPage