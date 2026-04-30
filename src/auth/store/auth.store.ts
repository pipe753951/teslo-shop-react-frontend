import { create } from "zustand";

import type { User } from "@/types/interfaces/user.interface";

import type { RegisterParams } from "@/types/interfaces/params/register.params";

import login from "../actions/login.action";
import checkAuthAction from "../actions/check-auth.action";
import register from "../actions/register.action";

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
  register(registerParams: RegisterParams): Promise<boolean>;
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
      get().logout();
      return false;
    }
  },

  async register({ fullName, email, password }) {
    try {
      const registerResponseData = await register({
        fullName,
        email,
        password,
      });

      localStorage.setItem("token", registerResponseData.token);

      set({
        user: registerResponseData.user,
        token: registerResponseData.token,
        authStatus: "authenticated",
      });
      return true;
    } catch {
      get().logout();
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
      get().logout();
      return false;
    }
  },
}));

export default useAuthStore;
