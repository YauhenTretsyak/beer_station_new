import * as Styled from './IconLinkStyles'

const IconLink = (props) => {
    const {link, icon} = props

    return (
        <Styled.LinkWrapper href={link} target="_blank">
            {icon}
        </Styled.LinkWrapper>
    )
}

export default IconLink
