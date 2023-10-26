const DummyChart = () => {
  const dummyChart = 'dummyChart';
  return (
    <ul>
      {dummyChart.split('').map((item, i) => {
        const margin = i * 10;
        return (
          <li key={`${item}${i}`} style={{ marginLeft: `${margin}px` }}>
            <p>{item}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default DummyChart;
