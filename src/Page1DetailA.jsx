import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation();
  const { state } = location;
  const history = useHistory();
  const onClickBack = () => history.goBack();
  return (
    <div>
      <h1>Page1DetailAページです。</h1>
      {state}
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
