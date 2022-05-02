import logo from './logo.svg';
import './App.css';
import LoanPage from './pages/LoanPage/LoanRequestPage';
import CardComp from './cmps/CardComp/CardComp';
import MainNavigation from './cmps/MainNavigation/MainNavigation'
import {Routes, Route} from "react-router";
import Dashboard from "./cmps/MockPageForRouter/Dashboard";
import {Link} from "react-router-dom";
import Requests from "./cmps/MockPageForRouter/Requests";
import Activities from "./cmps/MockPageForRouter/Activities";
import Statics from "./cmps/MockPageForRouter/Statics";
import Leads from "./cmps/MockPageForRouter/Leads";
import RequestPage from "./pages/RequestPage/RequestPage";


function App() {
    return (
        <div className="App">
            <MainNavigation/>
            <Routes>
                {
                    ['/', 'dashboard'].map(path => <Route
                        key={path}
                        path={path}
                        element={<Dashboard/>}
                    />)
                }
                {/*<Route path='/requests' element={<LoanPage/>}/>*/}
                <Route path='/requests' element={<RequestPage/>}/>
                <Route path='/request/loanpage/:id' element={<LoanPage/>}/>

                <Route path='/activities' element={<Activities/>}/>
                <Route path='/statics' element={<Statics/>}/>
                <Route path='/leads' element={<Leads/>}/>
            </Routes>

        </div>
    );
}

export default App;
