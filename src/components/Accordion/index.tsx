import { useState } from "react";
import Open from "public/images/icons/add_black.svg";
import Close from "public/images/icons/remove_black.svg";

import * as Styled from "./Accordion.styled";
import Image from "next/image";

type AccordionProps = {
  title: string;
  description: string;
};

const Accordion: React.FC<AccordionProps> = ({ title, description }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Styled.Accordion expanded={expanded} onChange={handleChange}>
        <Styled.AccordionSummary>
          {title}{" "}
          <Image
            alt="icon"
            width={25}
            height={25}
            src={
              expanded
                ? "/images/icons/remove_black.svg"
                : "/images/icons/add_black.svg"
            }
          />
        </Styled.AccordionSummary>
        <Styled.AccordionDetails>{description}</Styled.AccordionDetails>
      </Styled.Accordion>
    </>
  );
};

export default Accordion;
