
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="font-serif text-7xl font-bold mb-4 text-primary">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Страница не найдена</h2>
          <p className="text-muted-foreground mb-8">
            Мы не смогли найти страницу, которую вы искали. Возможно, она была удалена, переименована или не существует.
          </p>
          <Link to="/" className="btn-primary">
            Вернуться на главную
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
