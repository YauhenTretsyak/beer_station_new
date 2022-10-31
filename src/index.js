import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, BrowserRouter as Router} from 'react-router-dom'
import {store} from './store/index.ts'
import {Provider} from 'react-redux'
import './firebase'
import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)


