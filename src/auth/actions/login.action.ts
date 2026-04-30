import { tesloApi } from "@/api/tesloApi";
import type { AuthResponse } from "@/types/interfaces/responses/auth.response";

const login = async function (
  email: string,
  password: string,
): Promise<AuthResponse> {
  try {
    const { data } = await tesloApi.post<AuthResponse>("/auth/login", {
      email,
      password,
    });

    return data;
  } catch (error) {
    console.error(`Something was unexpected: ${error}`);
    throw error;
  }
};

export default login;
