import type User from "@entities/user";
import Avatar from "@components/UI/Avatar";
import { Icon, MenuItem } from "@components/UI/Avatar/Avatar.styled";
import * as Styled from "./Aside.styled";
import Link from "@components/Link";
import Image from "next/image";

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
          <Link href="/profile/orders">
            <MenuItem>
              <Icon>
                <Image
                  alt="TeaDrink"
                  width={24}
                  height={24}
                  src="images/icons/tea-drink.svg"
                />
              </Icon>
              Мои закази
            </MenuItem>
          </Link>
          <Link href="/profile/reviews">
            <MenuItem>
              <Icon>
                <Image
                  alt="Message"
                  width={24}
                  height={24}
                  src="images/icons/message.svg"
                />
              </Icon>
              Мои отзиви
            </MenuItem>
          </Link>
        </Styled.Navigation>
        <p
          style={{ margin: 0, padding: "8px", fontWeight: 500, lineHeight: 1 }}
        >
          Связь по поводу информации о заказе через мессенджеры:
        </p>
        <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
          <Link href="#">
            <Image
              alt="viber"
              width={32}
              height={32}
              src="images/icons/socials/014-viber.svg"
            />
          </Link>
          <Link href="#">
            <Image
              alt="telegram"
              width={32}
              height={32}
              src="images/icons/socials/017-telegram.svg"
            />
          </Link>
        </div>
      </Styled.Card>
    </Styled.Aside>
  );
};

export default Aside;
