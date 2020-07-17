import React from 'react';
import './App.css';
import Posts from './components/Posts';
import PostsForm from './components/PostsForm';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostsForm />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
