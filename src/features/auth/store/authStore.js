import { create } from "zustand";

export const useAuthStore = create((set) => ({
  username: "",
  stateUsername: "",
  password: "",
  statePassword: "",
  setUsername: (username) => set(() => ({ username: username })),
  setPassword: (password) => set(() => ({ password: password })),
  checkUsername: (username) => {
    set(() => ({stateUsername: username.length < 4 ? "Invalid username" : "Available"}))
  },
}));
