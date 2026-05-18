import { useState } from 'react';
import Unit from './Unit';

const units = {
  meter: 1,
  cm: 0.01,
  yard: 0.9144,
  feet: 0.3048
};

const Measurement = () => {
  const [currentValue, setCurrentValue] = useState(0);

  return (
    <div style={{ marginTop: '5px' }}>
      {Object.keys(units).map((unit) => {
        return (
          <Unit
            unitValue={currentValue}
            onChange={setCurrentValue}
            conversionValue={units[unit]}
            unitKey={unit}
          />
        );
      })}
    </div>
  );
};

export default Measurement;
