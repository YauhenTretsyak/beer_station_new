import styled from 'styled-components'
import {FlexContainer} from '../../styles/StyledElements'
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints'

interface KindSwitchButtonProps {
    active: boolean;
}

export const Wrapper = styled(FlexContainer)`
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;

    ${screen_breakpoints.md} {
        justify-content: flex-start;
        margin-top: 2rem;
        margin-bottom: 3rem;
    }
`
export const KindSwitchButton = styled.button<KindSwitchButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .4rem 2rem;
    width: 12rem;
    height: 2.5rem;
    border: none;
    background-image: ${ props => props.active
        ? 'linear-gradient(#fff 22%, #f0d04b 77%);'
        : 'linear-gradient(#d1e8ea6b 22%, #8f7c2e 77%);'
};
    box-shadow: inset 0 .3rem 1rem .1rem #00000059;
    border-radius: .7rem;
    font-size: 1.8rem;
    font-weight: ${({theme}) => theme.fontWeight.font_weightMedium};
    text-shadow: ${ props => props.active 
        ? '2px 2px 3px #7f3607;'
        : '.2rem .2rem .2rem #f4cf76;'
};
    color: ${({theme, active}) => active ? '#630606' : theme.colors.grey};
    transition: all .1s ease-in-out;

  &:hover {
    cursor: pointer;

    ${screen_breakpoints.lg} {
      font-size: 2rem;
      background-image: linear-gradient(#fff 22%, #f0d04b 77%);
      font-weight: ${({theme}) => theme.fontWeight.font_weightBold};
      text-shadow: .2rem .2rem .3rem #7f3607;
    }
  }
`
