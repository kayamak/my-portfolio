import "@/lib/fontAwesome";
import type { Section } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SkillIconBadge from "./SkillIconBadge";

export interface Engineer {
	engineerName: string;
	years: number;
	span: [number, number];
	icon: "RubyIcon" | "JavaIcon" | "EmbeddedIcon";
	badges: string[];
	description: string;
}

const engineers: Engineer[] = [
	{
		engineerName: "Web系エンジニア",
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
		description:
			"Ruby on Railsを中心に、迅速な改善策の提案が得意です。最近ではフロントエンドにも力を入れて世界を見ざしています。",
	},
	{
		engineerName: "システムエンジニア",
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
		description:
			"Javaを中心とした大型案件の設計や開発に加え、プロジェクト管理の経験を積むことでPMPの資格を取得し、プロジェクト管理の視野が広がりました。",
	},
	{
		engineerName: "組込エンジニア",
		years: 8,
		span: [1994, 2002],
		icon: "EmbeddedIcon",
		badges: ["C言語", "アセンブラ", "AWK"],
		description:
			"家電やカーオーディオのマイコンが開発対象で、独自OSも作成していました。また、AWKを使ったアセンブラ間の変換ツールも開発していました。",
	},
];

interface Props {
	setSection: (section: Section) => void;
}

const EngineerSection: React.FC<Props> = ({ setSection }) => {
	return (
		<>
			<div className="container mx-auto mt-24 flex w-full items-center justify-between px-8 md:px-14 lg:px-24">
				<section className="w-full">
					<h2 className="secondary-title">ITエンジニア歴</h2>
					<p className="section-paragraph">
						私はWeb系エンジニアを10年、システムエンジニアを12年、組込エンジニアを8年経験しています。フリーランス歴は5年、正社員歴は25年です。
					</p>
					{engineers.map((engineer, index) => (
						<div key={index} className="my-16">
							<div className="flex w-full cursor-pointer flex-wrap justify-center rounded-md border border-purple-900 p-4 transition-all duration-300 hover:border-yellow-300 md:p-16 lg:justify-start lg:space-x-32 lg:px-32 lg:py-20">
								<div className="flex flex-wrap justify-center text-center lg:block lg:text-left">
									<h3 className="text-3xl font-semibold text-gray-300">
										{engineer.engineerName}
									</h3>
									<div className="mt-1 text-xl font-semibold text-gray-500">
										({engineer.span[0]}〜{engineer.span[1]} {engineer.years}年)
									</div>
									{/* スキル用アイコンとバッジ */}
									<div className="flex flex-wrap justify-center lg:justify-start">
										<SkillIconBadge engineer={engineer} />
									</div>
									<p className="mt-4 text-secondary">{engineer.description}</p>
								</div>
							</div>
						</div>
					))}
					<button
						className="rounded-lg bg-theme px-6 py-4 font-bold transition-all duration-300 hover:bg-yellow-600"
						onClick={() => setSection("portfolio")}
					>
						<FontAwesomeIcon icon="rocket" className="mr-1" />
						もっと見る
					</button>
				</section>
			</div>
		</>
	);
};

export default EngineerSection;
