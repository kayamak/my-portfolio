import ContactSection from "@/components/ContactSection";
import { Language } from "@/types";

interface Props {
	language: Language;
}

const Footer: React.FC<Props> = ({ language }) => {
	return (
		<footer className="flex flex-col items-center">
			{/* お問い合わせ */}
			<ContactSection language={language} />
		</footer>
	);
};

export default Footer;
