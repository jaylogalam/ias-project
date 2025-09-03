import { useMutation } from "@tanstack/react-query";

export function useSignupMutation() {
  return useMutation({
    mutationFn: signupRequest,
  });
}

export async function signupRequest(newUser: {
  username: string;
  password: string;
}) {
  const res = await fetch("http://localhost:5000/api/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });
    console.log(res);
    

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Signup failed");
  }

  return res.json();
}
