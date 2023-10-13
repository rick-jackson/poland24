import useModal from "@common/hooks/useModal";
import Button from "@components/UI/buttons";
import Modal from "@components/Modal";
import { getCookie } from "cookies-next";
import Authorization from "@components/Modal/Authorization";
import OrderForm from "@components/dialogs/forms/Order";
import type OrderType from "@entities/order";

type OrderProps = {
  text: string;
  size?: "small" | "medium" | "large";
  defaultValues?: Partial<OrderType>;
  disabled?: boolean;
  fullwidth?: boolean;
};

const Order: React.FC<OrderProps> = ({
  text,
  size = "large",
  defaultValues,
  ...props
}) => {
  const { open, handleOpen, handleClose } = useModal();
  const userId = getCookie("userId");

  return (
    <>
      <Button onClick={handleOpen} size={size} {...props}>
        {text}
      </Button>
      <Modal
        {...(userId && { title: "Сделать заказ" })}
        isOpen={open}
        onClose={handleClose}
      >
        {!userId ? (
          <Authorization onClose={handleClose} />
        ) : (
          <OrderForm onClose={handleClose} defaultValues={defaultValues} />
        )}
      </Modal>
    </>
  );
};

export default Order;
