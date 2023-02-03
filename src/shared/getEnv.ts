import nextGetConfig from "next/config";

interface Config {
  publicRuntimeConfig: {
    supabaseUrl: string;
    supabaseAnonKey: string;
  };
}

export const getEnv = () => nextGetConfig() as Config;
