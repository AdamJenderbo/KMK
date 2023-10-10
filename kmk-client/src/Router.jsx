import AppLayout from './components/AppLayout';
import CalendarPage from './pages/CalendarPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterUserPage from './pages/RegisterUserPage';
import UserPage from './pages/UserPage';
import MenuPage from './pages/MenuPage';
import CreateEventPage from './pages/CreateEventPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { connect } from 'react-redux';
import EventPage from './pages/EventPage';

const mapStateToProps = state => {
    return {
        isLoggedIn: state.authentication.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}


function Router({isLoggedIn}) {

	return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="login" element={<LoginPage/>}/>
                    <Route path="register" element={<RegisterUserPage/>}/>
                </Route>

                {isLoggedIn &&
                    <Route path="/" element={<AppLayout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="calendar" element={<CalendarPage/>}/>
                        <Route path="calendar/event/:id" element={<EventPage/>}/>
                        <Route path="calendar/event/create" element={<CreateEventPage/>}/>
                        <Route path="user" element={<UserPage/>}/>
                        <Route path="menu" element={<MenuPage/>}/>
                    </Route>
                }
            </Routes>
        </BrowserRouter>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Router)