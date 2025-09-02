import { create } from "zustand";

export const useLoginStore = create((set) => ({
  username: "",
  password: "",
  setUsername: (username) => set(() => ({ username: username })),
  setPassword: (password) => set(() => ({ password: password })),
}));
