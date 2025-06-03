export type NarratorComment = {
  id: string;
  minute: number;
  text: string;
};

export const narratorComments: NarratorComment[] = [
  { id: "c1", minute: 1, text: "A bola rola no Maracanã! Começa o jogo!" },
  { id: "c2", minute: 3, text: "Flamengo pressiona nos primeiros minutos." },
  {
    id: "c3",
    minute: 7,
    text: "Juventude se fecha bem e tenta sair no contra-ataque.",
  },
  { id: "c4", minute: 12, text: "Gerson avança pelo meio e arrisca de longe!" },
  { id: "c5", minute: 20, text: "Primeiro escanteio do jogo para o Flamengo." },
  {
    id: "c6",
    minute: 31,
    text: "O jogo dá uma esfriada. Muitas faltas no meio-campo.",
  },
  {
    id: "c7",
    minute: 45,
    text: "Fim do primeiro tempo. Jogo equilibrado até agora.",
  },
  { id: "c8", minute: 46, text: "Bola rolando para o segundo tempo!" },
  { id: "c9", minute: 55, text: "Gol perdido inacreditável pelo Juventude!" },
  {
    id: "c10",
    minute: 66,
    text: "Cartão amarelo para David Luiz após entrada forte.",
  },
  { id: "c11", minute: 80, text: "Flamengo pressiona em busca do empate!" },
  {
    id: "c12",
    minute: 90,
    text: "Fim de jogo! Vitória sofrida, mas importante!",
  },
];
