import repositoryPath from "@/lib/repositoryPath";
import Image from "next/image";
import React from "react";

const PortfolioSection = () => {
	const portfolioImages = [
		"/portfolios/screenshot1.png",
		"/portfolios/screenshot2.png",
	];

	return (
		<div className="container mx-auto mt-24 flex w-full items-center justify-between px-8 md:px-14 lg:px-24">
			<section className="w-full">
				<h2 className="secondary-title">自作ライブラリ</h2>
				<p className="section-paragraph">
					Ruby on rails用のGemを開発しました。
				</p>

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
