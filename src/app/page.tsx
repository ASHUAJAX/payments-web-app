import AppLayout from "./components/AppLayout";
import HomeComp from "./components/HomeComp";
import "./page.scss";
export default function Home() {
  return (
    <>
    <AppLayout component={<HomeComp/>} />
    </>
  );
}
