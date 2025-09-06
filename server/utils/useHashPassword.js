import crypto from "crypto";

export function useHashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}
