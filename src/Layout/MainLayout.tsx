import Performance from "../components/Performance";
import Tab from "../components/Tab";
import div1 from "../assets/div1.png";
import div2 from "../assets/div2.png";
import div3 from "../assets/div3.png";
import div4 from "../assets/div4.png";
function MainLayout() {
  return (
    <>
      <div className="w-[881px] ml-24">
        <Tab />
        <Performance />
        <img className="w-[100%] mt-7" src={div1} alt="" />
        <img className="w-[100%] mt-7" src={div2} alt="" />
        <img className="w-[100%]" src={div3} alt="" />
        <img className="w-[100%]" src={div4} alt="" />
      </div>
    </>
  );
}

export default MainLayout;
