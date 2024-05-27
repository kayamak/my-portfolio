"use client";

import EngineerSection from "@/components/EngineerSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import type { Section } from "@/types";
import React, { useState } from "react";
import { Language } from "@/types";

export default function Home() {
	const [section, setSection] = useState<Section>("home");
	const [language, setLanguage] = useState<Language>('ja');
	

	return (
		<div className="bg-body font-poppins">
			<Header setSection={setSection} currentSection={section} setLanguage={setLanguage} language={language} />
			<main className="flex flex-col items-center">
				<div className="w-full max-w-6xl">
					{section === "home" && <HeroSection setSection={setSection} language={language} />}
					{section === "skill" && <EngineerSection setSection={setSection} language={language} />}
					{section === "portfolio" && <PortfolioSection language={language} />}
				</div>
			</main>
			<Footer language={language} />
		</div>
	);
}
