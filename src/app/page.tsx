import AppLayout from "./components/AppLayout";
import HomeComp from "./components/pages/HomeComp";
export default function Home() {
  return (
    <>
    <AppLayout component={<HomeComp/>} />
    </>
  );
}
