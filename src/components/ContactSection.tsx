import Link from "next/link";
import React from "react";
import "@/lib/fontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Language } from "@/types";

interface Props {
	language: Language;
}

const ContactSection: React.FC<Props> = ({ language }) => {
	const sectionTitle = language === "ja" ? "お問い合わせ" : "Contact";
	const sectionParagraph = language === "ja" ? "お気軽にご一報ください。" : "Feel free to contact me.";

	return (
		<div className="container mx-auto mb-20 mt-24 flex w-full items-center justify-between px-8 md:px-14 lg:px-24">
			<section className="w-full">
				<h2 className="secondary-title">{sectionTitle}</h2>
				<p className="section-paragraph">{sectionParagraph}</p>

				<div className="flex space-x-6">
					<Link href="mailto:kayama.keiichi@gmail.com" className="text-gray-500">
						<FontAwesomeIcon icon={"envelope"} className="text-3xl text-blue-50" />
					</Link>
					<div>
						<Link href="https://github.com/kayamak">
							<FontAwesomeIcon icon={["fab", "square-github"]} className="text-3xl text-blue-200" />
						</Link>
					</div>
					<div>
						<Link href="https://x.com/KayamaKeiichi">
							<FontAwesomeIcon icon={["fab", "twitter"]} className="text-3xl text-blue-400" />
						</Link>
					</div>
					<div>
						<Link href="https://www.facebook.com/kayamak1/">
							<FontAwesomeIcon icon={["fab", "facebook"]} className="text-3xl text-blue-600" />
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ContactSection;
