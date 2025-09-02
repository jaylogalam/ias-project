import { create } from "zustand";

export const useAuthStore = create((set) => ({
  username: "",
  password: "",
  setUsername: (username) => set(() => ({ username: username })),
  setPassword: (password) => set(() => ({ password: password })),
}));
