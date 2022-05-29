import { memo } from 'react';
import { Wrapper, Image } from './GallerySlide.styles';

const GallerySlide = (props) => {
  const { slideImage } = props;

  return(
    <Wrapper>
      <Image src={ slideImage } alt="BS's slide"/>
    </Wrapper>
  )
}

export default memo(GallerySlide);