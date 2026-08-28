import "./globals.css";

export const metadata = {
  title: "桜森 Sakuramori — 日本ブランドのモンゴル正規販売パートナー",
  description: "日本ブランドのモンゴル市場における輸入・通関・保管・卸売・小売を一貫して担う正規販売パートナー。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
