import flagsListData from '../../dataComponents/flagList.data'
import * as Styled from './BeerCardStyles'

const BeerCard = (props) => {
    const {cardNumber, title, name, type, volAlc, vol03, vol05, vol1, country} = props
    const flagImage = flagsListData.filter(el => el.id === country).map(item => item.imagePath)

    return (
        <Styled.Card>
            <Styled.TopWrapper>
                <Styled.Country>
                    <Styled.Flag>
                        <img src={ flagImage } alt="country's flag" />
                    </Styled.Flag>
                    <Styled.CardNumber>
            #{ cardNumber }
                    </Styled.CardNumber>
                </Styled.Country>
                <Styled.Inner>
                    <Styled.Title>
                        { title || '--' }
                    </Styled.Title>
                    <Styled.Name>
                        { name || '--' }
                    </Styled.Name>
                    <Styled.BeerType>
                        {`${type} ${volAlc}%`}
                    </Styled.BeerType>
                </Styled.Inner>
            </Styled.TopWrapper>
            <Styled.BottomWrapper>
                <Styled.CostInfo>
                    <Styled.BeerValue>
            0.3L - 
                    </Styled.BeerValue>
                    <Styled.BeerCost>
                        { vol03 || '--' } zł
                    </Styled.BeerCost>
                </Styled.CostInfo>
                <Styled.CostInfo>
                    <Styled.BeerValue>
            0.5L - 
                    </Styled.BeerValue>
                    <Styled.BeerCost>
                        { vol05 || '--' } zł
                    </Styled.BeerCost>
                </Styled.CostInfo>
                <Styled.CostInfo>
                    <Styled.BeerValue>
            1L - 
                    </Styled.BeerValue>
                    <Styled.BeerCost>
                        { vol1 || '--' } zł
                    </Styled.BeerCost>
                </Styled.CostInfo>
            </Styled.BottomWrapper>
        </Styled.Card>
    )
}

export default BeerCard
