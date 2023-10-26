const DummyList = () => {
  const dummyList = 'dummyList';
  return (
    <ul>
      {dummyList.split('').map((item, i) => (
        <li key={`${item}${i}`}>
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
};

export default DummyList;
