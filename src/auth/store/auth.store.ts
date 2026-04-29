import { create } from "zustand";

import type { User } from "@/types/interfaces/user.interface";

import login from "../actions/login.action";
import checkAuthAction from "../actions/check-auth.action";

type AuthStatus = "authenticated" | "not-authenticated" | "checking";

interface AuthState {
  //* Properties
  user: User | null;
  token: string | null;
  authStatus: AuthStatus;

  //* Computed values
  isAdmin(): boolean;

  //* Actions
  login(email: string, password: string): Promise<boolean>;
  logout(): void;
  checkAuthStatus(): Promise<boolean>;
}

const useAuthStore = create<AuthState>()((set, get) => ({
  //* Properties
  user: null,
  token: null,
  authStatus: "checking",

  isAdmin() {
    const userRoles = get().user?.roles || [];
    return userRoles.includes("admin");
  },

  //* Actions
  async login(email: string, password: string) {
    console.debug({ email, password });
    try {
      const loginResponseData = await login(email, password);
      localStorage.setItem("token", loginResponseData.token);

      set({
        user: loginResponseData.user,
        token: loginResponseData.token,
        authStatus: "authenticated",
      });
      return true;
    } catch {
      this.logout();
      return false;
    }
  },

  logout() {
    localStorage.removeItem("token");
    set({ user: null, token: null, authStatus: "not-authenticated" });
  },

  async checkAuthStatus() {
    try {
      const { user, token } = await checkAuthAction();
      set({ user, token, authStatus: "authenticated" });
      return true;
    } catch {
      this.logout();
      return false;
    }
  },
}));

export default useAuthStore;
