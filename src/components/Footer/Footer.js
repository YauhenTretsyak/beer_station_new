/* eslint-disable react/react-in-jsx-scope */
import footerLogo from '../../assets/BS_logo_footer.png'
import { 
    FooterContainer, 
    FixBug, 
    CopyRights, 
    AuthorLink, 
    Logo
} from './Footer.styles'

const Footer = () => (
    <FooterContainer>
        <CopyRights>
        © 2019-2022 Beer Station Sp. z o.o. - Designed & Developed by
            <AuthorLink href="https://yauhentretsyak.github.io/portfolio/">
          Yauhen Tretsyak
            </AuthorLink>
        </CopyRights>
        <Logo>
            <img src={ footerLogo } alt="BeerStation logo" />
        </Logo>
        <FixBug>р</FixBug>
    </FooterContainer>
)

export default Footer