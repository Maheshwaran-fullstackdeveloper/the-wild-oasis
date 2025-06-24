import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isPending, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      toast.success("Logged in successfully!");
      queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard", { replace: true }); //replace will add new entry in history stack
      // This prevents the user from going back to the login page after logging in
    },
    onError: (err) => {
      console.error("Login failed:", err);
      toast.error(`Login failed.  ${err.message}!`);
    },
  });
  return { isPending, login };
}
