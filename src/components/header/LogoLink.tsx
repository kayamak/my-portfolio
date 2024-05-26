import repositoryPath from "@/lib/repositoryPath";
import Image from "next/image";

const LogoLink: React.FC<{ handleClick: any; linkClass: any }> = ({
	handleClick,
	linkClass,
}) => (
	<a className={linkClass("home")} onClick={(e) => handleClick(e, "home")}>
		<Image
			src={`${repositoryPath}/images/mylogo.png`}
			className="rounded-md"
			alt="mylogo"
			width={50}
			height={50}
		/>
	</a>
);

export default LogoLink;
