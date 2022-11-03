import {memo} from 'react'
import flagsListData from '../../dataComponents/flagList.data'

import * as Styled from './BeerSlideStyles'


const BeerSlide = (props) => {

    const {linkToCard, cardNumber, title, name, type, vol03, vol05, vol1, country, updateDate} = props

    const flagImage = flagsListData.filter(el => el.id === country).map(item => item.imagePath)

    const nameRegularSize = Boolean(name.length < 14)

    return (
        <Styled.Slide to={`${linkToCard}`}>
            <Styled.TopWrapper>
                <Styled.CountryWrapper>
                    <Styled.Flag>
                        <img src={flagImage} alt="country's flag" />
                    </Styled.Flag>
                    <Styled.CardNumber>
                        #{cardNumber}
                    </Styled.CardNumber>
                </Styled.CountryWrapper>
                <Styled.BeerInfoWrapper>
                    <Styled.Title>
                        {title || '--'}
                    </Styled.Title>
                    <Styled.Name
                        nameRegularSize={ nameRegularSize }
                    >
                        {name || '--'}
                    </Styled.Name>
                    <Styled.BeerType>
                        {type || '--'}
                    </Styled.BeerType>
                </Styled.BeerInfoWrapper>
            </Styled.TopWrapper>
            <Styled.BottomWrapper>
                <Styled.CostInfo>
                    <Styled.BeerValue>
                        0.3L - 
                    </Styled.BeerValue>
                    <Styled.BeerCost>
                        {vol03 || ' --'} zł
                    </Styled.BeerCost>
                </Styled.CostInfo>
                <Styled.CostInfo>
                    <Styled.BeerValue>
                        0.5L - 
                    </Styled.BeerValue>
                    <Styled.BeerCost>
                        {vol05 || ' --'} zł
                    </Styled.BeerCost>
                </Styled.CostInfo>
                <Styled.CostInfo>
                    <Styled.BeerValue>
                        1L - 
                    </Styled.BeerValue>
                    <Styled.BeerCost>
                        {vol1 || ' --'} zł
                    </Styled.BeerCost>
                </Styled.CostInfo>
            </Styled.BottomWrapper>
            <Styled.DateInfo>
               od: <span>{updateDate}</span>
            </Styled.DateInfo>
        </Styled.Slide>
    )
}

export default memo(BeerSlide)
