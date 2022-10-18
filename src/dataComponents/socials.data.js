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
        link: '/',
    },
    {
        icon: (
            <SocialIcon>
                { facebook }
            </SocialIcon>
        ),
        link: '/',
    },
]

export default socialsData