import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import {LoadingSpinnerWrapper, Title} from './LoadingSpinner.styles'

const override = {
    display: 'block',
    width: '6rem',
    height: '4rem',
    margin: '0',
    borderColor: 'red',
}

const LoadingSpinner = ({loading, color, size, titleSize}) => (
    <LoadingSpinnerWrapper>
        <Title titleSize={titleSize}>Loading...</Title>
        <ClimbingBoxLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={size}
            aria-label="ClimbingBoxLoader"
            data-testid="loader"
        />
    </LoadingSpinnerWrapper>
)

export default LoadingSpinner
