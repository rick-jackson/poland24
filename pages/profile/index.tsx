import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { NextPage } from "next";
import type User from "@entities/user";
import UserPageLayout from "@components/Layout/UserPage";
import Profile from "@components/Profile";

type ProfilePageProps = {
  userData: User;
};

const ProfilePage: NextPage<ProfilePageProps> = ({ userData }) => {
  return (
    <UserPageLayout title="Редактировать профиль">
      <Profile userData={userData} />
    </UserPageLayout>
  );
};

export default ProfilePage;

export const getServerSideProps = async (context) => {
  const userId = context.req.cookies.userId as string;
  if (!userId) {
    return {
      redirect: {
        destination: "/error",
        permanent: false,
      },
    };
  }

  const calendarsRef = doc(db, "users", userId);

  const userData: User | any = await getDoc(calendarsRef).then((res) => {
    return res.data();
  });

  return {
    props: {
      userData,
    },
  };
};