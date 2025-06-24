import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkin, isPending: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        active: true,
      });
      navigate("/bookings");
      toast.success(`Booking ${data.id} checked in successfully`);
    },
    onError: () => {
      toast.error("There was an error checking in. Please try again.");
    },
  });
  return {
    checkin,
    isCheckingIn,
  };
}
