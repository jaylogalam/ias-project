import { z } from "zod";
import { useAuthStore } from "../store/authStore";

export const authSchema = z.object({
    username: z.string().min(4).max(16),
    password: z.string().min(5).max(16)
})

export function checkUsername(error) {
    const checkUsername = useAuthStore((state) => state.checkUsername)
    switch (error.error.issues[0].code) {
        case "too_small": checkUsername() 
    }
}

export function checkPassword(error) {
    switch (error.error.issues[0].code) {
      case "too_small":
        alert("Must contain atleast 4 characters.");
    }
}