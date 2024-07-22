import { useParams } from "react-router-dom";
import articles from "../article-content";
import NotFoundPage from "../NotFoundPage";

export default function Article() {
  const { articleId } = useParams();
  const article = articles.find((article) => article.articleId === articleId);

  if (!article) return <NotFoundPage />;

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, indx) => (
        <p key={"par_" + indx}>{paragraph}</p>
      ))}
    </>
  );
}
