import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import React from "react";
import "./globals.css";
import Head from "next/head";

const Pippin700 = Poppins({
	weight: "700",
	preload: false,
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<Head>
				<title>ポートフォリオサイト</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<body className={Pippin700.className}>{children}</body>
		</html>
	);
}
