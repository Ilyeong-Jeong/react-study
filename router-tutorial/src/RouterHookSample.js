// 현재는 Hook을 사용하면 된다. 
import useReactRouter from 'use-react-router';

function RouterHookSample() {
  const { history, location, match } = useReactRouter;
  console.log({ history, location, match });
  return null;
}

export default RouterHookSample;