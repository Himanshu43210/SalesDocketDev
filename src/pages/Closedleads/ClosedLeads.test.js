import React from "react";
import ClosedLeads from "./ClosedLeads.jsx";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import { Provider } from "react-redux"; // Import Provider
import store from "../../store/store.jsx"; // Import your Redux store

jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: { ClosedLeads: [] } })),
}));

describe("ClosedLeads component", () => {
  test("renders without crashing", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ClosedLeads />
        </MemoryRouter>
      </Provider>
    );
  });

  // Add more test cases as needed
});
