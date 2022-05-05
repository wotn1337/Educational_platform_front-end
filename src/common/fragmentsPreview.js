import {fragmentTypes} from "./fragmentTypes";
import videoPreview from "../assets/img/fragments/videoPreview.png";
import articlePreview from "../assets/img/fragments/articlePreview.png";
import testPreview from "../assets/img/fragments/testPreview.png";
import imagePreview from "../assets/img/fragments/imageTypePreview.svg";
import typeVideo from "../assets/img/fragments/videoTypeImg.svg";
import typeTest from "../assets/img/fragments/typeTest.png";
import typeArticle from "../assets/img/fragments/articleTypeImg.svg";
import typeImage from "../assets/img/fragments/imageTypeImg.svg";
import typeGame from "../assets/img/fragments/typeGame.svg";
import pairsGamePreview from "../assets/img/fragments/pairsGamePreview.png";
import associationsGamePreview from "../assets/img/fragments/associationsGamePreview.png";
import sequenceGamePreview from "../assets/img/fragments/sequenceGamePreview.png";
import puzzlesGamePreview from "../assets/img/fragments/puzzlesGamePreview.png";

export const previewImg = {
	[fragmentTypes.video]: videoPreview,
	[fragmentTypes.article]: articlePreview,
	[fragmentTypes.test]: testPreview,
	[fragmentTypes.image]: imagePreview,
	[fragmentTypes.pairs]: pairsGamePreview,
	[fragmentTypes.matchmaking]: associationsGamePreview,
	[fragmentTypes.sequences]: sequenceGamePreview,
	[fragmentTypes.puzzles]: puzzlesGamePreview
};

export const fragmentTypeImg = {
	[fragmentTypes.video]: typeVideo,
	[fragmentTypes.article]: typeArticle,
	[fragmentTypes.test]: typeTest,
	[fragmentTypes.image]: typeImage,
	[fragmentTypes.game]: typeGame,
};