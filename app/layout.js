import { Montserrat } from "next/font/google";
import PlausibleProvider from "next-plausible";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";

// Configurar Montserrat de Google Fonts
const montserrat = Montserrat({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-montserrat",
});

export const viewport = {
	// Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
	themeColor: config.colors.main,
	width: "device-width",
	initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = {
	...getSEOTags(),
	title: "MoldPro - Excelencia en Maquinados Industriales",
	description: "Servicios de maquinado CNC, fresado, torneado y tratamiento térmico de alta precisión",
	icons: {
		icon: "/images/moldpro/pro.ico",
	},
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="es"
			data-theme={config.colors.theme}
			className={`${montserrat.variable}`}>
			{config.domainName && (
				<head>
					<PlausibleProvider domain={config.domainName} />
				</head>
			)}
			<body>
				{/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	);
}
