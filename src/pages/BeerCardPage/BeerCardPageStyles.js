import styled from 'styled-components'
import {SectionContainer} from '../../styles/StyledElements'
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints'

export const BeerCardPageWrapper = styled(SectionContainer)``
export const BeerPageInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${ screen_breakpoints.md } {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`

export const BeersInteresting = styled.p`
  padding: 2rem;
  width: 100%;
  max-width: 26rem;
  border-radius: 1.4rem;
  border: .1rem solid ${({theme}) => theme.colors.silver};
  font-size: 1.5rem;
  box-shadow: 0 0 1rem 0.3rem ${({theme}) => theme.colors.silver};
  color: ${({theme}) => theme.colors.silver};

  ${ screen_breakpoints.md } {
    max-width: 40rem;
  }

  ${ screen_breakpoints.lg } {
    max-width: 42.7rem;
    font-size: 1.9rem;
  }

  ${ screen_breakpoints.xl } {
    max-width: 50.7rem;
    font-size: 2.5rem;
  }

  ${ screen_breakpoints.xxl } {
    max-width: 66.7rem;
  }
`
