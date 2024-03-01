import React from "react";
import AllLeads from "./AllLeads.jsx";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import { Provider } from "react-redux"; // Import Provider
import store from "../../store/store.jsx"; // Import your Redux store

test("Render test", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <AllLeads />
      </MemoryRouter>
    </Provider>
  );
});
