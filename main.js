import "./css/style.css";
import { getTime, getWord, copyToClipboard } from "./word.js";

document.querySelector("#app").innerHTML = `
<div>
	<header>
		<span>
			<svg id="brave-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256">
		<g fill="#e9e4e4" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M8.53125,2l-1.49414,1.79297c-1.45028,-0.1474 -2.89833,0.49803 -3.73242,1.75l-0.30469,0.45703l1.05859,1.36719l-0.81836,0.98242c-0.00395,0.00452 -0.00785,0.00908 -0.01172,0.01367l-0.3125,0.375l0.10156,0.44531c0.00061,0.00521 0.00126,0.01042 0.00195,0.01563l0.00586,0.02148c0.00064,0.00261 0.00129,0.00521 0.00195,0.00781l1.74805,7.74805c0.13863,0.69261 0.34329,1.23166 0.66992,1.6582c0.32663,0.42654 0.70349,0.66611 1.03516,0.88672l4.41016,2.94141v-0.00195c0.66981,0.44787 1.54902,0.4484 2.21875,0.00195l4.41016,-2.94141c0.33105,-0.22054 0.71076,-0.46029 1.03711,-0.88672c0.32635,-0.42643 0.52933,-0.9656 0.66797,-1.6582l1.72852,-7.66211c0.00133,-0.00455 0.00264,-0.00911 0.00391,-0.01367c0.02148,-0.06344 0.03653,-0.12887 0.04492,-0.19531l0.08203,-0.36719l-0.21875,-0.26172c-0.05427,-0.09168 -0.12284,-0.1741 -0.20312,-0.24414c-0.00194,-0.00196 -0.0039,-0.00391 -0.00586,-0.00586l-0.71484,-0.85937l1.05859,-1.36719l-0.30469,-0.45703c-0.83409,-1.25197 -2.28214,-1.8974 -3.73242,-1.75l-1.49414,-1.79297zM12,4.86719c0.28144,0 0.56287,0.10975 0.7832,0.33008l0.29297,0.29297h0.28125c0.5493,0.26711 1.17033,0.36381 1.73633,0.08008l0.16211,-0.08008h0.51758l2.96484,3.55859l-2.40039,3.37109c-0.214,0.30166 -0.24405,0.69679 -0.07812,1.02734l0.29102,0.58398c0.20868,0.41951 0.1057,0.91526 -0.25391,1.21484l-0.3125,0.26172c-0.32672,0.06964 -0.65622,0.10722 -0.98047,0.07813c-0.457,-0.044 -0.89539,-0.1853 -1.27539,-0.4043c-0.19,-0.108 -0.37134,-0.23381 -0.52734,-0.38281c-0.07496,-0.06013 -0.14407,-0.1412 -0.20117,-0.20508v-0.59375c0.00105,-0.11987 -0.01946,-0.23895 -0.06055,-0.35156l1.50781,-0.75391c0.339,-0.17 0.55273,-0.51553 0.55273,-0.89453l-1,-2l3,-1l-1,-1h-2c-0.339,0.17 -1,1.621 -1,2l1,2l-1.97656,0.98828c-0.01301,-0.00091 -0.02603,-0.00156 -0.03906,-0.00195c-0.00326,-0.00002 -0.00651,-0.00002 -0.00977,0l-1.97461,-0.98633l1,-2c0,-0.379 -0.661,-1.83 -1,-2h-2l-1,1l3,1l-1,2c0,0.379 0.21373,0.72453 0.55273,0.89453l1.50781,0.75391c-0.04109,0.11261 -0.0616,0.23169 -0.06055,0.35156v0.59375c-0.05596,0.06253 -0.12444,0.14243 -0.19727,0.20117c-0.156,0.15 -0.33734,0.27381 -0.52734,0.38281c-0.381,0.22 -0.81739,0.3632 -1.27539,0.4082c-0.25496,0.02287 -0.51473,0.00873 -0.77344,-0.0293l-0.37109,-0.31055c-0.35961,-0.29959 -0.46258,-0.79533 -0.25391,-1.21484l0.29297,-0.58398c0.16942,-0.33857 0.13313,-0.74379 -0.09375,-1.04687l-2.52539,-3.36719l3.01758,-3.62305l0.73828,0.28711c0.73628,0.28533 1.57724,0.1083 2.13672,-0.45117l0.04883,-0.04883c0.22033,-0.22033 0.50177,-0.33008 0.7832,-0.33008zM12,16.2793c0.31566,0.21165 0.66213,0.39954 1.00195,0.52148c0.35981,0.1359 0.73209,0.22263 1.10742,0.26953l-2.0332,1.69336l-2.04883,-1.70898c0.3315,-0.05106 0.66009,-0.13528 0.97851,-0.25586c0.3364,-0.12125 0.68089,-0.30977 0.99414,-0.51953z"></path></g></g>
	</svg>
		</span>
		The 25th word for today
	</header>
	<main>
		<div id="the25thWordField"><span id="the25thWord"></span></div>
		<button id="copyButton">Copy</button>
		<p id="currentTime"></p>
		<span class="errorField"></span>
	</main>
</div>

<p class="warning"><strong>Warning:</strong> Brave does not officially support using the Sync code as a backup and you should not rely on this continuing to work in to the future. Use the export functionality in bookmarks and the password manager instead.</p>
`;

getTime(document.querySelector("#currentTime"));
getWord(document.querySelector("#the25thWord"));
copyToClipboard(document.querySelector("#copyButton"));
