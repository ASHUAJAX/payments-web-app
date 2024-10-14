import AppLayout from "./components/AppLayout";
import HomeComp from "./components/pages/HomeComp";
import "./page.scss";
export default function Contact(){
  return (
    <>
    <AppLayout component={<HomeComp/>} />
    </>
  );
}
