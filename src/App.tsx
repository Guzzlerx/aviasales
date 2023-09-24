import styles from "./App.module.scss";
import TicketsListPage from "./routes/TicketsListPage/TicketsListPage";

const App = () => {
  return (
    <div className={styles.container}>
      <TicketsListPage />
    </div>
  );
};

export default App;
