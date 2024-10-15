
import AppLayout from "../components/AppLayout";
import PrivacyPolicyComp from "../components/pages/PrivacyPolicyComp";

export default function Main(){
  return (
    <>
    <AppLayout component={<PrivacyPolicyComp/>} />
    </>
  );
}
