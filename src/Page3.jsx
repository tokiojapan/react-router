import { Link } from "react-router-dom";

export const Page3 = () => {
  return (
    <div>
      <h1>Page3ページです。</h1>
      <Link to="/page3/999">URL Parameter</Link>
      <br />
      <Link to="/page3/999?name=hogehoge">Query Parameter</Link>
    </div>
  );
};
