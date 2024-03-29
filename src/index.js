import ReactDOM from 'react-dom/client';
import App from './App';

import './tailwind.css';

import {NextUIProvider} from '@nextui-org/react';
import {ThemeProvider} from 'next-themes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ThemeProvider defaultTheme='dark' attribute='class'>
		<NextUIProvider>
			<App />
		</NextUIProvider>
	</ThemeProvider>,
);
