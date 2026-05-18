const Unit = ({ unitValue, onChange, conversionValue, unitKey }) => {
  const handleChange = (event) => {
    const value = Number(event.target.value);
    onChange(value * conversionValue);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
      <div>{unitKey}: </div>
      <input
        type="number"
        onChange={handleChange}
        value={(unitValue / conversionValue).toFixed(2)}
      />
    </div>
  );
};

export default Unit;
