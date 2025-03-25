import "./styles.css";
import { AppLink } from "../../shared/AppLink/AppLink";

function MainPage() {
  return (
    <>
      <h1>
        He совсем понял, как это должно выглядеть. Поэтому сделал 2 версии
      </h1>
      <div className="links">
        <AppLink to={`/var1`}>Вариант 1 (разбито по страницам)</AppLink>
        <AppLink to={`/var2`}>Вариант 2 (всё на одной странице)</AppLink>
      </div>
    </>
  );
}

export default MainPage;
