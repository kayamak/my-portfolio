"use client";
import type { Section } from "@/types";
import React, { useState } from "react";
import DesktopMenu from "./header/DesktopMenu";
import HamburgerMenuButton from "./header/HamburgerMenuButton";
import LogoLink from "./header/LogoLink";
import MobileMenu from "./header/MobileMenu";
import { Language } from "@/types";

interface Props {
	setSection: (section: Section) => void;
	currentSection: string;
    setLanguage: React.Dispatch<React.SetStateAction<Language>>
    language: Language;
}

const Header: React.FC<Props> = ({ setSection, currentSection, setLanguage, language }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const handleClick = (
        event: React.MouseEvent<HTMLAnchorElement>,
        section: Section,
    ) => {
        event.preventDefault();
        if (section === "translation") {
            setLanguage((prevLanguage) => (prevLanguage === 'ja' ? 'en' : 'ja'));
        } else {
            setSection(section);
            setIsMenuOpen(false);
        }
    };

    const linkClass = (section: string) => {
        return section === currentSection
            ? "text-yellow-600 transition-all duration-300"
            : "text-white hover:text-selected-text transition-all duration-300";
    };

    const menuItems = language === 'ja' ? [
        { section: "home", label: "ホーム" },
        { section: "skill", label: "ITエンジニア歴" },
        { section: "portfolio", label: "自作ライブラリ" },
        { section: "contact", label: "お問い合わせ" },
				{ section: "translation", label: "English" },
    ] : [
        { section: "home", label: "Home" },
        { section: "skill", label: "IT Experience" },
        { section: "portfolio", label: "Custom Library" },
        { section: "translation", label: "日本語" },
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
