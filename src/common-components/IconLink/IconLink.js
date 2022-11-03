import * as Styled from './IconLinkStyles'

const IconLink = (props) => {
    const {link, icon} = props

    return (
        <Styled.LinkWrapper href={link} >
            { icon }
        </Styled.LinkWrapper>
    )
}

export default IconLink
