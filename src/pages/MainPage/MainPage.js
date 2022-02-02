import { Header, Product, Gallery } from '../../components/index';
import navigationData from '../../dataComponents/navigation.data';

const MainPage = () => {
  return(
    <> 
      <Header 
        navigationLinksData={ navigationData.menu.main_page }
        mainPage={ true }
      />
      <Product />
      <Gallery />
    </>
  )
};

export default MainPage;