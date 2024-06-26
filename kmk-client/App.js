import { store } from './src/actions/store';
import Router from './src/navigation/Router';
import { Provider } from 'react-redux';


export default function App() {
  return (
    <Provider store={store}>
        <Router/>
    </Provider>
  );
}