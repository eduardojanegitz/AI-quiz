import SignInButton from "@/components/SignInButton";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getAuthSession();
  if (session?.user) {
    return redirect("/dashboard");
  }
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Bem-vindo ao AIQUIZ</CardTitle>
          <CardDescription>
            AIQUIZ é uma plataforma divertida que permite você criar quizzes com
            inteligência artificial e compartilhar com seus amigos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text="Faça login com o Google" />
        </CardContent>
      </Card>
    </div>
  );
}
