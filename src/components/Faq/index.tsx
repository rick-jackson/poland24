import Accordion from "@components/Accordion";
import { useTranslation } from "next-i18next";

const Faq: React.FC = () => {
  const { t } = useTranslation("faq");

  return (
    <div style={{marginTop: '12px'}}>
      {new Array(11).fill(null).map((_, index) => (
        <Accordion
          key={index}
          title={t(`accordion${index + 1}Title`)}
          description={t(`accordion${index + 1}Description`)}
        />
      ))}
    </div>
  );
};

export default Faq;
