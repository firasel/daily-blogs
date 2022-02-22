import Header from "../components/Header/Header";
import HomeLayout from "../layouts/HomeLayout";

const Home = () => {
  return (
    <div className="modifyContainer">
      <Header />
    </div>
  );
};

Home.Layout = HomeLayout;

export default Home;
