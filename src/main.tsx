import './index.scss'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import {store} from './modules/store/store.ts'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/main-page.tsx";
import DossierPage from "./pages/dossierPage.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/users/:id' element={<DossierPage />}/>
            </Routes>
        </Provider>
    </BrowserRouter>
)
