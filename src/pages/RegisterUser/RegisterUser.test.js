import React from "react";
import RegisterUser from "./RegisterUser.jsx";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import { Provider } from "react-redux"; // Import Provider
import store from "../../store/store.jsx"; // Import your Redux store

jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: { RegisterUser: [] } })),
}));

describe("RegisterUser component", () => {
  test("renders without crashing", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <RegisterUser />
        </MemoryRouter>
      </Provider>
    );
  });

  // Add more test cases as needed
});
