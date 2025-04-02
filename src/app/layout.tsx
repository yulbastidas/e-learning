"use client";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/navbar";
import "./globals.css"; 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
        <AuthProvider>
          <Navbar />
          <main className="p-6 flex-grow container mx-auto">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
