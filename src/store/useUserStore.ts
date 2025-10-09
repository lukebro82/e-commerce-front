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
    }),
    {
      name: "user-storage", // nombre para localStorage
    }
  )
);
