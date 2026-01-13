import { CarouselGames } from "@/components/layout/CarouselGames";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GiBookshelf } from "react-icons/gi";
import { VscGraph } from "react-icons/vsc";
import { BiSolidJoystickAlt } from "react-icons/bi";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-background to-muted">
      <div className="flex flex-col items-center justify-center gap-24">
        <div className="flex flex-col items-center justify gap-3">
          <h1>Welcome to the Games Backlog</h1>
          <p>Track and manage your games efficiently.</p>
        </div>
        <div className="flex items-center justify-center">
          <CarouselGames />
        </div>

        <div className="flex flex-col md:grid-cols-3 gap-6  w-full max-w-7xl">
          <Card className="flex flex-col items-start p-4">
            <CardHeader className="w-full">
              <CardTitle className="flex text-xl font-bold items-center gap-2">
                <GiBookshelf /> Organize
              </CardTitle>
              <CardDescription>
                Mantenha todos os seus jogos organizados por status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Backlog, Jogando, Finalizado ou Dropado - você decide
              </p>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-start p-4">
            <CardHeader className="w-full">
              <CardTitle className="flex text-xl font-bold items-center gap-2">
                <VscGraph /> Acompanhe
              </CardTitle>
              <CardDescription>
                Veja suas estatísticas e progresso
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Horas jogadas, jogos finalizados e muito mais
              </p>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-start p-4">
            <CardHeader className="w-full">
              <CardTitle className="flex text-xl font-bold items-center gap-2">
                {" "}
                <BiSolidJoystickAlt />
                Descubra
              </CardTitle>
              <CardDescription>Receba sugestões do que jogar</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Baseado no seu gosto e tempo disponível
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
