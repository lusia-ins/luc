import './styles/main.css';
import { config } from './data/config';
import { renderApp } from './components/App';

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = renderApp(config);
  }
});
