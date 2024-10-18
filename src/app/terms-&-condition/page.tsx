
import AppLayout from "../components/AppLayout";
import TermsAndCondition from "../components/pages/TermsAndCondition";
export const metadata = {
  title: 'Terms & Condition',
  description: 'This is the terms & condition page.',
};
export default function Main(){
  
  return (
    <>
    <AppLayout component={<TermsAndCondition/>} />
    </>
  );
}
