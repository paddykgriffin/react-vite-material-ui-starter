interface ParagraphProps {
  text: string;
}

const Paragraph = ({ text }: ParagraphProps) => {
  return <p>{text}</p>;
};

export default Paragraph;
