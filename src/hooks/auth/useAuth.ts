import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  token: null,
};

type Store = {
  token: string | null;
  login: (token: string) => void;
};

export const useAuth = create(
  persist<Store>(
    (set, get) => ({
      ...initialState,
      login: (token) => {
        set({ token });
      },
    }),
    {
      name: "@auth",
      version: 0,
    }
  )
);
