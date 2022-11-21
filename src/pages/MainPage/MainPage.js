import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {Header, Product, Gallery, Events} from '../../components/index'
import navigationData from '../../components/Navigation/navigation.data'

const MainPage = () => (
    //создать контейнер для MainPage и в него закидывать пропсы с ссылкой для табов
    //следить за изменением текста ссылок и в зависимости от этого выдавать контейнером нужный рендер
    // изменения можно смотреть через useLocation
    // loc = useLocation
    // useEffect(() => {
        
    // },[loc])

    <> 
        <Header 
            navigationLinksData={ navigationData.menu.main_page }
            mainPage={true}
        />
        <Events />
        <Product />
        <Gallery />
    </>
)

export default MainPage
