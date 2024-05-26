"use client";

import EngineerSection from "@/components/EngineerSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import type { Section } from "@/types";
import React, { useState } from "react";

export default function Home() {
	const [section, setSection] = useState<Section>("home");

	return (
		<div className="bg-body font-poppins">
			<Header setSection={setSection} currentSection={section} />
			<main className="flex flex-col items-center">
				<div className="w-full max-w-6xl">
					{section === "home" && <HeroSection setSection={setSection} />}
					{section === "skill" && <EngineerSection setSection={setSection} />}
					{section === "portfolio" && <PortfolioSection />}
				</div>
			</main>
			<Footer />
		</div>
	);
}
