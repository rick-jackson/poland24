import { useForm } from "react-hook-form";
import { defaultOrder } from "@common/data/defaultOrder";
import Button from "@components/UI/buttons";
import { getCookie } from "cookies-next";
import {
  collection,
  doc,
  getCountFromServer,
  setDoc,
} from "firebase/firestore";
import { db } from "../../../../../firebase";
import { enqueueSnackbar } from "notistack";
import { filterEmptyParam } from "@common/utils/filterEmpryParams";
import OrderFormInputs from "./Inputs";

type OrderFormProps = {
  onClose: () => void;
};

const OrderForm: React.FC<OrderFormProps> = ({ onClose }) => {
  const {
    control,
    handleSubmit: onSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({
    defaultValues: defaultOrder(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(async (data: any) => {
      const userId = getCookie("userId");
      const ordersRef = doc(collection(db, "orders"));
      const ordersCount = (
        await getCountFromServer(collection(db, "orders"))
      ).data().count;

      try {
        await setDoc(ordersRef, {
          ...filterEmptyParam(data),
          orderNumber: +ordersCount + 1,
          status: "IN_PROGRESS",
          userId,
          id: ordersRef.id,
          dateCreated: new Date().valueOf(),
        });
        onClose();
        reset(defaultOrder());
        enqueueSnackbar("Order added!", { variant: "success" });
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
