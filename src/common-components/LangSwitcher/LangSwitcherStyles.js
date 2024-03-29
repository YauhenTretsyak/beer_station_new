import styled from 'styled-components'
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints'
import {FlexContainer} from '../../styles/StyledElements'

export const Wrapper = styled(FlexContainer)`
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-right: 0;
  width: 8.9rem;
`
export const LanguageSwicthButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1.2rem;
  width: 4rem;
  height: 4.5rem;
  border: none;
  background-image: ${ props => props.langActive
        ? 'linear-gradient(#fff 22%, #f0d04b 77%);'
        : 'linear-gradient(#d1e8ea6b 22%, #8f7c2e 77%);'
};
  box-shadow: inset 0 .3rem 1rem .1rem #00000059;
  border-radius: .7rem;
  font-size: 2.8rem;
  font-weight: ${({theme}) => theme.fontWeight.font_weightMedium};
  text-shadow: ${ props => props.langActive 
        ? '2px 2px 3px #7f3607;'
        : '.2rem .2rem .2rem #f4cf76;'
};
  color: ${({theme}) => theme.colors.grey};
  transition: all .1s ease-in-out;

  &:hover {
    cursor: pointer;

    ${ screen_breakpoints.lg } {
      font-size: 3.5rem;
      padding-top: .5rem;
      background-image: linear-gradient(#fff 22%, #f0d04b 77%);
      font-weight: ${({theme}) => theme.fontWeight.font_weightBold};
      text-shadow: .2rem .2rem .3rem #7f3607;
    }
  }
`
