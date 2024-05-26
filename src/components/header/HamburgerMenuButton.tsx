import "@/lib/fontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HamburgerMenuButton: React.FC<{
	isMenuOpen: boolean;
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isMenuOpen, setIsMenuOpen }) => (
	<div className="md:hidden">
		<button
			onClick={() => setIsMenuOpen(!isMenuOpen)}
			className="focus:outline-none"
		>
			<FontAwesomeIcon
				icon={"bars"}
				className="text-4xl text-yellow-300 hover:text-yellow-600"
			/>
		</button>
	</div>
);

export default HamburgerMenuButton;
