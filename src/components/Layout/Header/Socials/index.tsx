import MessengerButton from "@components/UI/buttons/Messenger";
import Telegram from "public/images/icons/socials/017-telegram.svg";
import Viber from "public/images/icons/socials/014-viber.svg";
import Mail from "public/images/icons/mail_outline_grey.svg";

import * as Styled from "./Socials.styled";

const Socials: React.FC = () => {
  return (
    <Styled.Socials>
      <Styled.Messangers>
        Наши мессенджеры
        <Styled.Icons>
          <MessengerButton>
            <Viber />
          </MessengerButton>
          <MessengerButton>
            <Telegram />
          </MessengerButton>
        </Styled.Icons>
      </Styled.Messangers>
      <Styled.Mail>
        <Mail />
        info@poland24.com.ua
      </Styled.Mail>
    </Styled.Socials>
  );
};

export default Socials;
