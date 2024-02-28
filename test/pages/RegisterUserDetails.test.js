import React from "react";
import RegisterUserDetails from "../../src/pages/RegisterUserDetails/RegisterUserDetails.jsx";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import { Provider } from "react-redux"; // Import Provider
import store from "../../src/store/store.jsx"; // Import your Redux store

jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: { RegisterUserDetails: [] } })),
}));

describe("RegisterUserDetails component", () => {
  test("renders without crashing", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <RegisterUserDetails />
        </MemoryRouter>
      </Provider>
    );
  });

  // Add more test cases as needed
});
