import type User from "@entities/user";
import Avatar from "@components/UI/Avatar";
import TeaDrink from "public/images/icons/tea-drink.svg";
import Message from "public/images/icons/message.svg";
import Viber from "public/images/icons/socials/014-viber.svg";
import Telegram from "public/images/icons/socials/017-telegram.svg";
import { Icon, MenuItem } from "@components/UI/Avatar/Avatar.styled";
import MessengerButton from "@components/UI/buttons/Messenger";
import * as Styled from "./Aside.styled";

type AsideProps = {
  userData: User;
};

const Aside: React.FC<AsideProps> = ({ userData }) => {
  return (
    <Styled.Aside>
      <Styled.Card>
        <Styled.User>
          <Avatar {...userData} />
        </Styled.User>
        <Styled.Divider />
        <Styled.Navigation>
          <MenuItem>
            <Icon>
              <TeaDrink />
            </Icon>
            Мои закази
          </MenuItem>
          <MenuItem>
            <Icon>
              <Message />
            </Icon>
            Мои отзиви
          </MenuItem>
        </Styled.Navigation>
        <p
          style={{ margin: 0, padding: "8px", fontWeight: 500, lineHeight: 1 }}
        >
          Связь по поводу информации о заказе через мессенджеры:
        </p>
        <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
          <MessengerButton disabled>
            <Viber />
          </MessengerButton>
          <MessengerButton disabled>
            <Telegram />
          </MessengerButton>
        </div>
      </Styled.Card>
    </Styled.Aside>
  );
};

export default Aside;
