import repositoryPath from "@/lib/repositoryPath";
import Image from "next/image";
import React from "react";
import { Language } from "@/types";

interface Props {
	language: Language;
}

const PortfolioSection: React.FC<Props> = ({ language }) => {
	const portfolioImages = [
		"/portfolios/screenshot1.png",
		"/portfolios/screenshot2.png",
	];

	const sectionTitle = language === "ja" ? "自作ライブラリ" : "My Libraries";
	const sectionParagraph = language === "ja" 
		? "Ruby on Rails用のGemを開発しました。" 
		: "I developed a Gem for Ruby on Rails.";

	return (
		<div className="container mx-auto mt-24 flex w-full items-center justify-between px-8 md:px-14 lg:px-24">
			<section className="w-full">
				<h2 className="secondary-title">{sectionTitle}</h2>
				<p className="section-paragraph">{sectionParagraph}</p>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-1">
					{portfolioImages.map((src, index) => (
						<div
							key={index}
							className="cursor-pointer rounded-md border border-purple-900 transition-all duration-300 hover:border-yellow-300"
						>
							<Image
								src={`${repositoryPath}${src}`}
								alt={`portfolio ${index + 1}`}
								className="w-full cursor-pointer rounded-md object-cover"
								width={800}
								height={600}
							/>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default PortfolioSection;
