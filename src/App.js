import React, { Component } from 'react';
import morelia from './morelia.jpg';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="img">
          <img src={morelia} className="morelia" />
          <table className="tabla">
            <tr>
              <td className="celda1">
                to do
              </td>
              <td className="celda1">
                In progress
              </td>
              <td className="celda1">
                Done
              </td>
            </tr>
            <tr>
            <td className="celda2">
              Notificacion
            </td>
            <td className="celda2">
              vacio
            </td>
            <td className="celda2">
              vacio
            </td>
            </tr>
            <tr>
            <td className="celda2">
              Imagenes
            </td>
            <td className="celda2">
              vacio
            </td>
            <td className="celda2">
              vacio
            </td>
            </tr>
            <tr>
            <td className="celda2">
              llenar base de datos
            </td>
            <td className="celda2">
              vacio
            </td>
            <td className="celda2">
              vacio
            </td>
            </tr>
          </table>
        </div>
        <h2>Welcome to React</h2>
      </div>
    );
  }
}

export default App;
