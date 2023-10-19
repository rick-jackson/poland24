import { FULL_DATE } from "@common/data/dateFormat";
import Link from "@components/Link";
import type Order from "@entities/order";
import { format } from "date-fns";
import type { TableCell } from "src/types/table";

export const ordersConfig: TableCell<Order>[] = [
  {
    id: "dateCreated",
    render: ({ dateCreated }) => dateCreated && format(dateCreated, FULL_DATE),
  },
  {
    id: "userName",
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
    render: ({ status }) => status,
  },
];
