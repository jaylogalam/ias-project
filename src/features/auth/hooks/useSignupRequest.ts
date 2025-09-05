import { useMutation } from "@tanstack/react-query";
import { fetchSignupRequest } from "../../../data/local/fetchSignupRequest";
import { useNavigate } from "react-router-dom";
import type { UseFormSetError } from "react-hook-form";

type FormFields = {
  username: string;
  password: string;
};

export function useSignupRequest(setError: UseFormSetError<FormFields>) {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: fetchSignupRequest,
    onSuccess: () => {
      alert("Account created successfully");
      navigate("/");
    },
    onError: (err: any) => {
      setError("username", {
        message: err.message,
      });
    },
  });

  return mutation;
}
