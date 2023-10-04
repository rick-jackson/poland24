import * as Styled from "./BlockTitle.styled";

type BlockTitleProps = {
  title: string;
  subtitle?: string;
};

const BlockTitle: React.FC<BlockTitleProps> = ({ title, subtitle }) => {
  return (
    <Styled.Container>
      <Styled.Divider />
      <Styled.Text>
        <Styled.Title>{title}</Styled.Title>
        {subtitle && <Styled.Subtitle>{subtitle}</Styled.Subtitle>}
      </Styled.Text>
    </Styled.Container>
  );
};

export default BlockTitle;
