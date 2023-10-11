import Button from "@components/UI/buttons";
import { ButtonText } from "../Authorization.styled";
import Google from "public/images/icons/socials/google.svg";
import Faceboock from "public/images/icons/socials/u_facebook-f.svg";
import Form from "@components/dialogs/forms/Login";
import { useSignInWithGoogle } from "@gateways/signInGoogle";

import * as Styled from "./Login.styled";
import { Backdrop, CircularProgress } from "@mui/material";

type LoginProps = {
  onChangeType: () => void;
  onClose: () => void;
};

const Login: React.FC<LoginProps> = ({ onChangeType, onClose }) => {
  const { loading, handleSignIn } = useSignInWithGoogle(onClose);

  return (
    <Styled.Container>
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <span style={{ fontSize: "16px" }}>
        У вас еще нету аккаунта?{" "}
        <ButtonText onClick={onChangeType}>Зарегистрируйтесь</ButtonText>
      </span>
      <Styled.Buttons>
        <Button
          style={{ flex: 1 }}
          size="medium"
          onClick={async () => {
            await handleSignIn();
          }}
        >
          <Google /> Google
        </Button>
        <Button style={{ flex: 1 }} size="medium">
          <Faceboock /> Facebook
        </Button>
      </Styled.Buttons>
      <Form onClose={onClose} />
    </Styled.Container>
  );
};

export default Login;
