
import AppLayout from "../components/AppLayout";
import ContactComp from "../components/pages/ContactComp";
export const metadata = {
  title: 'Contact',
  description: 'This is the contact page.',
};
export default function Contact(){
  return (
    <>
    <AppLayout component={<ContactComp/>} />
    </>
  );
}
