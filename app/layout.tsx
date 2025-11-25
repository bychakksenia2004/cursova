import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import TopLeftHome from './components/TopLeftHome';
import TopRightUser from './components/TopRightUser';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* fallback server-side head — забезпечує видимий title якщо per-page head не застосовується */}
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>TestHub</title>
      </head>

      <body className="page-root">
        {/* Додаємо загальну кнопку Home (відображається умовно всередині TopLeftHome) */}
        <TopLeftHome />
        <TopRightUser />
        {children}
      </body>
    </html>
  );
}
