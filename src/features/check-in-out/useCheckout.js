import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();
  const { mutate: checkout, isPending: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        active: true,
      });
      toast.success(`Booking ${data.id} checked out successfully`);
    },
    onError: () => {
      toast.error("There was an error checking out. Please try again.");
    },
  });
  return {
    checkout,
    isCheckingOut,
  };
}
