import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './Routes';
import ScrollToTop from './ScrollToTop';
import CartSidebar from './Shared/CartSidebar/CartSidebar';

function App() {

	return (
		<Router>
			<ToastContainer />
			<ScrollToTop />
			<CartSidebar />
			<Routes />

		</Router>
	);
}

export default App;
