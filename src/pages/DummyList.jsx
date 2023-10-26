const DummyList = () => {
  const dummyList = 'dummyList';
  return (
    <ul>
      {dummyList.split('').map(item => (
        <li>
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
};

export default DummyList;
