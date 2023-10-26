import Button from "@components/UI/buttons";
import { ButtonText } from "../Authorization.styled";
import Google from "public/images/icons/socials/google.svg";
import Faceboock from "public/images/icons/socials/u_facebook-f.svg";
import Form from "@components/dialogs/forms/Login";
import { useSignInWithGoogle } from "@common/hooks/useSignInWithGoogle";
import { useSignInWithFacebook } from "@common/hooks/useSignInWithFacebook";

import * as Styled from "./Login.styled";
import { Alert, Backdrop, CircularProgress, Snackbar } from "@mui/material";

type LoginProps = {
  onChangeType: () => void;
  onClose: () => void;
};

const Login: React.FC<LoginProps> = ({ onChangeType, onClose }) => {
  const { loading: googleAuthLoading, handleSignIn: handleGoogleSignIn } =
    useSignInWithGoogle(onClose);

  const { loading: facebookAuthLoading, handleSignIn: handleFacebookSignIn } =
    useSignInWithFacebook(onClose);

  const loading = googleAuthLoading || facebookAuthLoading;

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open
        style={{ top: "-80px" }}
        sx={{
          ".MuiPaper-root": {
            padding: "0px 12px",
          },
        }}
      >
        <Alert severity="info" sx={{ width: "100%", textAlign: "left" }}>
          Тестові дані для входу:
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0px 16px",
            }}
          >
            <span>User:</span>
            <span>testuser@mail.com</span>
            <span>testPassword</span>
            <span>Admin:</span>
            <span>testadmin@mail.com</span>
            <span>testPassword</span>
          </div>
        </Alert>
      </Snackbar>

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
              await handleGoogleSignIn();
            }}
          >
            <Google /> Google
          </Button>
          <Button
            style={{ flex: 1 }}
            size="medium"
            disabled
            onClick={async () => {
              await handleFacebookSignIn();
            }}
          >
            <Faceboock /> Facebook
          </Button>
        </Styled.Buttons>
        <Form onClose={onClose} />
      </Styled.Container>
    </>
  );
};

export default Login;
