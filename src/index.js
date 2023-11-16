import React from "react";
import { createRoot } from 'react-dom/client';

import App from './app';

const root = document.getElementById('root');
const rootElement = createRoot(root);
rootElement.render(<App />);