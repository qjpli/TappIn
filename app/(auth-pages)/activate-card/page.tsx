import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SmtpMessage } from "../smtp-message";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-center w-screen py-12">
        <form className="flex flex-col w-full max-w-xs">
          <h1 className="text-2xl font-medium mb-2">Activate Your Card</h1>
          <p className="text-sm text-foreground mb-4">
            Only users with a valid TappIn card can create an account.
            <br />
            Enter your card's UUID and activation code to get started.
          </p>
          <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
            <Label htmlFor="cardUuid">Card UUID</Label>
            <Input
              name="cardUuid"
              placeholder="Enter your card's UUID"
              required
            />
            <Label htmlFor="activationCode">Activation Code</Label>
            <Input
              name="activationCode"
              placeholder="Enter your card's activation code"
              required
            />
            <Label htmlFor="email">Email</Label>
            <Input name="email" placeholder="you@example.com" required />
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Your password"
              minLength={6}
              required
            />
            <SubmitButton formAction={signUpAction} pendingText="Activating...">
              Activate Card
            </SubmitButton>
            <FormMessage message={searchParams} />
          </div>
        </form>
      </div>
      {/* <SmtpMessage /> */}
    </>
  );
}
