import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // Renamed for clarity

const container = document.getElementById('root');
// Check if container is not null
if (container !== null) {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
}


serviceWorkerRegistration.unregister();
