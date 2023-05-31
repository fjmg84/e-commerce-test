import { useState } from "react";

const useRate = () => {
  const [rates, setRates] = useState([]);

  const generated = ({ value, colorFill, colorOutFill }) => {
    let tempRates = [];
    for (let i = 1; i <= 5; i++) {
      tempRates = [
        ...tempRates,
        `fa fa-star ${i <= value ? colorFill : colorOutFill}`,
      ];
    }
    setRates(tempRates);
  };
  return {
    generated,
    rates,
  };
};

export default useRate;
