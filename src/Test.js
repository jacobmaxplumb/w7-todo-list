export const Test = (props) => {
  return (
    <>
      <h3>{props.myPropOne}</h3>
      <button onClick={() => props.myPropTwo()}>Click</button>
    </>
  );
};
