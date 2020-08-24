import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DefaultExport from './DefaultExport';
import App from 'App';
import { FirstNamedComponent, SecondNamedComponent } from "./NamedExports";

/**************************************************************************************************
 * Volunteers: add you tests here. They should be failing, but the students should be able to make
 * them pass by editing the other files.
 **************************************************************************************************/

describe("The App", () => {
  test('Should render the 3 expected components', () => {
    const { getByText } = render(
      <div>
        <App />
      </div>
    );

    expect(getByText(/Default 1/i).textContent).toBe('Default 1');
    expect(getByText(/Named Component 1/i).textContent).toBe('Named Component 1');
    expect(getByText(/Named Component 2/i).textContent).toBe('Named Component 2');
  });
});

describe("The components", () => {
  test('should render as expected', () => {
    const { getByText } = render(
      <div>
        <DefaultExport />
        <FirstNamedComponent />
        <SecondNamedComponent />
      </div>
    );

    expect(getByText(/Default 1/i).textContent).toBe('Default 1');
    expect(getByText(/Named Component 1/i).textContent).toBe('Named Component 1');
    expect(getByText(/Named Component 2/i).textContent).toBe('Named Component 2');
  });
});

