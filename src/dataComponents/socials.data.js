/* eslint-disable react/react-in-jsx-scope */
import {SocialIcon} from '../common-components'
import {instagram, facebook} from './svgIcons'


const socialsData = [
    {
        icon: (
            <SocialIcon>
                { instagram }
            </SocialIcon>
        ),
        link: {
            kepna: 'https://instagram.com/beer_station_pl?igshid=YmMyMTA2M2Y=',
            lwowska: 'https://instagram.com/beer_station_pl?igshid=YmMyMTA2M2Y=',
            ursynow: 'https://instagram.com/beer_station_pl?igshid=YmMyMTA2M2Y='
        },
    },
    {
        icon: (
            <SocialIcon>
                { facebook }
            </SocialIcon>
        ),
        link: {
            kepna: 'https://www.facebook.com/BeerStationPl/',
            lwowska: 'https://www.facebook.com/PubBeerStation/',
            ursynow: 'https://www.facebook.com/PubBeerStationUrsynow'
        },
    },
]

export default socialsData
