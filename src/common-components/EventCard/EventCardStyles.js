import styled from 'styled-components'
import {FlexContainer, ImageContainer, SectionTitle} from '../../styles/StyledElements'
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints'

export const EventCard = styled(FlexContainer)`
    position: relative;
    justify-content: center;
    margin-top: 1.7rem;
    margin-bottom: 1.7rem;
    padding: 1.5rem 4rem;
    width: 100%;
    min-height: 10rem;
    gap: 2rem;
    border-radius: 1.4rem;
    text-decoration: none;
    background-color: #312f2f;
    box-shadow: 0 0 .7rem .1rem ${({theme}) => theme.colors.yellow};
    opacity: ${({isEventActive}) => isEventActive ? '1' : '.4'};
    transition: all .2s ease-in-out;

    ${screen_breakpoints.sm} {
        width: 49%;
    }

    ${screen_breakpoints.xl} {
        padding: 1.5rem 4rem 1.5rem 10rem;
    }


    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 1.7rem;
        width: .3rem;
        height: 5rem;
        border-radius: .4rem;
        background-color: ${({theme}) => theme.colors.brown_light};
        transform: translateY(-50%);
        transition: all .2s ease-in-out;

        ${screen_breakpoints.md} {
            height: 8rem;
        }
    }

    &:after {
        content: '';
        position: absolute;
        top: 50%;
        right: 1.7rem;
        width: .31rem;
        height: 5rem;
        border-radius: .4rem;
        background-color: ${({theme}) => theme.colors.brown_light};
        transform: translateY(-50%);
        transition: all .2s ease-in-out;

        ${screen_breakpoints.md} {
            height: 8rem;
        }
    }

    ${({isDataChanged}) => isDataChanged
        ? `background-color: #4e3308;
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
            }`
            : ''
        }
`

export const ImageBox = styled(ImageContainer)`
    position: absolute;
    top: 0.7rem;
    left: 2rem;
    width: 2rem;
    height: 2rem;

    ${screen_breakpoints.md} {
        top: 1.5rem;
        left: 3rem;
        width: 3rem;
        height: 3rem;
    }

    ${screen_breakpoints.xl} {
        top: 50%;
        width: 7rem;
        height: 7rem;
        transform: translateY(-50%);
    }
`
export const Image = styled.img``

export const Content = styled(FlexContainer)`
    flex-direction: column;
`
export const Title = styled.p`
    text-align: center;
    font-size: 2rem;
    color: ${({theme}) => theme.colors.gold};

    ${screen_breakpoints.md} {
        font-size: 3.5rem;
    }
`

export const StartDateWrapper = styled(FlexContainer)`
    gap: .5rem;

    ${screen_breakpoints.lg} {
        gap: 1rem;
    }
`
export const StartDate = styled.p`
    font-weight: 200;
    font-size: 1.5rem;
    color: ${({theme}) => theme.colors.silver};

    & > span {
        font-weight: 400;
        color: ${({theme}) => theme.colors.orange};
    }

    ${screen_breakpoints.md} {
        font-size: 2rem;
    }
`

export const Description = styled(StartDate)`
    margin-top: .5rem;
    font-size: 1.6rem;
    color: ${({theme}) => theme.colors.yellow};

    ${screen_breakpoints.lg} {
        margin-top: 1rem;
        font-size: 1.8rem;
    }
`

export const UrlWrapper = styled(Description)`
    
`
export const Url = styled.a`
    margin-left: .5rem;
    text-decoration: none;
    color: #00ffd2;
`
