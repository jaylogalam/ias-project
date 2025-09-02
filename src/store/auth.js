import { create } from "zustand";
import crypto from "node:crypto";

export const useAuthStore = create((set) => ({
  username: "",
  password: "",
  setUsername: (username) => set(() => ({ username: username })),
  setPassword: (password) => set(() => ({ password: password })),
}));
