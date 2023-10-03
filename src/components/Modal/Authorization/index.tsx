import CloseButton from "@components/UI/buttons/Close";

import * as Styled from "./Authorization.styled";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

type AuthorizationProps = {
  onClose: () => void;
};

const Authorization: React.FC<AuthorizationProps> = ({ onClose }) => {
  const [modalType, setModalType] = useState("login");
  const isLoginType = modalType === "login";
  return (
    <Styled.Container>
      <Styled.Head>
        {isLoginType ? "Вход" : "Регистрация"}
        <CloseButton onClick={onClose} />
      </Styled.Head>
      <Styled.Content>
        {isLoginType ? (
          <Login
            onClose={onClose}
            onChangeType={() => setModalType("register")}
          />
        ) : (
          <Register
            onClose={onClose}
            onChangeType={() => setModalType("login")}
          />
        )}
      </Styled.Content>
    </Styled.Container>
  );
};

export default Authorization;
