import { create } from "zustand";

import type { User } from "@/types/interfaces/user.interface";
import login from "../actions/login.action";

interface AuthState {
  //* Properties
  user: User | null;
  token: string | null;

  //* Computed values
  //* Actions
  login(email: string, password: string): Promise<boolean>;
}

const useAuthStore = create<AuthState>()((set) => ({
  //* Properties
  user: null,
  token: null,

  //* Actions
  async login(email: string, password: string) {
    console.debug({ email, password });
    try {
      const loginResponseData = await login(email, password);
      localStorage.setItem("token", loginResponseData.token);

      set({ user: loginResponseData.user, token: loginResponseData.token });
      return true;
    } catch {
      localStorage.removeItem("token");
      set({ user: null, token: null });
      return false;
    }
  },
}));

export default useAuthStore;
