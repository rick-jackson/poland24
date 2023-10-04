import type User from "@entities/user";
import * as Styled from "./Profile.styled";
import UserForm from "@components/dialogs/forms/User";

type ProfileProps = {
  userData: User;
};

const Profile: React.FC<ProfileProps> = ({ userData }) => {
  return (
    <Styled.Content>
      <UserForm userData={userData} />
    </Styled.Content>
  );
};

export default Profile;
