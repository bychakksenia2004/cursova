import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import TopLeftHome from './components/TopLeftHome';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="page-root">
        {/* Додаємо загальну кнопку Home (відображається умовно всередині TopLeftHome) */}
        <TopLeftHome />
        {children}
      </body>
    </html>
  );
}
