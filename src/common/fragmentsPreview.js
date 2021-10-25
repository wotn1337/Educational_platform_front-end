import {fragmentTypes} from "./fragmentTypes";
import videoPreview from "../assets/img/fragments/videoPreview.png";
import articlePreview from "../assets/img/fragments/articlePreview.png";
import testPreview from "../assets/img/fragments/testPreview.png";
import typeVideo from "../assets/img/fragments/typeVideo.png";
import typeTest from "../assets/img/fragments/typeTest.png";
import typeArticle from "../assets/img/fragments/typeArticle.png";

export const previewImg = {
	[fragmentTypes.video]: videoPreview,
	[fragmentTypes.article]: articlePreview,
	[fragmentTypes.test]: testPreview,
	'Article': articlePreview
};

export const fragmentTypeImg = {
	[fragmentTypes.video]: typeVideo,
	[fragmentTypes.article]: typeTest,
	[fragmentTypes.test]: typeArticle,
	'Article': typeArticle
};