import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-in", label: "Checked in" },
          { value: "checked-out", label: "Checked out" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
      />

      <SortBy
        options={[
          { value: "startDate-desc", label: "Sort by date (recent)" },
          { value: "startDate-asc", label: "Sort by date (earlier)" },
          {
            value: "totalPrice-desc",
            label: "Sort by amount (highest to lowest)",
          },
          {
            value: "totalPrice-asc",
            label: "Sort by amount (lowest to highest)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
