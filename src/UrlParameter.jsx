import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  /* searchには '?name=hogehoge' という文字列が格納される */
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>UrlParameterページです。</h1>
      <p>URLパラメータは{id}です。</p>
      <p>クエリパラメータは{query.get("name")}です。</p>
    </div>
  );
};
