import {useSelector} from 'react-redux'
import useLanguage from '../../hooks/useLanguage'
import {EventCard} from '../../common-components'
import translations from '../translations'
import * as Styled from './EventsStyles'

export const Events = () => {

    const eventsData = useSelector(state => state.locationData.events)
    const langSwitch = useSelector(state => state.selectLanguage.langSwitch)
    const isSectionDisplayed = eventsData.length > 0
    const eventsTranslations = useLanguage(translations, langSwitch).events
    
    const eventCards = eventsData.map(item => (
        <EventCard
            key={item.id}
            eventName={item.eventName[`${langSwitch}`]}
            date={item.date}
            description={item.description[`${langSwitch}`]}
            link={item.link}
            startTime={item.startTime}
            eventIcon={item.eventIcon}
        />
    ))
    

    return (
        <>
            {isSectionDisplayed && (
                <Styled.Events>
                    <Styled.Title>
                        {eventsTranslations.title}
                    </Styled.Title>
                    <Styled.Content>
                        {eventCards}
                    </Styled.Content>
                </Styled.Events>
            )}
        </>
    )
}

export default Events
