import React from 'react'
import {useSelector} from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import {AdminBeerCardItem} from '..'
import {LoadingSpinner} from '../../common-components'
import {AdminBeerCardsTypes, BeerCardData} from '../types'
import * as Styled from './AdminBeerCardsStyles'

const AdminBeerCards: React.FC<AdminBeerCardsTypes> = ({isAuthSuccessful}) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const beerCardsData: BeerCardData[] = useSelector(state => state.locationData.cards)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const actualLocation = useSelector(state => state.actualLocationParams.location)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const isLoading = useSelector(state => state.locationData.loading)

    const beerCardsToChange = beerCardsData.map(item => (
        <AdminBeerCardItem 
            key={uuidv4()}
            id={item.id}
            location={actualLocation}
        />
    ))

    return (
        <Styled.AdminCardsWrapper>
            {isAuthSuccessful && (
                isLoading  
                    ?( <LoadingSpinner 
                        loading={isLoading}
                        color="#cfc600"
                        size={'10'}
                        titleSize="3"
                    />)
                    : beerCardsToChange
            )}
        </Styled.AdminCardsWrapper>
    )
}

export default AdminBeerCards
