import { tesloApi } from "@/api/tesloApi";

import type { RegisterParams } from "@/types/interfaces/params/register.params";
import type { AuthResponse } from "@/types/interfaces/responses/auth.response";

const register = async function ({
  fullName,
  email,
  password,
}: RegisterParams): Promise<AuthResponse> {
  try {
    const { data } = await tesloApi.post<AuthResponse>("/auth/register", {
      fullName,
      email,
      password,
    });

    return data;
  } catch (error) {
    console.error(`Something was unexpected: ${error}`);
    throw error;
  }
};

export default register;
