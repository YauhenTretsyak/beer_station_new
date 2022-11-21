import styled from 'styled-components'
import FlexContainer from '../../styles/StyledElements/FlexContainer'
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints'

export const AdminCardsWrapper = styled(FlexContainer)`
    flex-wrap: wrap;
    justify-content: center;

    ${screen_breakpoints.sm} {
        justify-content: space-between;
    }
`
