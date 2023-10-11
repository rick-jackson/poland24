import { useForm } from "react-hook-form";
import { defaultOrder } from "@common/data/defaultOrder";
import Button from "@components/UI/buttons";
import { enqueueSnackbar } from "notistack";
import OrderFormInputs from "./Inputs";
import type Order from "@entities/order";
import { useRouter } from "next/router";
import { createOrder } from "@gateways/order/save";
import { editOrder } from "@gateways/order/edit";

type OrderFormProps = {
  onClose: () => void;
  defaultValues?: Partial<Order>;
};

const OrderForm: React.FC<OrderFormProps> = ({ onClose, defaultValues }) => {
  const router = useRouter();
  const {
    control,
    handleSubmit: onSubmit,
    formState: { errors },
    register,
  } = useForm({
    defaultValues: defaultOrder(defaultValues),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(async (data: any) => {
      try {
        if (!defaultValues) {
          await createOrder(data);
          enqueueSnackbar("Order added!", { variant: "success" });
        } else {
          await editOrder({ ...defaultValues, ...data });
          enqueueSnackbar("Order edit!", { variant: "success" });
        }
        onClose();
        router.replace(router.asPath);
      } catch (e) {
        enqueueSnackbar(e.message, { variant: "error" });
      }
    })();
  };

  return (
    <form onSubmit={handleSubmit}>
      <OrderFormInputs control={control} register={register} errors={errors} />
      <Button style={{ margin: "auto", marginTop: "16px" }} type="submit">
        Отправить
      </Button>
    </form>
  );
};

export default OrderForm;
