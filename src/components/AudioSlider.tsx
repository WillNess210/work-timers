import React from "react";
import {
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Tooltip,
} from "@chakra-ui/react";

interface AudioSliderProps {
  value: number;
  setValue: (value: number) => void;
  disabled: boolean;
}

const AudioSlider = ({
  value,
  setValue,
  disabled,
}: AudioSliderProps): JSX.Element => {
  const [showTooltip, setShowTooltip] = React.useState(false);
  console.log(`audio slider w value: ${value}`);
  return (
    <Slider
      aria-label="slider-ex-6"
      onChange={(val) => setValue(val)}
      width="10rem"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      isReversed
      isDisabled={disabled}
    >
      <SliderMark
        value={value}
        textAlign="center"
        bg="blue.500"
        color="white"
        mt="-10"
        ml="-5"
        w="12"
        placement
      ></SliderMark>
      <SliderTrack bg="white">
        <SliderFilledTrack bg="blue.500" />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg="teal.500"
        color="white"
        placement="top"
        isOpen={showTooltip}
        label={`${Math.round(value)}%`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  );
};

export default AudioSlider;
