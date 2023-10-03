import Button from "@components/UI/buttons";
import { ButtonText } from "../Authorization.styled";
import Form from "./Form";
import { Buttons } from "../Login/Login.styled";
import Google from "public/images/icons/socials/google.svg";
import Faceboock from "public/images/icons/socials/u_facebook-f.svg";

type RegisterProps = {
  onChangeType: () => void;
  onClose: () => void;
};

const Register: React.FC<RegisterProps> = ({ onChangeType, onClose }) => {
  return (
    <div>
      <span style={{ fontSize: "16px" }}>
        У вас уже есть аккаунт?{" "}
        <ButtonText onClick={onChangeType}>Войдите</ButtonText>
      </span>
      <Buttons>
        <Button style={{ flex: 1 }} size="medium">
          <Google /> Google
        </Button>
        <Button style={{ flex: 1 }} size="medium">
          <Faceboock /> Facebook
        </Button>
      </Buttons>
      <Form onClose={onClose} />
    </div>
  );
};

export default Register;
