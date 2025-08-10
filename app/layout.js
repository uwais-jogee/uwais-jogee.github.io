import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider"
import LenisProvider from "@/components/lenis-provider";
import {Navbar} from "@/components/layout/navbar";
import {GridBackground} from "@/components/layout/grid-background";
import {TooltipProvider} from "@/components/ui/tooltip";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Uwais Jogee",
    description: "",
};

export default function RootLayout({children}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`relative ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <LenisProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <TooltipProvider>
                    <Navbar/>
                    <GridBackground/>
                    {children}
                </TooltipProvider>
            </ThemeProvider>
        </LenisProvider>
        </body>
        </html>
    );
}
