import Hello from './Hello';
import Name from './Name';
import Wrapper from './Wrapper';

function App() {
  const react = 'React';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: 8,
  };

  return (
    <>
      <Hello 
        // 주석주석주석
      />
      <div style={style}>안녕하세요. {react}</div>
      {
      /**
       * 주석주석주석
       * 주석주주주주석이다
       */
      }
      <Wrapper>
        <Name name="testing" color="red" />
        <Name />
      </Wrapper>
    </>
  );
}

export default App;
