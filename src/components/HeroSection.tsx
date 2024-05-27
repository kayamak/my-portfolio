import repositoryPath from "@/lib/repositoryPath";
import "@/lib/fontAwesome";
import type { Section } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Language } from "@/types";

interface Props {
	setSection: (section: Section) => void;
	language: Language;
}

const HeroSection: React.FC<Props> = ({ setSection, language }) => {
	return (
		<div className="container relative z-10 mx-auto mt-20 flex w-full items-center justify-between px-8 md:px-14 lg:px-24">
			{/* ↑ backgroundImageを表示させる為にz-10にしてrelativeクラスを追加 */}
			<div className="flex flex-wrap md:flex-nowrap">
				<div className="flex max-w-xl flex-wrap justify-center md:my-36 md:justify-start lg:ml-20">
					<h1 className="text-center text-5xl font-bold text-white md:text-left md:text-6xl lg:text-7xl">
						{language === 'ja' ? "SaaSビジネスで世界を目指す" : "Going Global with SaaS Business"}
					</h1>
					<button
						className="mt-10 rounded-lg bg-theme px-6 py-4 font-bold transition-all duration-300 hover:bg-yellow-600"
						onClick={() => setSection("skill")}
					>
						<FontAwesomeIcon icon="rocket" className="mr-1" />
						{language === 'ja' ? "もっと見る" : "See more"}
					</button>
				</div>
				<div
					className="right-6 -z-10 mx-auto mt-12 w-10/12 bg-cover bg-no-repeat md:absolute md:mt-0 md:w-3/5 lg:right-52 lg:top-2 lg:w-3/6"
					style={{
						backgroundImage: `url(${repositoryPath}/images/mypicture.png)`,
						width: "420px",
						height: "529px",
					}}
				></div>
			</div>
		</div>
	);
};

export default HeroSection;
