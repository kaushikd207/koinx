import Chart from "./components/Chart";
import Like from "./components/Like";
import Header from "./Layout/Header";
import MainLayout from "./Layout/MainLayout";

function App() {
  return (
    <div className="bg-[#DEDFE2]">
      <Header />
      <Chart />
      <MainLayout />
      <Like />
    </div>
  );
}

export default App;
