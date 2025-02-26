// import { render, screen } from "../test-utils";
// import PetList from "./PetList";

/*
  To test an error, we can use the following:
    server.use(
      http.get("/api/pets", () => {
        return HttpResponse.error();
      })
    );
  To test loading, we can use:
    server.use(
      http.get("/api/pets", () => {
        return new Promise(() => {});
      })
    );
*/
describe("PetList", () => {
  it("does things", () => {
    expect(true).toBe(true);
  });
});
