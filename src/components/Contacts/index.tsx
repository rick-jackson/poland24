import Image from "next/image";
import Link from "@components/Link";

import * as Styled from "./Contacts.styled";

const Contacts: React.FC = () => {
  return (
    <Styled.Contacts>
      <Styled.Column>
        <Styled.ColumnTitle>
          Контактна інформація щодо замовлень через месенджери:
        </Styled.ColumnTitle>
        <Styled.Icons>
          <Link href="#">
            <Image
              alt="viber"
              width={32}
              height={32}
              src="/images/icons/socials/014-viber.svg"
            />
          </Link>
          <Link href="#">
            <Image
              alt="telegram"
              width={32}
              height={32}
              src="/images/icons/socials/017-telegram.svg"
            />
          </Link>
        </Styled.Icons>
      </Styled.Column>
      <Styled.Column>
        <Styled.ColumnTitle>Адреса складу</Styled.ColumnTitle>
        <Styled.ColumnInfo>
          22-600 Томашів
          <br />
          Любельський, вул.
          <br />
          Рольніча 2 Польща
        </Styled.ColumnInfo>
      </Styled.Column>
      <Styled.Column>
        <Styled.ColumnTitle>Час роботи</Styled.ColumnTitle>
        <Styled.ColumnInfo>
          Пн-Пт 9:00 - 17:00
          <br />
          Сб 9:00 - 15:00
          <br />
          Нд - Вих.
        </Styled.ColumnInfo>
      </Styled.Column>

      <Styled.Column>
        <Styled.ColumnTitle>електронна пошта</Styled.ColumnTitle>
        <Styled.ColumnInfo>info@poland24.com.ua</Styled.ColumnInfo>
        <Styled.ColumnTitle>Телефон</Styled.ColumnTitle>
        <Styled.ColumnInfo>+38 (093) 496 58 00</Styled.ColumnInfo>
      </Styled.Column>
    </Styled.Contacts>
  );
};

export default Contacts;
