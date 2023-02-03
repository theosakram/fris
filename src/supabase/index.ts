import { createClient } from "@supabase/supabase-js";
import { getEnv } from "src/shared/getEnv";

const {
  publicRuntimeConfig: { supabaseAnonKey, supabaseUrl },
} = getEnv();

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
