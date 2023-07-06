import { EMAIL_AUTHORIZED } from "@/constants/authorized-email";

/**
 * @param email string
 * @returns boolean
 */


export const checkEmailIsAuthorized = (email: string) => {
  const appPublicRoutes = Object.values(EMAIL_AUTHORIZED.email);

  return appPublicRoutes.includes(email);
}