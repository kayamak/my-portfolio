import { Engineer } from "../components/EngineerSection";

// https://devicon.dev/
import AwkIcon from "../../public/icons/awk.svg";
import CIcon from "../../public/icons/c.svg";
import DockerIcon from "../../public/icons/docker.svg";
import JavaIcon from "../../public/icons/java.svg";
import JSIcon from "../../public/icons/js.svg";
import RailsIcon from "../../public/icons/rails.svg";
import ReactIcon from "../../public/icons/react.svg";
import RSpecIcon from "../../public/icons/rspec.svg";
import RubyIcon from "../../public/icons/ruby.svg";
import SpringIcon from "../../public/icons/spring.svg";
import TypeScriptIcon from "../../public/icons/typescript.svg";

interface Props {
	engineer: Engineer;
}

const SkillIconBadge: React.FC<Props> = ({ engineer }) => {
	return (
		<>
			{/* スキルアイコン */}
			<div className="z-20 my-6 self-center lg:mb-0">
				{engineer.icon === "RubyIcon" && (
					<div className="flex flex-wrap space-x-6">
						<RubyIcon width={100} height={100} />
						<RailsIcon width={100} height={100} />
						<RSpecIcon width={100} height={100} />
						<TypeScriptIcon width={100} height={100} />
						<ReactIcon width={100} height={100} />
						<DockerIcon width={100} height={100} />
					</div>
				)}
				{engineer.icon === "JavaIcon" && (
					<div className="flex flex-wrap space-x-6">
						<JavaIcon width={100} height={100} />
						<SpringIcon width={100} height={100} />
						<JSIcon width={100} height={100} />
					</div>
				)}
				{engineer.icon === "EmbeddedIcon" && (
					<div className="flex flex-wrap space-x-6">
						<CIcon width={100} height={100} />
						<AwkIcon width={100} height={100} />
					</div>
				)}
			</div>
			{/* スキルバッジ */}
			<div className="mb-8 mt-6 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
				{engineer.badges.map((badge, badgeIndex) => (
					<div key={badgeIndex} className="badge">
						{badge}
					</div>
				))}
			</div>
		</>
	);
};

export default SkillIconBadge;
