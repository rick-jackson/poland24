import Help from "public/images/icons/help_outline.svg";
import { useTranslation } from "next-i18next";

import * as Styled from "./Navigation.styled";
import Button from "@components/UI/buttons";
import Link from "@components/Link";
import { navigation } from "@common/configs/navigation";

type NavigationProps = {
  onCloseDrawer?: () => void;
};

const Navigation: React.FC<NavigationProps> = ({ onCloseDrawer }) => {
  const { t } = useTranslation("navigation");

  return (
    <Styled.Navigation>
      {navigation.map(({ link, hash }, index) => (
        <Link
          {...(onCloseDrawer && { onClick: onCloseDrawer })}
          onClick={onCloseDrawer}
          key={index}
          href={{
            pathname: link ? `/${link}` : "/",
            ...(hash && { hash }),
          }}
        >
          <Styled.NavLink>{t(link || hash)}</Styled.NavLink>
        </Link>
      ))}
      <Link href="/request" {...(onCloseDrawer && { onClick: onCloseDrawer })}>
        <Button size="small" variant="green">
          <Help />
          {t("request")}
        </Button>
      </Link>
    </Styled.Navigation>
  );
};

export default Navigation;
