import {memo} from 'react'
import * as Styled from './GallerySlideStyles'

const GallerySlide = (props) => {
    const {slideImage} = props

    return (
        <Styled.Wrapper>
            <Styled.Image src={ slideImage } alt="BS's slide" />
        </Styled.Wrapper>
    )
}

export default memo(GallerySlide)
