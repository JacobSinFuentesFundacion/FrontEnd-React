import ReactDOM from 'react-dom/client';
import App from './App';

import './tailwind.css';

import {NextUIProvider} from '@nextui-org/react';
import {ThemeProvider} from 'next-themes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ThemeProvider defaultTheme='dark' attribute='class'>
		<NextUIProvider>
			<div className="relative h-full w-full bg-slate-950">
				<div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
				<div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
			</div>
			<App />
		</NextUIProvider>
	</ThemeProvider>,
);
