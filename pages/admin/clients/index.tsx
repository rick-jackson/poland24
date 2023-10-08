import UserPageLayout from "@components/Layout/UserPage";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useTranslation } from "next-i18next";
import { NextPage } from "next";
import type User from "@entities/user";

type ClientsPageProps = {
  clientsData: User[];
};

const ClientsPage: NextPage<ClientsPageProps> = ({ clientsData }) => {
  console.log(clientsData);
  const { t } = useTranslation("navigation");

  return (
    <UserPageLayout title={t("editProfile")}>
      <table
        style={{
          width: "100%",
          background: "#fff",
          padding: "8px",
          borderRadius: "10px",
          marginTop: "16px",
        }}
      >
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>Имя Фамилия клиента </th>
            <th style={{ textAlign: "left" }}>Телефон</th>
            <th style={{ textAlign: "left" }}>E-mail</th>
            <th style={{ textAlign: "left" }}>Примечание</th>
          </tr>
        </thead>
        <tbody>
          {clientsData.map((el) => (
            <tr key={el.id}>
              <td>
                {el.firstName} {el.lastName}
              </td>
              <td>{el.phone}</td>
              <td>{el.email}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </UserPageLayout>
  );
};

export const getServerSideProps = async () => {
  const usersRef = collection(db, "users");
  const usersSnapshot = await getDocs(usersRef);

  const clientsData: User[] = [];

  usersSnapshot.forEach((doc) => {
    clientsData.push(doc.data() as User);
  });

  return {
    props: {
      clientsData,
    },
  };
};

export default ClientsPage;
