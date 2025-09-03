import { useMutation } from "@tanstack/react-query";

export function useLoginMutation() {
  return useMutation({
    mutationFn: loginRequest,
  });
}

async function loginRequest(account: {
  username: string;
  password: string;
}) {
  const res = await fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(account),
  });

    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message)
    };
    return {data};
}