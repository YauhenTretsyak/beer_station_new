import styled from 'styled-components'
import screen_breakpoint from './screen_breakpoints'

const SectionTitle = styled.h3`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({theme}) => theme.colors.orange_dark};
  text-shadow: 1px 2px 1px black;
  
  ${ screen_breakpoint.md } {
    font-size: 4.3rem;
    margin-bottom: 2rem;
  }

`

export default SectionTitle;