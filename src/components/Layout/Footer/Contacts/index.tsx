import Location from "public/images/icons/location.svg";
import Clock from "public/images/icons/time.svg";
import Phone from "public/images/icons/phone.svg";
import Mail from "public/images/icons/mail_outline.svg";

import * as Styled from "./Contacts.styled";

const Contacts: React.FC = () => {
  return (
    <Styled.Contacts>
      <Styled.BlockTitle>КОНТАКТЫ:</Styled.BlockTitle>
      <Styled.ContactsColums>
        <Styled.ContactColum>
          <Styled.ContactItem>
            <Styled.Icon>
              <Location />
            </Styled.Icon>
            <span>Украина, Жовква, ул. Набержная, 1</span>
          </Styled.ContactItem>
          <Styled.ContactItem>
            <Styled.Icon>
              <Clock />
            </Styled.Icon>
            <span>Время работы с 10:00 до 19:00</span>
          </Styled.ContactItem>
        </Styled.ContactColum>
        <Styled.ContactColum>
          <Styled.PhoneContactItem>
            <Styled.Icon>
              <Phone />
            </Styled.Icon>
            <span>+380443792816</span>
          </Styled.PhoneContactItem>
          <Styled.MailContactItem>
            <Styled.Icon>
              <Mail />
            </Styled.Icon>
            <span>info@insound.com.ua</span>
          </Styled.MailContactItem>
        </Styled.ContactColum>
      </Styled.ContactsColums>
    </Styled.Contacts>
  );
};

export default Contacts;
