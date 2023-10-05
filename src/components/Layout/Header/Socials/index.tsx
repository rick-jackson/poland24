import * as Styled from "./Socials.styled";
import Image from "next/image";
import Link from "@components/Link";

const Socials: React.FC = () => {
  return (
    <Styled.Socials>
      <Styled.Messangers>
        Наши мессенджеры
        <Styled.Icons>
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
        </Styled.Icons>
      </Styled.Messangers>
      <Styled.Mail>
        <Image
          alt="mail"
          width={17}
          height={17}
          src="images/icons/mail_outline_grey.svg"
        />
        info@poland24.com.ua
      </Styled.Mail>
    </Styled.Socials>
  );
};

export default Socials;
