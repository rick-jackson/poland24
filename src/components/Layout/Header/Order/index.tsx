import useModal from "@common/hooks/useModal";
import Button from "@components/UI/buttons";
import Modal from "@components/Modal";
import { getCookie } from "cookies-next";
import Authorization from "@components/Modal/Authorization";
import OrderForm from "@components/dialogs/forms/Order";

type OrderProps = {
  text: string;
  size?: "small" | "medium" | "large";
};

const Order: React.FC<OrderProps> = ({ text, size = "large" }) => {
  const { open, handleOpen, handleClose } = useModal();
  const userId = getCookie("userId");

  return (
    <>
      <Button onClick={handleOpen} size={size}>
        {text}
      </Button>
      <Modal
        {...(userId && { title: "Сделать заказ" })}
        isOpen={open}
        onClose={handleClose}
      >
        {!userId ? <Authorization onClose={handleClose} /> : <OrderForm />}
      </Modal>
    </>
  );
};

export default Order;