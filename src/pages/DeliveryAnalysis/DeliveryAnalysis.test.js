import React from "react";
import DeliveryAnalysis from "./DeliveryAnalysis.jsx";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import { Provider } from "react-redux";
import store from "../../store/store.jsx"; // Import your Redux store

jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: { DeliveryAnalysis: [] } })),
}));

describe("DeliveryAnalysis component", () => {
  test("renders without crashing", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <DeliveryAnalysis />
        </MemoryRouter>
      </Provider>
    );
  });

  // Add more test cases as needed
});
