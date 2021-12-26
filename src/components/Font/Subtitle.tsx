import React from "react";
import { Heading } from "@chakra-ui/react";

interface SubtitleProps {
  text: string;
}

const Subtitle = ({ text }: SubtitleProps): JSX.Element => {
  return (
    <Heading
      size="md"
      color="gray.500"
      fontWeight="semibold"
      letterSpacing="wide"
    >
      {text}
    </Heading>
  );
};

export default Subtitle;
