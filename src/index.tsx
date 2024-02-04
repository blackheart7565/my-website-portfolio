import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import AppRouters from "./components/AppRouters";

import './styles/index.scss';
import './styles/nav.style.css';
import './styles/burger-menu.style.css';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AppRouters />
		</BrowserRouter>
	</React.StrictMode>
);
