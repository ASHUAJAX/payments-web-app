
import AppLayout from "../components/AppLayout";
import RefundPolicy from "../components/pages/RefundPolicy";
export const metadata = {
  title: 'Refund Policy',
  description: 'This is the refund policy page.',
};
export default function Main(){
  
  return (
    <>
    <AppLayout component={<RefundPolicy/>} />
    </>
  );
}
