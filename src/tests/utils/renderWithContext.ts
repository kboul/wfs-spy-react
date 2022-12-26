import { render } from "@testing-library/react";
import { ReactElement } from "react";

import { Provider } from "../../context";

const renderWithContext = (ui: ReactElement, options?: any) =>
  render(ui, { wrapper: Provider, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithContext };
