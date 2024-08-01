import { Provider } from 'react-redux';
import './App.css';
import BoContainer from './reduxs/BoContainer';
import store from './reduxs/Store';

function App() {

    return (
    <Provider store={store}>
    <div className="App">
     <BoContainer />
    </div>  
    </Provider>
  );
}

export default App;
