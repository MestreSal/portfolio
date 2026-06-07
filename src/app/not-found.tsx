import { Button, Typography } from "layout/ui";

function NotFound() {
  return (
    <div className="text-center flex flex-col justify-center h-full gap-xl">
      <div>
        <Typography variant="h1Bold">404</Typography>
        <Typography variant="bodyLg">Página não encontrada</Typography>
      </div>

      <Button href="/">Voltar ao Início</Button>
    </div>
  );
}

export default NotFound;
