import React from "react";
import Profile from "../../src/pages/Profile/Profile.jsx";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import { Provider } from "react-redux"; // Import Provider
import store from "../../src/store/store.jsx"; // Import your Redux store

jest.mock("../../src/assets/User_Logo.jpeg", () => "User_Logo");

jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: { Profile: [] } })),
}));

describe("Profile component", () => {
  test("renders without crashing", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Profile />
        </MemoryRouter>
      </Provider>
    );
  });

  // Add more test cases as needed
});
