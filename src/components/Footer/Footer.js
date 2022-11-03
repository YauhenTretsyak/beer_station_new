import footerLogo from '../../assets/BS_logo_footer.png'
import * as Styled from './FooterStyles'

const Footer = () => (
    <Styled.FooterContainer>
        <Styled.CopyRights>
        © 2019-2022 Beer Station Sp. z o.o. - Designed & Developed by
            <Styled.AuthorLink href="https://yauhentretsyak.github.io/portfolio/">
          Yauhen Tretsyak
            </Styled.AuthorLink>
        </Styled.CopyRights>
        <Styled.Logo>
            <img src={ footerLogo } alt="BeerStation logo" />
        </Styled.Logo>
        <Styled.FixBug>р</Styled.FixBug>
    </Styled.FooterContainer>
)

export default Footer
