import {Header, Product, Gallery} from '../../components/index'
import navigationData from '../../components/Navigation/navigation.data'

const MainPage = () => (
    <> 
        <Header 
            navigationLinksData={ navigationData.menu.main_page }
            mainPage={true}
        />
        <Product />
        <Gallery />
    </>
)

export default MainPage
