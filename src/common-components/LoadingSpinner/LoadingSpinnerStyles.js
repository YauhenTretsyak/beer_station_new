import styled from 'styled-components'
import screen_breakpoint from '../../styles/StyledElements/screen_breakpoints'
import {SectionTitle, FlexContainer} from '../../styles/StyledElements'

export const LoadingSpinnerWrapper = styled(FlexContainer)`
    justify-content: center;
    margin-bottom: 1rem;

    ${ screen_breakpoint.md } {
        margin-bottom: 3rem;
    }
`
export const Title = styled(SectionTitle)`
    margin-bottom: 0;
    font-size: ${({titleSize}) => titleSize ? `${titleSize }rem` : '4.3rem'};
`
