import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider"
import LenisProvider from "@/components/lenis-provider";
import {Navbar} from "@/components/layout/navbar";
import {GridBackground} from "@/components/layout/grid-background";
import "devicon/devicon.min.css";

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
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Navbar/>
            <LenisProvider>
                <GridBackground/>
                {children}
            </LenisProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
