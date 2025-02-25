import ReduxProvider from "@/lib/store/Provider";
import ThemeProvider from "@/lib/theme/ThemeProvider";
import QueryProvider from "@/lib/query/QueryProvider";
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <QueryProvider>
            <ThemeProvider>
              <div id="__next">{children}</div>
            </ThemeProvider>
          </QueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
