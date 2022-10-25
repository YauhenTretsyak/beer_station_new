import flagsListData from '../../dataComponents/flagList.data'

import {
    Card,
    TopWrapper,
    Country,
    Flag,
    CardNumber,
    Inner,
    Title,
    Name,
    BeerType,
    BottomWrapper,
    CostInfo,
    BeerValue,
    BeerCost
} from './BeerCard.styles'


const BeerCard = (props) => {

    const {cardNumber, title, name, type, vol03, vol05, vol1, country} = props
    const flagImage = flagsListData.filter(el => el.id === country).map(item => item.imagePath)

    return (
        <Card>
            <TopWrapper>
                <Country>
                    <Flag>
                        <img src={ flagImage } alt="country's flag" />
                    </Flag>
                    <CardNumber>
            #{ cardNumber }
                    </CardNumber>
                </Country>
                <Inner>
                    <Title>
                        { title ?? '--' }
                    </Title>
                    <Name>
                        { name ?? '--' }
                    </Name>
                    <BeerType>
                        { type ?? '--' }
                    </BeerType>
                </Inner>
            </TopWrapper>
            <BottomWrapper>
                <CostInfo>
                    <BeerValue>
            0.3L - 
                    </BeerValue>
                    <BeerCost>
                        { vol03 ?? '--' } zł
                    </BeerCost>
                </CostInfo>
                <CostInfo>
                    <BeerValue>
            0.5L - 
                    </BeerValue>
                    <BeerCost>
                        { vol05 ?? '--' } zł
                    </BeerCost>
                </CostInfo>
                <CostInfo>
                    <BeerValue>
            1L - 
                    </BeerValue>
                    <BeerCost>
                        { vol1 ?? '--' } zł
                    </BeerCost>
                </CostInfo>
            </BottomWrapper>
        </Card>
    )
}

export default BeerCard