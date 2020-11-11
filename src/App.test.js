import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from './App';
import Button from './Button';
import Counter from './Counter';

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

    expect(getByText(/Increment/i).textContent).toBe('Increment');
    expect(getByText(/0/i).textContent).toBe('0');
  });
});


