import { http, HttpResponse } from "msw";
import { Owner, Pet, Toy, User } from "./types";
import { OWNERS, PETS, TOYS, USERS } from "./mockData";

const handlers = [
  http.get<any, any, Pet[]>("/api/pets", () => {
    return HttpResponse.json(PETS);
  }),
  http.get<any, any, Owner[]>("/api/owners", () => {
    return HttpResponse.json(OWNERS);
  }),
  http.get<any, any, Toy[]>("/api/toys", () => {
    return HttpResponse.json(TOYS);
  }),
  http.get<any, any, User[]>("/api/users", () => {
    return HttpResponse.json(USERS);
  }),
];

export { handlers };
