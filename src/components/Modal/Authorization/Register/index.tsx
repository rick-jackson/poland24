import Button from "@components/UI/buttons";
import { ButtonText } from "../Authorization.styled";
import Form from "@components/dialogs/forms/Register";
import { Buttons } from "../Login/Login.styled";
import Google from "public/images/icons/socials/google.svg";
import Faceboock from "public/images/icons/socials/u_facebook-f.svg";
import { useSignInWithGoogle } from "@gateways/useSignInWithGoogle";
import { Backdrop, CircularProgress } from "@mui/material";

type RegisterProps = {
  onChangeType: () => void;
  onClose: () => void;
};

const Register: React.FC<RegisterProps> = ({ onChangeType, onClose }) => {
  const { loading, handleSignIn } = useSignInWithGoogle(onClose);

  return (
    <div>
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <span style={{ fontSize: "16px" }}>
        У вас уже есть аккаунт?{" "}
        <ButtonText onClick={onChangeType}>Войдите</ButtonText>
      </span>
      <Buttons>
        <Button
          onClick={async () => {
            await handleSignIn();
          }}
          style={{ flex: 1 }}
          size="medium"
        >
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
