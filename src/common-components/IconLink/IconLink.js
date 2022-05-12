import { LinkWrapper } from "./IconLink.styles";

const IconLink = (props) => {

  const { link, icon } = props;

  return (
    <LinkWrapper href={ link } >
      { icon }
    </LinkWrapper>
  )
}

export default IconLink;