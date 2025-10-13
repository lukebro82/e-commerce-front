import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  name: string;
  email: string;
  token: string;
}

interface UserStore {
  user: User;
  setUser: (user: Partial<User>) => void;
  clearUser: () => void;
  isAuthenticated: boolean;
  setToken: (token: string) => void;
  setEmail: (email: string) => void;
}

const initialUser: User = {
  name: "",
  email: "",
  token: "",
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: initialUser,
      isAuthenticated: false,

      setUser: (newUser: Partial<User>) =>
        set((state) => {
          const updatedUser = { ...state.user, ...newUser };
          return {
            user: updatedUser,
            isAuthenticated: Boolean(updatedUser.token),
          };
        }),

      clearUser: () =>
        set({
          user: initialUser,
          isAuthenticated: false,
        }),

      setToken: (token: string) =>
        set((state) => {
          const updatedUser = { ...state.user, token };
          return {
            user: updatedUser,
            isAuthenticated: true,
          };
        }),
      setEmail: (email: string) =>
        set((state) => {
          const updatedUser = { ...state.user, email };
          return {
            user: updatedUser,
          };
        }),
    }),
    {
      name: "user-storage", // nombre para localStorage
    }
  )
);
