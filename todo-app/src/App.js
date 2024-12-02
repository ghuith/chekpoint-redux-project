import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddTask from './component/addtask';
import ListTask from './component/listTaask';

const App = () => (
  <Provider store={store}>
    <div>
      <h1>To-Do List avec Redux</h1>
      <AddTask />
      <ListTask />
    </div>
  </Provider>
);

export default App;
