import { Provider } from 'react-redux';
import './App.css';
import Counter from './reduxtool/Counter';
import store from './reduxtool/Store';

function App() {

    return (
    <Provider store={store}>
    <div className="App">
      <h1>hello</h1>
     <Counter />
    </div>  
    </Provider>
  );
}

export default App;
