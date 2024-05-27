import "@/lib/fontAwesome";
import type { Section } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SkillIconBadge from "./SkillIconBadge";
import { Language } from "@/types";

export interface Engineer {
	engineerName: {
		ja: string;
		en: string;
	};
	years: number;
	span: [number, number];
	icon: "RubyIcon" | "JavaIcon" | "EmbeddedIcon";
	badges: string[];
	description: {
		ja: string;
		en: string;
	};
}

const engineers: Engineer[] = [
	{
		engineerName: {
			ja: "Web系エンジニア",
			en: "Web Engineer"
		},
		years: 10,
		span: [2014, 2024],
		icon: "RubyIcon",
		badges: [
			"Ruby",
			"Ruby on Rails",
			"RSpec",
			"TypeScript",
			"React",
			"Docker",
			"MySQL",
			"PostgreSQL",
			"RSpec",
			"Cucumber",
			"PHP",
			"Symphony2",
		],
		description: {
			ja: "Ruby on Railsを中心に、迅速な改善策の提案が得意です。最近ではフロントエンドにも力を入れて世界を見ざしています。",
			en: "Specializes in quick proposals for improvements, focusing on Ruby on Rails. Recently also diving into front-end development to expand horizons."
		}
	},
	{
		engineerName: {
			ja: "システムエンジニア",
			en: "System Engineer"
		},
		years: 12,
		span: [2002, 2014],
		icon: "JavaIcon",
		badges: [
			"Java",
			"Spring",
			"JavaScript",
			"Spring boot",
			"Struts",
			"Oracle",
			"DB2",
			"PL/SQL",
			"JQuery",
			"Excel VBA",
			"Python",
			"PMP",
		],
		description: {
			ja: "Javaを中心とした大型案件の設計や開発に加え、プロジェクト管理の経験を積むことでPMPの資格を取得し、プロジェクト管理の視野が広がりました。",
			en: "Gained experience in designing and developing large projects centered on Java, and acquired PMP certification, broadening project management perspectives."
		}
	},
	{
		engineerName: {
			ja: "組込エンジニア",
			en: "Embedded Engineer"
		},
		years: 8,
		span: [1994, 2002],
		icon: "EmbeddedIcon",
		badges: ["C言語", "アセンブラ", "AWK"],
		description: {
			ja: "家電やカーオーディオのマイコンが開発対象で、独自OSも作成していました。また、AWKを使ったアセンブラ間の変換ツールも開発していました。",
			en: "Focused on microcontroller development for home appliances and car audio, creating custom OS. Also developed conversion tools between assemblers using AWK."
		}
	},
];

interface Props {
	setSection: (section: Section) => void;
	language: Language;
}

const EngineerSection: React.FC<Props> = ({ setSection, language }) => {
	const sectionTitle = language === "ja" ? "ITエンジニア歴" : "IT Engineer History";
	const sectionParagraph = language === "ja" 
		? "私はWeb系エンジニアを10年、システムエンジニアを12年、組込エンジニアを8年経験しています。フリーランス歴は5年、正社員歴は25年です。" 
		: "I have 10 years of experience as a Web engineer, 12 years as a system engineer, and 8 years as an embedded engineer. I have 5 years of freelancing experience and 25 years as a full-time employee.";
	const buttonText = language === "ja" ? "もっと見る" : "See More";

	return (
		<>
			<div className="container mx-auto mt-24 flex w-full items-center justify-between px-8 md:px-14 lg:px-24">
				<section className="w-full">
					<h2 className="secondary-title">{sectionTitle}</h2>
					<p className="section-paragraph">{sectionParagraph}</p>
					{engineers.map((engineer, index) => (
						<div key={index} className="my-16">
							<div className="flex w-full cursor-pointer flex-wrap justify-center rounded-md border border-purple-900 p-4 transition-all duration-300 hover:border-yellow-300 md:p-16 lg:justify-start lg:space-x-32 lg:px-32 lg:py-20">
								<div className="flex flex-wrap justify-center text-center lg:block lg:text-left">
									<h3 className="text-3xl font-semibold text-gray-300">
										{language === "ja" ? engineer.engineerName.ja : engineer.engineerName.en}
									</h3>
									<div className="mt-1 text-xl font-semibold text-gray-500">
										({engineer.span[0]}〜{engineer.span[1]} {engineer.years}年)
									</div>
									{/* スキル用アイコンとバッジ */}
									<div className="flex flex-wrap justify-center lg:justify-start">
										<SkillIconBadge engineer={engineer} />
									</div>
									<p className="mt-4 text-secondary">
										{language === "ja" ? engineer.description.ja : engineer.description.en}
									</p>
								</div>
							</div>
						</div>
					))}
					<button
						className="rounded-lg bg-theme px-6 py-4 font-bold transition-all duration-300 hover:bg-yellow-600"
						onClick={() => setSection("portfolio")}
					>
						<FontAwesomeIcon icon="rocket" className="mr-1" />
						{buttonText}
					</button>
				</section>
			</div>
		</>
	);
};

export default EngineerSection;
