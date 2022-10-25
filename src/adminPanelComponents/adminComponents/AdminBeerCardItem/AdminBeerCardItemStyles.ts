import styled from 'styled-components'
import FlexContainer from '../../styles/FlexContainer'
import {Select, Input, Button} from '../../admin-common-components'
import screen_breakpoints from '../../styles/screen_breakpoints'

export const AdminBeerCardItem = styled.div`
    position: relative;
    display: block;
    margin-top: 1.7rem;
    margin-bottom: 1.7rem;
    padding: 1.5rem 2.6rem;
    width: 100%;
    max-width: 26rem;
    max-height: 25rem;
    border-radius: 1.4rem;
    text-decoration: none;
    background-color: #312f2f;
    box-shadow: 0 0 .7rem .1rem ${({theme}) => theme.colors.yellow};
    transition: all .2s ease-in-out;

    ${ screen_breakpoints.sm } {
        max-width: 23rem;
    }

    ${ screen_breakpoints.md } {
        max-width: 33rem;
    }

    ${ screen_breakpoints.lg } {
        & p {
            transition: all .2s ease-in-out;
        }

        &:hover {
            background-color: #4e3308;
            box-shadow: 0 0 1rem .3rem #ffe277;

            & p {
                text-shadow: .5rem .7rem .1rem #000;
            }

            & img {
                margin-bottom: .5rem;
                max-width: 103%;
                box-shadow: .4rem .4rem .2rem .1rem #000;
            }

            &::before, &::after {
                height: 8.3rem;
                box-shadow: .5rem .5rem 0 0 #000;
            }
        }
    }

    ${ screen_breakpoints.xl } {
        margin-top: 0;
        margin-bottom: 3rem;
        padding: 1.5rem 4rem;
    }

    ${ screen_breakpoints.xxl } {
        max-width: 37rem;
    }

    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 1.7rem;
        width: .3rem;
        height: 8rem;
        border-radius: .4rem;
        background-color: ${({theme}) => theme.colors.brown_light};
        transform: translateY(-50%);
        transition: all .2s ease-in-out;
    }

    &:after {
        content: '';
        position: absolute;
        top: 50%;
        right: 1.7rem;
        width: .31rem;
        height: 8rem;
        border-radius: .4rem;
        background-color: ${({theme}) => theme.colors.brown_light};
        transform: translateY(-50%);
        transition: all .2s ease-in-out;
    }

    & p {
        color: ${({theme}) => theme.colors.orange};
    }
`
export const CardNumber = styled.span`
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: ${({theme}) => theme.colors.silver};
    text-shadow: .2rem .2rem .5rem ${({theme}) => theme.colors.black};
`
export const ElementsLine = styled(FlexContainer)`
    align-items: center;
    justify-content: space-between;
`
export const InputFlexWrapper = styled.div`
    position: relative;
    display: flex;
    & > input {
        width: 60%;
    }
`
export const FlagImg = styled.img`
    position: absolute;
    top: 0;
    right: 2rem;
    display: block;
    width: 3rem;
    transition: all .2s ease-in-out;
`
export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
`
export const InputLabel = styled.p`
    min-width: 7.6rem;
    font-size: 2rem;
`
export const InputTypeText = styled(Input)`
`
export const InputTypeNumber = styled(Input)`
`
