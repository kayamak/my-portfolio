import React, { useState } from "react";
import { Language } from "@/types";

interface Props {
	language: Language;
}

interface TechRow {
	layer: string;
	tech: string;
	cost: string;
}

interface Project {
	title: string;
	titleEn: string;
	description: string;
	descriptionEn: string;
	url: string;
	emoji: string;
	tags: string[];
	appealJa: string;
	appealEn: string;
	techRows: TechRow[];
	videoUrl?: string;
}

const projects: Project[] = [
	{
		title: "BiasQuest",
		titleEn: "BiasQuest",
		description: "Cloudflare Workers + D1 のエッジ環境上に構築した英文作成学習アプリ。",
		descriptionEn: "An English sentence writing learning app built on Cloudflare Workers + D1 edge environment.",
		url: "https://bias-quest.com/",
		emoji: "🧝‍♀️",
		tags: ["Cloudflare Workers", "Next.js 15", "Prisma WASM", "NextAuth.js", "Vitest"],
		appealJa:
			"運用コスト完全ゼロを実現するため、Cloudflare Workers + D1（SQLite）のエッジ環境上にNext.js（App Router）のフルスタック構成を構築。エッジ特有のI/O制約を Proxy パターンで透過的に解決し、Prisma（WASM対応）+ D1アダプターでORMのエッジ互換を実現しました。Repository / Service / Feature の3層アーキテクチャで保守性を確保し、Vitest による自動テスト（37ファイル）と GitHub Actions CI/CD による品質担保を含め、一人で設計・実装・運用まで完結させています。",
		appealEn:
			"Built a full-stack Next.js (App Router) application on Cloudflare Workers + D1 (SQLite) edge environment to achieve zero operating costs. Transparently resolved edge-specific I/O constraints using the Proxy pattern, and achieved ORM edge compatibility with Prisma (WASM) + D1 adapter. Ensured maintainability with a 3-layer architecture (Repository / Service / Feature), and completed the entire design, implementation, and operation solo, including automated testing with Vitest (37 files) and quality assurance via GitHub Actions CI/CD.",
		techRows: [
			{ layer: "Hosting",          tech: "Cloudflare Workers",                       cost: "¥0 (Free Tier)" },
			{ layer: "Framework",        tech: "Next.js 15 / App Router",                  cost: "¥0" },
			{ layer: "Database",         tech: "Cloudflare D1 (SQLite)",                   cost: "¥0 (Free Tier)" },
			{ layer: "ORM",              tech: "Prisma 6 (WASM / Edge / D1 Adapter)",      cost: "¥0" },
			{ layer: "Authentication",   tech: "NextAuth.js v5 + Google OAuth + JWT",      cost: "¥0" },
			{ layer: "State Management", tech: "—",                                         cost: "¥0" },
			{ layer: "Styling",          tech: "Tailwind CSS",                              cost: "¥0" },
			{ layer: "Animation",        tech: "—",                                         cost: "¥0" },
			{ layer: "Testing",          tech: "Vitest + Testing Library + jsdom",          cost: "¥0" },
			{ layer: "CI/CD",            tech: "GitHub Actions",                            cost: "¥0 (Free Tier)" },
			{ layer: "CDN & DNS",        tech: "Cloudflare",                                cost: "¥0" },
			{ layer: "Total",            tech: "",                                           cost: "¥0 / 月" },
		],
	},
	{
		title: "GRID９ ENGLISH",
		titleEn: "GRID9 ENGLISH",
		description: "ドラゴンクエスト風RPG UIで認知バイアスを学ぶ学習アプリ。GitHub Pages でホスティング。",
		descriptionEn: "An English learning app with a Dragon Quest-style RPG UI to learn cognitive biases. Hosted on GitHub Pages.",
		url: "https://kayamak.github.io/grid9-english/",
		emoji: "🐉",
		tags: ["GitHub Pages", "Next.js 16", "DDD", "Zustand", "Vitest", "Playwright"],
		videoUrl: "https://www.youtube.com/watch?v=GpI5rzSYsjU",
		appealJa:
			"ドラゴンクエスト風 RPG UI の英語学習アプリを、Next.js 16（App Router / Static Export）＋ Prisma（libSQL アダプター）＋ DDD（Entity / Value Object / Specification / Repository）で設計・実装。Zustand による状態管理とカスタムフック群でゲームループを構築し、Vitest（49 ファイル）＋ Playwright E2E（4 ファイル）による自動テストと GitHub Actions CI/CD で品質を担保しています。一人で設計・実装・運用まで完結させました。",
		appealEn:
			"Designed and implemented a Dragon Quest-style RPG UI English learning app using Next.js 16 (App Router / Static Export) + Prisma (libSQL adapter) + DDD (Entity / Value Object / Specification / Repository). Built the game loop with Zustand state management and custom hooks, and ensured quality with automated testing via Vitest (49 files) + Playwright E2E (4 files) and GitHub Actions CI/CD. Completed the entire design, implementation, and operation solo.",
		techRows: [
			{ layer: "Hosting",          tech: "GitHub Pages (Static Export)",              cost: "¥0 (Free)" },
			{ layer: "Framework",        tech: "Next.js 16 / App Router / Static Export",   cost: "¥0" },
			{ layer: "Database",         tech: "SQLite (libSQL)",                            cost: "¥0" },
			{ layer: "ORM",              tech: "Prisma 6 (Driver Adapters / libSQL)",        cost: "¥0" },
			{ layer: "Authentication",   tech: "—",                                          cost: "¥0" },
			{ layer: "State Management", tech: "Zustand 5",                                  cost: "¥0" },
			{ layer: "Styling",          tech: "Tailwind CSS 4",                             cost: "¥0" },
			{ layer: "Animation",        tech: "Framer Motion 12",                           cost: "¥0" },
			{ layer: "Testing",          tech: "Vitest 4 + Testing Library + Playwright",    cost: "¥0" },
			{ layer: "CI/CD",            tech: "GitHub Actions",                             cost: "¥0 (Free Tier)" },
			{ layer: "Total",            tech: "",                                            cost: "¥0 / 月" },
		],
	},
	{
		title: "Balloon Chat",
		titleEn: "Balloon Chat",
		description: "Cloudflare Workers + Durable Objects によるリアルタイムWebSocketチャットアプリ。コミック風UIとAI返信機能を搭載。",
		descriptionEn: "A real-time WebSocket chat app powered by Cloudflare Workers + Durable Objects, featuring comic-style UI and AI reply functionality.",
		url: "https://balloon-chat.kayamak.workers.dev/",
		emoji: "💬",
		tags: ["Cloudflare Workers", "Durable Objects", "Next.js 16", "WebSocket", "NextAuth.js", "Drizzle ORM", "Vitest", "Playwright"],
		appealJa:
			"Cloudflare Workers + Durable Objects でルームごとのWebSocketセッション管理を実現したリアルタイムチャットアプリ。Next.js 16（App Router）+ Drizzle ORM + D1 のフルスタック構成で、NextAuth.js v5（Google OAuth / JWT）による認証を実装。17種のアバター × 9種の感情表現によるコミック風吹き出しUI、AI（ロボット）による文脈を読んだ自動返信機能、レート制限・自動再接続などのリアルタイム通信制御を含め、一人で設計・実装・運用まで完結させています。",
		appealEn:
			"A real-time chat application with per-room WebSocket session management via Cloudflare Workers + Durable Objects. Built with a full-stack Next.js 16 (App Router) + Drizzle ORM + D1 architecture, featuring NextAuth.js v5 (Google OAuth / JWT) authentication. Includes comic-style speech bubble UI with 17 avatars × 9 emotion states, context-aware AI auto-reply, rate limiting, and automatic reconnection. Completed the entire design, implementation, and operation solo.",
		techRows: [
			{ layer: "Hosting",          tech: "Cloudflare Workers",                          cost: "¥0 (Free Tier)" },
			{ layer: "Framework",        tech: "Next.js 16 / App Router",                    cost: "¥0" },
			{ layer: "WebSocket",        tech: "Cloudflare Durable Objects",                  cost: "¥0 (Free Tier)" },
			{ layer: "Database",         tech: "Cloudflare D1 (SQLite)",                      cost: "¥0 (Free Tier)" },
			{ layer: "ORM",              tech: "Drizzle ORM",                                 cost: "¥0" },
			{ layer: "Authentication",   tech: "NextAuth.js v5 + Google OAuth + JWT",         cost: "¥0" },
			{ layer: "Styling",          tech: "Tailwind CSS 4 + shadcn/ui",                  cost: "¥0" },
			{ layer: "Testing",          tech: "Vitest + Playwright E2E",                     cost: "¥0" },
			{ layer: "CI/CD",            tech: "GitHub Actions",                              cost: "¥0 (Free Tier)" },
			{ layer: "Total",            tech: "",                                             cost: "¥0 / 月" },
		],
	},
];

const TechTable: React.FC<{ rows: TechRow[]; language: Language }> = ({ rows, language }) => {
	const headers =
		language === "ja"
			? ["レイヤー", "使用技術", "運用コスト"]
			: ["Layer", "Technology", "Cost"];

	return (
		<div className="mt-4 overflow-x-auto rounded-lg border border-purple-800/50">
			<table className="w-full text-sm">
				<thead>
					<tr className="border-b border-purple-800/50 bg-purple-900/30">
						{headers.map((h, i) => (
							<th
								key={i}
								className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider text-purple-300"
							>
								{h}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((row, i) => {
						const isTotal = row.layer === "Total";
						return (
							<tr
								key={i}
								className={`border-b border-purple-900/30 transition-colors ${
									isTotal
										? "bg-yellow-900/20 font-bold"
										: "hover:bg-purple-900/20"
								}`}
							>
								<td className={`px-4 py-2 ${isTotal ? "text-yellow-400" : "text-purple-200"} whitespace-nowrap font-medium`}>
									{row.layer}
								</td>
								<td className={`px-4 py-2 ${isTotal ? "text-yellow-400" : "text-gray-300"}`}>
									{row.tech}
								</td>
								<td className={`whitespace-nowrap px-4 py-2 ${isTotal ? "font-bold text-yellow-400" : "text-green-400"}`}>
									{row.cost}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

const ProjectCard: React.FC<{ project: Project; language: Language }> = ({ project, language }) => {
	const [open, setOpen] = useState(false);

	const visitLabel = language === "ja" ? "サイトを見る " : "Visit Site →";
	const techLabel = language === "ja" ? "技術アピール" : "Tech Highlights";
	const tableLabel = language === "ja" ? "システム構成と運用コスト" : "System Stack & Running Cost";
	const collapseLabel = language === "ja" ? "閉じる ▲" : "Collapse ▲";
	const expandLabel = language === "ja" ? "技術詳細を見る ▼" : "Show Tech Details ▼";

	return (
		<div className="rounded-xl border border-purple-900 bg-gradient-to-br from-purple-950/40 to-indigo-950/40 transition-all duration-300 hover:border-yellow-400/60 hover:shadow-lg hover:shadow-yellow-400/10">
			{/* Card Header */}
			<div className="p-6">
				<div className="mb-4 flex items-center gap-3">
					<span className="text-4xl">{project.emoji}</span>
					<h3 className="text-xl font-bold text-white">
						{language === "ja" ? project.title : project.titleEn}
					</h3>
				</div>
				<p className="mb-4 text-sm leading-relaxed text-gray-400">
					{language === "ja" ? project.description : project.descriptionEn}
				</p>
				<div className="mb-5 flex flex-wrap gap-2">
					{project.tags.map((tag, i) => (
						<span
							key={i}
							className="rounded-full border border-purple-700 bg-purple-900/40 px-3 py-1 text-xs text-purple-300"
						>
							{tag}
						</span>
					))}
				</div>
				<div className="flex flex-wrap items-center gap-4">
					<a
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						className="text-sm font-semibold text-yellow-500 transition-colors duration-300 hover:text-yellow-300"
					>
						{visitLabel}
					</a>
					<button
						onClick={() => setOpen((v) => !v)}
						className="rounded-lg border border-purple-700 bg-purple-900/30 px-4 py-1.5 text-xs font-medium text-purple-300 transition-all duration-300 hover:border-yellow-500 hover:text-yellow-400"
					>
						{open ? collapseLabel : expandLabel}
					</button>
				</div>
			</div>

			{/* Expandable Detail */}
			{open && (
				<div className="border-t border-purple-800/50 px-6 pb-6 pt-4">
					{project.videoUrl && (
						<>
							<h4 className="mb-2 text-sm font-bold text-yellow-400">
								▍{language === "ja" ? "デモ動画" : "Demo Video"}
							</h4>
							<div className="relative mb-6 aspect-video w-full overflow-hidden rounded-lg">
								<iframe
									src={project.videoUrl.replace("watch?v=", "embed/")}
									title={`${language === "ja" ? project.title : project.titleEn} demo`}
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									className="absolute inset-0 h-full w-full"
								/>
							</div>
						</>
					)}
					<h4 className="mb-2 text-sm font-bold text-yellow-400">
						▍{techLabel}
					</h4>
					<p className="mb-6 text-sm leading-relaxed text-gray-300">
						{language === "ja" ? project.appealJa : project.appealEn}
					</p>
					<h4 className="mb-2 text-sm font-bold text-yellow-400">
						▍{tableLabel}
					</h4>
					<TechTable rows={project.techRows} language={language} />
				</div>
			)}
		</div>
	);
};

const PersonalSection: React.FC<Props> = ({ language }) => {
	const sectionTitle = language === "ja" ? "個人開発" : "Personal Projects";
	const sectionParagraph =
		language === "ja"
			? "趣味や学習を兼ねて開発した個人プロジェクトです。"
			: "Personal projects I built for fun and learning.";

	return (
		<div className="container mx-auto mt-24 flex w-full items-center justify-between px-8 md:px-14 lg:px-24">
			<section className="w-full">
				<h2 className="secondary-title">{sectionTitle}</h2>
				<p className="section-paragraph">{sectionParagraph}</p>

				<div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
					{projects.map((project, index) => (
						<ProjectCard key={index} project={project} language={language} />
					))}
				</div>
			</section>
		</div>
	);
};

export default PersonalSection;
