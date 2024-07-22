import { Link } from "react-router-dom";

export default function ArticleList({ articles }) {
  return (
    <>
      {articles.map((article) => (
        <Link
          key={article.articleId}
          className="article-list-item"
          to={`/articles/${article.articleId}`}
        >
          <h3>{article.title}</h3>
          <p>{article.content[0].substring(0, 150)}...</p>
        </Link>
      ))}
    </>
  );
}
