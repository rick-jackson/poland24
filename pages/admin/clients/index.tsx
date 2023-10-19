import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { collection, getDocs } from "firebase/firestore";

import type User from "@entities/user";
import { db } from "@firebase";
import AdminTable from "@components/admin/Table";
import UserPageLayout from "@components/Layout/UserPage";
import { clientsConfig } from "@common/configs/admin/cells/clients";

type ClientsPageProps = {
  clientsData: User[];
};

const ClientsPage: NextPage<ClientsPageProps> = ({ clientsData }) => {
  const { t } = useTranslation("navigation");

  return (
    <UserPageLayout title={t("clients")}>
      <AdminTable<User> data={clientsData} cellsConfig={clientsConfig} />
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
