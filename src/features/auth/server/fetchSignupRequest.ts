import { useMutation } from "@tanstack/react-query";

export function fetchSignupRequest() {
  return useMutation({
    mutationFn: signupRequest,
  });
}

async function signupRequest(account: {
  username: string;
  password: string;
}) {
  const res = await fetch("http://localhost:5000/api/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(account),
  });    

  if (!res.ok) {
    const error = await res.json();
    if (error.error.includes("Duplicate")) throw new Error("Username already taken");
    else throw new Error(error.error)
  }

  return res.json();
}
