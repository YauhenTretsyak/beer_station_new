import styled from 'styled-components'
import SectionContainer from '../../styles/SectionContainer'
import {colors} from '../../styles/colors'

export const AdminHeader = styled(SectionContainer)`` 

export const MenuLink = styled.a`
    text-decoration: none;
    font-size: 2.5rem;
    color: ${colors.gold};
    text-shadow: .1rem .2rem .2rem #431d00;
    transition: all .15s ease-in-out;

    &:hover {
        color: ${colors.yellow};
        text-shadow: 0.1rem 0.2rem .3rem #431d00;
    }
`
