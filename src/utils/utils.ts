import { User } from "../api/types";

export const evaluateCredentials = (users: User[], username: string) => users.find(user => user.username === username);
