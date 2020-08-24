import React from "react";
import DefaultComponent from './DefaultExport';
import { FirstNamedComponent, SecondNamedComponent } from './NamedExports';

function DefaultComponent() {
  return (
    <div>Default 1</div>
  );
}

function FirstNamedComponent() {
  return (
    <div>Named Component 1</div>
  );
}

function SecondNamedComponent() {
  return (
    <div>Named Component 2</div>
  );
}

const App = () => {
  return (<div>
    <DefaultComponent />
    <FirstNamedComponent />
    <SecondNamedComponent />
  </div>);
};

export default App;
