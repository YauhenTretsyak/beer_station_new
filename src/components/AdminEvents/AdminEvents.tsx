import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import moment from 'moment'
import {v4 as uuidv4} from 'uuid'
import useLanguage from '../../hooks/useLanguage'
import {updateEventsData} from '../../store/slices/getLocationDataSlice'
import {AdminEventsItem} from '..'
import {addIcon} from '../../dataComponents/svgIcons'
import {translations} from '../translations'
import {AdminEventsProps, EventsData} from '../types'
import * as Styled from './AdminEventsStyles'

const AdminEvents: React.FC<AdminEventsProps> = ({isAuthSuccessful}) => {

    const dispatch = useDispatch()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const events: EventsData[] = useSelector(state => state.locationData.events)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const isChangesSaved = useSelector(state => state.flagIsChangesSaved.isChangesSaved)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const langSwitch = useSelector(state => state.selectLanguage.langSwitch)

    const eventsTranslation = useLanguage(translations, langSwitch).adminEvents
    const actuallyDate = moment().format('D-M-YYYY')

    const handleAddEvent = () => {
        if (!isChangesSaved) return
        const newEventData = {
            date: actuallyDate,
            startTime: '',
            description: {
                EN: '',
                PL: '',
                RU: '', 
            },
            eventName: {
                EN: '',
                PL: '',
                RU: '',     
            },
            id: uuidv4(),
            link: '',
            eventIcon: '1',
        }
        dispatch(updateEventsData(newEventData))
    }
    const eventsItems = events.map((item, index) => 
        <AdminEventsItem
            key={item.id}
            id={item.id}
            index={index}
        />
    )

    return (
        <>
            {isAuthSuccessful && (
                <Styled.AdminEvents>
                    {eventsItems}
                    <Styled.AddButtonWrapper>
                        <Styled.AddButton
                            onClick={() => handleAddEvent()}
                            isButtonActive={isChangesSaved}
                        >
                            {addIcon}
                            <Styled.ButtonTitle>
                                {eventsTranslation.addBtnTitle}
                            </Styled.ButtonTitle>
                        </Styled.AddButton>
                    </Styled.AddButtonWrapper>
                </Styled.AdminEvents>
            )}
        </>
    )
}

export default AdminEvents
