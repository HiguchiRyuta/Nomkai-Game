import React, { useMemo } from "react";
import { routes } from "src/common/routes/routes";
import Card from "src/components/elements/card/Card";
import Grid from "src/components/parts/grid/Grid";

const GAMES = [
  {
    name: "ルーレット",
    thumbnailUrl: "https://placehold.jp/350x200.png",
    key: "roulette",
    description: "Simple is the best!!",
    path: routes.games.makePath({ key: "roulette" }),
  },
  {
    name: "インディアンポーカー",
    thumbnailUrl: "https://placehold.jp/350x200.png",
    key: "indian-poker",
    description:
      "飲み会やパーティーで盛り上がる大人気のゲーム！みんなで仲間内の人狼を見つけ出す推理バトル♪ 鋭い洞察力と巧みな話術が試され、笑いと緊張が交錯します。みんなで盛り上がりながら、仲間との絆も深まること間違いなし！知識や勘だけでなく、友情や信頼も試されるこのゲームで、一体感とワクワク感を体験しましょう！",
    path: routes.games.makePath({ key: "indian-poker" }),
  },
  {
    name: "ワードウルフ",
    thumbnailUrl: "https://placehold.jp/350x200.png",
    key: "word-wolf",
    description:
      "楽しいカードゲーム！参加者たちは、自分のカードを見ずに額に貼り、他のプレイヤーのカードを観察しながら勝利を目指します。相手の表情や仕草から手を読み、賭けに勝つ戦略を練りましょう。",
    path: routes.games.makePath({ key: "word-wolf" }),
  },
  {
    name: "タイム・ストップ",
    thumbnailUrl: "https://placehold.jp/350x200.png",
    key: "time-stop",
    description: "誰が時間ぴったりに止められるのか！",
    path: routes.games.makePath({ key: "time-stop" }),
  },
];
const Home = React.memo(function Home() {
  const cards = useMemo(() => {
    return GAMES.map((game) => (
      <Card
        title={game.name}
        description={game.description}
        thumbnailUrl={game.thumbnailUrl}
        key={game.key}
      />
    ));
  }, []);
  return (
    <div>
      <Grid items={cards} />
    </div>
  );
});

export default Home;
