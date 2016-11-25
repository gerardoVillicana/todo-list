import React from 'react';
import './App.css';
import HelloWorldList from './HelloWorldList';
const App = () => {
  return (
    <div className="App">
      <table>
        <tr>
          <td className="celda">
            <h2>To Do</h2>
          </td>
          <td className="celda">
            <h2>In Progress</h2>
          </td>
          <td className="celda">
            <h2>Done</h2>
          </td>
        </tr>
        <tr>
          <td>
            <HelloWorldList />
          </td>
          <td>
            <HelloWorldList />
          </td>
            <HelloWorldList />
          <td>
          </td>
        </tr>
      </table>
    </div>);
};

export default App;
