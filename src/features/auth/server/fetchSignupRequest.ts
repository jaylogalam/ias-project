type SignupRequest = {
  username: string;
  password: string;
};

export async function fetchSignupRequest(account: SignupRequest) {
  const res = await fetch("http://localhost:5000/api/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(account),
  });

  if (!res.ok) {
    const error = await res.json();
    if (error.error.includes("Duplicate"))
      throw new Error("Username already taken");
    else throw new Error(error.error);
  }

  return res.json();
}
