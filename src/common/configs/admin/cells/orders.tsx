import { FULL_DATE } from "@common/data/dateFormat";
import Link from "@components/Link";
import type Order from "@entities/order";
import { format } from "date-fns";
import type { TableCell } from "src/types/table";
// import Status from "@components/UI/Status";
import Select from "@components/UI/inputs/Select";
import { Status } from "@entities/order";
import { STATUS_LABELS_COLORS } from "@common/configs/colors";

export const ordersConfig: TableCell<Order>[] = [
  {
    id: "createdDate",
    render: ({ createdDate }) => createdDate && format(createdDate, FULL_DATE),
  },
  {
    id: "user",
    render: ({ fullName, email }) => (
      <>
        <span style={{ fontWeight: 700 }}>{fullName}</span>
        <br />
        <Link href={`mailto: ${email}`}>{email}</Link>
      </>
    ),
  },
  {
    id: "phoneNumber",
    render: ({ phone }) => phone && <Link href={`tel: ${phone}`}>{phone}</Link>,
  },
  {
    id: "post",
    render: ({ post }) => post,
  },
  {
    id: "comment",
    render: ({ comment }) => comment && comment,
  },
  {
    id: "status",
    // render: ({ status }) => <Status status={status} />,
    render: (order) => {
      return (
        <div style={{ display: "flex", gap: "4px" }}>
          <div
            style={{
              minWidth: "3px",
              background: STATUS_LABELS_COLORS[order.status],
            }}
          />
          <Select options={Status} locale={"order"} data={order} />
        </div>
      );
    },
  },
];
