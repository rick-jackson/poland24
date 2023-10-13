import Image from "next/image";

import * as Styled from "./Request.styled";
import BlockTitle from "@components/BlockTitle";
import RequestForm from "@components/dialogs/forms/Request";

const Request: React.FC = () => {
  return (
    <Styled.RequestPageWrapper>
      <Styled.Content>
        <div style={{ maxWidth: "625px" }}>
          <BlockTitle title="Оформити запит" />
          <Styled.Description>
            Можете оформити запит і в найкоротші терміни постараємося знайти
            необхідний товар у країнах Євросоюзу.
          </Styled.Description>
        </div>
        <Image
          alt="request"
          src="/images/icons/request.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "477px",
            maxHeight: "352px",
            margin: "auto",
          }}
          priority
        />
      </Styled.Content>
      <RequestForm />
    </Styled.RequestPageWrapper>
  );
};

export default Request;
