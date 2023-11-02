import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignIn
      appearance={{
        elements: {
          formButtonPrimary: "bg-sky-700 hover:bg-sky-600 text-sm normal-case",
        },
      }}
    />
  );
}
