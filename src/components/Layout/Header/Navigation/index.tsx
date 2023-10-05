import Help from "public/images/icons/help_outline.svg";
import { useTranslation } from "next-i18next";

import * as Styled from "./Navigation.styled";
import Button from "@components/UI/buttons";
import Link from "@components/Link";

const Navigation: React.FC = () => {
  const { t } = useTranslation("navigation");

  return (
    <Styled.Navigation>
      <Link href="/about">
        <Styled.NavLink>{t("about")}</Styled.NavLink>
      </Link>
      <Link href="/shops">
        <Styled.NavLink>{t("shops")}</Styled.NavLink>
      </Link>
      <Link href="/reviews">
        <Styled.NavLink>{t("reviews")}</Styled.NavLink>
      </Link>
      <Link href="/faq">
        <Styled.NavLink>{t("faq")}</Styled.NavLink>
      </Link>
      <Link
        href={{
          pathname: "/",
          hash: "calculator",
        }}
      >
        <Styled.NavLink>{t("calculator")}</Styled.NavLink>
      </Link>
      <Link href="/contacts">
        <Styled.NavLink>{t("contacts")}</Styled.NavLink>
      </Link>
      <Button size="small" variant="green">
        <Help />
        {t("request")}
      </Button>
    </Styled.Navigation>
  );
};

export default Navigation;
