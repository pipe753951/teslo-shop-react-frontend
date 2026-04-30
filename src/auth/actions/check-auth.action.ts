import { tesloApi } from "@/api/tesloApi";
import type { AuthResponse } from "@/types/interfaces/responses/auth.response";

const checkAuthAction = async function (): Promise<AuthResponse> {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found.");

  try {
    const { data } = await tesloApi.get<AuthResponse>("/auth/check-status");

    return data;
  } catch {
    throw new Error(
      "Token expired or not valid, or something unexpected happened.",
    );
  }
};

export default checkAuthAction;
