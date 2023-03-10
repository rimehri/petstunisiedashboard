import { create } from "zustand";
import { persist } from "zustand/middleware";
import { JwtToken } from "../../types/app";

const initialState = {
  token: null,
};

type Store = {
  token: JwtToken | null;
  login: (token: JwtToken) => void;
  logout: () => void;
};

export const useAuth = create(
  persist<Store>(
    (set, get) => ({
      ...initialState,
      login: (token) => {
        set({ token });
      },
      logout: () => {
        set(initialState);
      },
    }),
    {
      name: "@auth",
      version: 0,
    }
  )
);
