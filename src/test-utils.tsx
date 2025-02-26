import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render as baseRender } from "@testing-library/react";
import { ReactNode } from "react";

const queryClient = new QueryClient();

const render = (ui: ReactNode) => {
  return baseRender(
    // eslint-disable-next-line react/react-in-jsx-scope
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
};

export * from "@testing-library/react";
export { render };
