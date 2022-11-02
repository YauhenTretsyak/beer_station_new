import {memo} from 'react'
import flagsListData from '../../dataComponents/flagList.data'

import {
    Name,
    Slide,
    TopWrapper,
    CountryWrapper,
    Flag,
    CardNumber,
    BeerInfoWrapper,
    Title,
    BeerType,
    BottomWrapper,
    CostInfo,
    BeerValue,
    BeerCost,
    DateInfo,
} from './BeerSlide.styles'


const BeerSlide = (props) => {

    const {linkToCard, cardNumber, title, name, type, vol03, vol05, vol1, country, updateDate} = props

    const flagImage = flagsListData.filter(el => el.id === country).map(item => item.imagePath)

    const nameRegularSize = Boolean(name.length < 14)

    console.log(name || '--')

    return (
        <Slide to={`${linkToCard}`}>
            <TopWrapper>
                <CountryWrapper>
                    <Flag>
                        <img src={flagImage} alt="country's flag" />
                    </Flag>
                    <CardNumber>
                        #{cardNumber}
                    </CardNumber>
                </CountryWrapper>
                <BeerInfoWrapper>
                    <Title>
                        {title || '--'}
                    </Title>
                    <Name
                        nameRegularSize={ nameRegularSize }
                    >
                        {name || '--'}
                    </Name>
                    <BeerType>
                        {type || '--'}
                    </BeerType>
                </BeerInfoWrapper>
            </TopWrapper>
            <BottomWrapper>
                <CostInfo>
                    <BeerValue>
                        0.3L - 
                    </BeerValue>
                    <BeerCost>
                        {vol03 || ' --'} zł
                    </BeerCost>
                </CostInfo>
                <CostInfo>
                    <BeerValue>
                        0.5L - 
                    </BeerValue>
                    <BeerCost>
                        {vol05 || ' --'} zł
                    </BeerCost>
                </CostInfo>
                <CostInfo>
                    <BeerValue>
                        1L - 
                    </BeerValue>
                    <BeerCost>
                        {vol1 || ' --'} zł
                    </BeerCost>
                </CostInfo>
            </BottomWrapper>
            <DateInfo>
               od: <span>{updateDate}</span>
            </DateInfo>
        </Slide>
    )
}

export default memo(BeerSlide)