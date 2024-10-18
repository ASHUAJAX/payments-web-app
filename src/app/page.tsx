import AppLayout from "./components/AppLayout";
import HomeComp from "./components/pages/HomeComp";
export const metadata = {
    title: 'Home',
    description: 'This is the home page.',
  };
export default function Home() {
  
  return (
    <>
    <AppLayout component={<HomeComp/>} />
    </>
  );
}
