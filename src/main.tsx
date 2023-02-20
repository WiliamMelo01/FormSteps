import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import { Provider as ReduxProvider } from 'react-redux';
import ReduxStore from './redux/store';
import StepProvider from './context/step';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ReduxProvider store={ReduxStore}>
			<StepProvider>
				<Home />
			</StepProvider>
		</ReduxProvider>
	</React.StrictMode>
);
