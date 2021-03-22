import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { hideSearchBox } from '../store/actions/siteNav';
import Routes from './Routes';
import ScrollToTop from './ScrollToTop';
import CartSidebar from './Shared/CartSidebar/CartSidebar';

function App() {
	const dispatch = useDispatch();
	const handleSearchBox = () => {
		dispatch(hideSearchBox());
	}
	return (
		<div onClick={handleSearchBox}>
			<Router>
				<ToastContainer />
				<ScrollToTop />
				<CartSidebar />
				<Routes />
			</Router>
		</div>
	);
}

export default App;
