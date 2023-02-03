export type OTPAuthRequest = {
  email: string;
  onError?: (err: unknown) => void;
  onSuccess?: () => void;
};
