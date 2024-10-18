
import AppLayout from "../components/AppLayout";
import PrivacyPolicyComp from "../components/pages/PrivacyPolicyComp";
export const metadata = {
  title: 'Privacy Policy',
  description: 'This is the privacy policy page.',
};
export default function Main(){
  return (
    <>
    <AppLayout component={<PrivacyPolicyComp/>} />
    </>
  );
}
