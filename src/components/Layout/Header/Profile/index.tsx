import { getCookie } from "cookies-next";
import Button from "@components/UI/buttons";
import Avatar from "@components/UI/Avatar";
import { useMediaQuery } from "@mui/material";
import theme from "@theme/index";
import useModal from "@common/hooks/useModal";
import TemporaryDrawer from "@components/Drawer";
import IconButton from "@components/UI/buttons/IconButton";
import User from "public/images/icons/white-user.svg";
import Modal from "@components/Modal";
import Authorization from "@components/Modal/Authorization";
import OrderForm from "@components/dialogs/forms/Order";
import { useTranslation } from "next-i18next";

const Profile = () => {
  const userId = getCookie("userId");
  const userData = JSON.parse(localStorage.getItem("userData"));
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation("header");

  const Desktop = () => {
    const { open, handleOpen, handleClose } = useModal();
    return (
      <>
        {!!userData && !!userId ? (
          <Avatar firstName={userData.firstName} lastName={userData.lastName} />
        ) : (
          <Button
            style={{ color: "#2D2D2D" }}
            size="medium"
            variant="text"
            onClick={handleOpen}
          >
            {t("signin")}
          </Button>
        )}
        <Modal isOpen={open} onClose={handleClose}>
          <Authorization onClose={handleClose} />
        </Modal>
      </>
    );
  };

  const Mobile = () => {
    const { open, handleOpen, handleClose } = useModal();
    return (
      <>
        {matches && (
          <div style={{ display: "flex", gap: "6px" }}>
            {userId ? (
              <Avatar
                firstName={userData.firstName}
                lastName={userData.lastName}
              />
            ) : (
              <IconButton onClick={handleOpen}>
                <User style={{ height: "24px" }} />
              </IconButton>
            )}
            <TemporaryDrawer onOpen={handleOpen} />
          </div>
        )}
        <Modal
          isOpen={open}
          onClose={handleClose}
          {...(userId && { title: "Сделать заказ" })}
        >
          {!userId ? <Authorization onClose={handleClose} /> : <OrderForm />}
        </Modal>
      </>
    );
  };

  return { Desktop, Mobile };
};

export default Profile;
