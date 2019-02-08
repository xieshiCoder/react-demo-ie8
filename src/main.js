require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('fetch-ie8');
require('babel-polyfill');
const React = require('react');
const render = require('react-dom').render;

class App extends React.Component{
  render() {
    return (
      <div>
      <div id='aaa'>
        hello 
      </div>
        <div id='bbb'>
          world1
        </div>
      </div>
    )
  }
}
render(
  <App />,
  document.getElementById('app')
)
