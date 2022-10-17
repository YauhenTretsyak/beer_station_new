import styled from 'styled-components';
import screen_breakpoint from './screen_breakpoints';

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  ${screen_breakpoint.md} {
    flex-wrap: nowrap;
  }
`

export default FlexContainer;