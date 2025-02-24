import ReduxProvider from "@/app/lib/store/Provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider> {/* Redux is now available everywhere! */}
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
