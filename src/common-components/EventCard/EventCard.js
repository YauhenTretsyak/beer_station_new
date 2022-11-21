import {useSelector} from 'react-redux'
import useLanguage from '../../hooks/useLanguage'
import translations from '../translations'
import eventsTypesData from '../../dataComponents/eventsTypesData'
import * as Styled from './EventCardStyles'

const EventCard = (props) => {
    const langSwitch = useSelector(state => state.selectLanguage.langSwitch)
    const {eventName, date, description, link, startTime, eventIcon} = props
    const imagePath = eventsTypesData.find(item => item.id === eventIcon).imagePath
    const eventTranslations = useLanguage(translations, langSwitch).eventCard

    const dateFormatted = date.split('-').reverse().join('-')
    const isEventActive = (Date.parse(dateFormatted) - Date.parse(Date())) >= -86400000
    
    return (
        <Styled.EventCard isEventActive={isEventActive}>
            <Styled.ImageBox>
                <Styled.Image src={imagePath} alt="event icon" />
            </Styled.ImageBox>
            <Styled.Content>
                <Styled.Title>
                    {eventName}
                </Styled.Title>
                <Styled.StartDateWrapper>
                    <Styled.StartDate>
                        {eventTranslations.day}
                        <span>{date}</span>
                    </Styled.StartDate>
                    <Styled.StartDate>
                        {eventTranslations.startTime}
                        <span>{startTime}</span>
                    </Styled.StartDate>
                </Styled.StartDateWrapper>
                {description && (
                    <Styled.Description>
                        {description}
                    </Styled.Description>
                )}
                {link && (
                    <Styled.UrlWrapper>
                        {eventTranslations.infoTitle} 
                        <Styled.Url href={link} target="_blank">
                            {eventTranslations.urlTitle}
                        </Styled.Url>
                    </Styled.UrlWrapper>
                )}
            </Styled.Content>
        </Styled.EventCard>
    )
}

export default EventCard
