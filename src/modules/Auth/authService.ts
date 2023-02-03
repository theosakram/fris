import { supabase } from "src/supabase";
import { OTPAuthRequest } from "./authType";

export const signInWithGoogle = async () => {
  const result = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  return result;
};

export const signUp = async () => {
  const result = await supabase.auth.signUp({
    email: "example@email.com",
    password: "example-password",
  });

  return result;
};
