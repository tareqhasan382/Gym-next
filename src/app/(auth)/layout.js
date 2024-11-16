import Providers from "@/providers/Providers";
import "../globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Authentication",
  description: "Gym management Systeam",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} `}>
        {/* <AuthProvider> */}
        <Providers>
          <div>
            {/* <ToastContainer /> */}
            {/* <Navbar /> */}
            {children}
          </div>
        </Providers>
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}
