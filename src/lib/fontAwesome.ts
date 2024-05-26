import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
	faFacebook,
	faSquareGithub,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBars, faRocket } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

library.add(
	faFacebook,
	faSquareGithub,
	faTwitter,
	faEnvelope,
	faBars,
	faRocket,
);
