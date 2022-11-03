import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import * as Styled from './LoadingSpinnerStyles'

const override = {
    display: 'block',
    width: '6rem',
    height: '4rem',
    margin: '0',
    borderColor: 'red',
}

const LoadingSpinner = ({loading, color, size, titleSize}) => (
    <Styled.LoadingSpinnerWrapper>
        <Styled.Title titleSize={titleSize}>Loading...</Styled.Title>
        <ClimbingBoxLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={size}
            aria-label="ClimbingBoxLoader"
            data-testid="loader"
        />
    </Styled.LoadingSpinnerWrapper>
)

export default LoadingSpinner
