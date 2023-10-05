import Contacts from "@components/Contacts";
import PageLayout from "@components/Layout/Page";
import { NextPage } from "next";

type ContactsPageProps = {};

const ContactsPage: NextPage<ContactsPageProps> = () => {
  return (
    <PageLayout title="Contacts">
      <Contacts />
    </PageLayout>
  );
};

export default ContactsPage;
