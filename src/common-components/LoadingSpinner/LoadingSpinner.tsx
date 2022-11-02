import React from 'react'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import {LoadingSpinnerProps} from '../types'
import {LoadingSpinnerWrapper, Title} from './LoadingSpinnerStyles'

const override = {
    display: 'block',
    width: '6rem',
    height: '4rem',
    margin: '0',
    borderColor: 'red',
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({loading, color, size, titleSize}) => (
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
