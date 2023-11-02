import { RedirectToSignIn } from "@clerk/nextjs";

export default function LandingPage() {
  return (
    <>
      <RedirectToSignIn />
    </>
  );
}
