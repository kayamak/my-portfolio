"use client";
import type { Section } from "@/types";
import React, { useState } from "react";
import DesktopMenu from "./header/DesktopMenu";
import HamburgerMenuButton from "./header/HamburgerMenuButton";
import LogoLink from "./header/LogoLink";
import MobileMenu from "./header/MobileMenu";

interface Props {
	setSection: (section: Section) => void;
	currentSection: string;
}

const Header: React.FC<Props> = ({ setSection, currentSection }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleClick = (
		event: React.MouseEvent<HTMLAnchorElement>,
		section: Section,
	) => {
		event.preventDefault();
		setSection(section);
		setIsMenuOpen(false);
	};

	const linkClass = (section: string) => {
		return section === currentSection
			? "text-yellow-600 transition-all duration-300"
			: "text-white hover:text-selected-text transition-all duration-300";
	};

	const menuItems = [
		{ section: "home", label: "ホーム" },
		{ section: "skill", label: "ITエンジニア歴" },
		{ section: "portfolio", label: "自作ライブラリ" },
		{ section: "contact", label: "お問い合わせ" },
	];

	return (
		<header className="fixed top-0 z-50 w-full bg-body p-4">
			<div className="container mx-auto flex w-full items-center justify-between px-8 md:px-14 lg:px-24">
				<LogoLink handleClick={handleClick} linkClass={linkClass} />
				<DesktopMenu
					handleClick={handleClick}
					linkClass={linkClass}
					menuItems={menuItems}
				/>
				<HamburgerMenuButton
					isMenuOpen={isMenuOpen}
					setIsMenuOpen={setIsMenuOpen}
				/>
			</div>
			{isMenuOpen && (
				<MobileMenu
					handleClick={handleClick}
					linkClass={linkClass}
					menuItems={menuItems}
				/>
			)}
		</header>
	);
};

export default Header;
