import AdminSidebar from "@/components/dashboard/AdminSidebar";
import "../globals.css";
import { Jost } from "next/font/google";
import Providers from "@/providers/Providers";

const jost = Jost({ subsets: ["latin"] });
export const metadata = {
  title: "Trainer",
  description: "Trainer Page",
};
export default function TrainerLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${jost.variable} `}>
        <Providers>
          <div className="w-full flex  overflow-hidden ">
            <div className="  ">
              <AdminSidebar />
            </div>
            <div className="ml-[100px] p-4 w-full  ">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
