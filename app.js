(function(){var _S=['drop-overlay','settings-modal','open-settings','close-settings','save-settings','api-key','model-select','subject-select','system-prompt','user-prompt','file-status','response-area','loading-indicator','generate-btn','copy-btn','screenshot-btn','theme-toggle','edit-btn','response-editor','edit-actions','save-edit-btn','cancel-edit-btn','paste-modal','close-paste-modal','.paste-option-btn','drop-zone-question','drop-zone-model','drop-zone-student','file-input-question','file-input-model','file-input-student','thumbnails-question','thumbnails-model','thumbnails-student','include-question','include-model','include-student','click','click','click','click','click','other','','dark','','gemini-3-pro-preview',"あなたは数学の教師です。与えられた数式や問題を解析し、解答・解説を行ってください。","あなたは英語の教師です。与えられた英文や問題を解析し、和訳や文法解説を行ってください。","あなたは理科の教師です。与えられた問題を解析し、科学的な根拠に基づいて解説してください。","あなたは社会科の教師です。歴史、地理、公民などの問題を背景知識とともに解説してください。","あなたは国語の教師です。現代文、古文、漢文などの問題を解析し、読解のポイントを解説してください。","あなたは優秀な家庭教師です。与えられた画像を解析し、生徒の質問に答えてください。",'gemini_api_key','','gemini_model','gemini-3-pro-preview','current_subject','other','theme','dark','subject_prompts','data-theme','dark','🌙','☀️','theme','dark','light','dark','API Keyを入力してください','gemini_api_key','gemini_model','subject_prompts','current_subject',"data:text/json;charset=utf-8,",'a',"href","download","clear_maker_prompts.json",'object','subject_prompts','プロンプト設定を復元しました！','Invalid JSON structure','ファイルの読み込みに失敗しました。正しいJSONファイルか確認してください。','','question','model','student','dragover','drop','click','paste','click','click','data-target','click','click','click','click','click','export-prompts-btn','click','import-prompts-btn','click','import-prompts-input','import-prompts-input','change','open-readme-btn','click','close-readme-btn','click','readme-modal','hidden','change','input','click','.clear-zone-btn','click','change','dragover','active','dragleave','active','drop','active','mouseenter','mouseleave','click','','hidden','hidden','image','question','model','student','ファイルの読み込みに失敗しました。','✨ 解析を実行','予期せぬエラーが発生しました: ','','hidden','hidden','img','click','少なくとも1つの画像をアップロードしてください','まずは右上の設定ボタン(⚙️)からAPIキーを設定してください。',"\n\n【重要】\n・数式は必ずLaTeX形式（$...$ または $$...$$）で記述してください。\n・行内数式は $...$ で、独立数式は $$...$$ で囲んでください。\n・特に複数行の数式（aligned環境など）を使う場合は、必ず $$ \\begin{aligned} ... \\end{aligned} $$ のように全体を $$ で囲んでください。","\n\n## 問題画像","\n\n## 模範解答画像","\n\n## 生徒の解答画像","HARM_CATEGORY_HARASSMENT","BLOCK_NONE","HARM_CATEGORY_HATE_SPEECH","BLOCK_NONE","HARM_CATEGORY_SEXUALLY_EXPLICIT","BLOCK_NONE","HARM_CATEGORY_DANGEROUS_CONTENT","BLOCK_NONE",'POST','Content-Type','application/json','API Response Unexpected:','AIからの応答が空でした。','STOP','Finish Reason:','テキストが生成されませんでした。','解析完了','MATHPLACEHOLDER','clear_maker_','g','<div class="response-images-container">','</div><hr class="separator">','hidden','hidden','hidden','$$','$$','\\[','\\]','$','$','\\(','\\)','image/',',','application/pdf','対応していないファイル形式です (画像またはPDFのみ)','undefined','PDF解析ライブラリ (pdfjsLib) が読み込まれていません。ページをリロードしてみてください。','canvas','2d','#FFFFFF','image/jpeg','image/jpeg',',','PDF Conversion Error:','PDFの変換中にエラーが発生しました: ','img','hr','✅','Copy failed','コピーに失敗しました','hidden','0.3','hidden','hidden','hidden','1','data-theme','light','#f8fafc','#0f172a','light','#f1f5f9','#1e293b','24px','a','image/png','画像の保存に失敗しました','hidden','hidden','','hidden','hidden','hidden','hidden','hidden','hidden','hidden','hidden','hidden','hidden','readme-modal','readme-content','<p>読み込み中...</p>','v1.5.5: Loading embedded README...','undefined','Marked library is not loaded','Failed to load README:'];const README_CONTENT = `# Clear Maker

**AIを活用した答案添削・解説作成支援ツール**

Clear Makerは、Google Gemini Proモデルを活用して、生徒の答案、模範解答、問題文の画像を元に、高度な添削と解説を自動生成するWebアプリケーションです。

## 主な機能

*   **画像解析**: 問題、模範解答、生徒の答案の画像をアップロードして解析。
*   **AI添削**: 東大・京大レベルの基準で、記述の論理性や計算過程を細かくチェック。
*   **クリップボード貼り付け**: スクリーンショットを\`Ctrl+V\`で直接貼り付け可能（ホバー判定機能付き）。
*   **PDF対応**: PDFファイルを自動で画像に変換して読み込み。
*   **数式対応**: LaTeX形式の数式を美しくレンダリング（KaTeX使用）。
*   **編集機能**: 生成された解説をその場で編集・保存可能。
*   **PWA対応**: アプリとしてインストールして使用可能。オフラインキャッシュ対応。
*   **プライバシー重視**: APIキーはローカルストレージに保存され、サーバーには送信されません。

## 更新履歴 (Changelog)

### v1.5.15 (2026-02-23)
*   **[修正] キャッシュ更新の問題**:
    *   アプリが新しいバージョンに更新されない問題を修正。
    *   主要なファイル（HTML, JS, CSS）の取得戦略を「ネットワーク優先」に変更し、常に最新版を確認するようにしました。

### v1.5.14 (2026-02-22)
*   **[新機能] 画像引用設定の追加**:
    *   問題・模範解答・生徒解答の各画像について、生成結果に元の画像を引用するかどうかを選択できるチェックボックスを追加しました。

### v1.5.13 (2026-02-17)
*   **[変更] モデル選択肢の更新**:
    *   選択可能なGeminiモデルを最新のものに更新 (gemini-3-pro-preview, gemini-3-flash-preview, gemini-2.5-pro, gemini-2.5-flash)。

### v1.5.11 (2026-02-13)
*   **[修正] PWA更新の不具合**:
    *   Mac (Safari/Chrome) でアプリが更新されない問題を修正。
    *   Service Worker更新時に自動的にページをリロードする処理を追加。

### v1.5.8 (2026-02-12)
*   **[修正] マニュアル表示の不具合**:
    *   \`README.md\` が表示されない問題を修正。
    *   モーダルのクラス名が誤っていた不具合を修正 (\`modal-overlay\` -> \`modal\`)。
    *   キャッシュの問題により古いファイルが読み込まれ続ける現象を解決。
*   **[改善] キャッシュ戦略の見直し**: Service Workerの更新ロジックを最適化。

### v1.5.3 (2026-02-12)
*   **[新機能] クリップボード貼り付け機能の実装**:
    *   ドロップゾーン（問題・模範解答・生徒解答）の上で貼り付け操作を行うと、自動的にそのゾーンに画像が追加されます。
    *   ゾーン外で貼り付けた場合は、振り分け先を選択するモーダルが表示されます。
*   **[改善] コードの安全性向上**:
    *   \`app.src.js\`（ソースコード）と\`app.js\`（実行用コード）を分離。
    *   \`app.js\`に対して難読化処理を適用。
*   **[修正] バージョン表記の更新**: ヘッダーのバージョン番号をv1.5.3に更新。

### v1.5.2
*   **レイアウト変更**: UIの使いやすさを向上させるためのレイアウト調整。
*   **プロンプト改善**: 数式出力の精度向上など。

## APIキーの取得方法

このアプリを使用するには、Google Gemini APIキーが必要です。以下の手順で無料で取得できます。

1.  [Google AI Studio](https://aistudio.google.com/app/apikey) にアクセスします。
2.  Googleアカウントでログインします。
3.  「**Create API key**」ボタンをクリックします。
4.  「**Create API key in new project**」（または既存のプロジェクトを選択）をクリックします。
5.  生成されたAPIキーをコピーし、Clear Makerの設定画面（右上の⚙️）に入力してください。

## 使い方

1.  右上の設定ボタン（⚙️）からGemini APIキーを設定します。
2.  「問題」「模範解答」「生徒の答案」の各エリアに画像をドラッグ＆ドロップ、またはクリップボードから貼り付けます。
3.  「✨ 解析を実行」ボタンをクリックすると、AIが添削と解説を生成します。
4.  生成された結果はコピーしたり、画像として保存したりできます。

## 開発者向け情報

*   **\`app.src.js\`**: 開発用のソースコード（未圧縮・未難読化）。編集はこちらを行ってください。
*   **\`app.js\`**: 本番用の実行コード（難読化済み）。\`app.src.js\`から生成されます。
`;
const _e = {
dropOverlay: document.getElementById(_S[0]),
settingsModal: document.getElementById(_S[1]),
openSettingsBtn: document.getElementById(_S[2]),
closeSettingsBtn: document.getElementById(_S[3]),
saveSettingsBtn: document.getElementById(_S[4]),
apiKeyInput: document.getElementById(_S[5]),
modelSelect: document.getElementById(_S[6]),
subjectSelect: document.getElementById(_S[7]),
systemPrompt: document.getElementById(_S[8]),
userPrompt: document.getElementById(_S[9]),
fileStatus: document.getElementById(_S[10]),
responseArea: document.getElementById(_S[11]),
loadingIndicator: document.getElementById(_S[12]),
generateBtn: document.getElementById(_S[13]),
copyBtn: document.getElementById(_S[14]),
screenshotBtn: document.getElementById(_S[15]),
themeToggleBtn: document.getElementById(_S[16]),
editBtn: document.getElementById(_S[17]),
responseEditor: document.getElementById(_S[18]),
editActions: document.getElementById(_S[19]),
saveEditBtn: document.getElementById(_S[20]),
cancelEditBtn: document.getElementById(_S[21]),
pasteModal: document.getElementById(_S[22]),
closePasteBtn: document.getElementById(_S[23]),
pasteOptions: document.querySelectorAll(_S[24]),
dropZones: {
question: document.getElementById(_S[25]),
model: document.getElementById(_S[26]),
student: document.getElementById(_S[27])
},
inputs: {
question: document.getElementById(_S[28]),
model: document.getElementById(_S[29]),
student: document.getElementById(_S[30])
},
thumbs: {
question: document.getElementById(_S[31]),
model: document.getElementById(_S[32]),
student: document.getElementById(_S[33])
},
includeChecks: {
question: document.getElementById(_S[34]),
model: document.getElementById(_S[35]),
student: document.getElementById(_S[36])
}
};
_e.copyBtn.addEventListener(_S[37], _fQ);
_e.screenshotBtn.addEventListener(_S[38], _fS);
_e.editBtn.addEventListener(_S[39], () => _fT(true));
_e.saveEditBtn.addEventListener(_S[40], _fU);
_e.cancelEditBtn.addEventListener(_S[41], _fV);
let _s = {
currentSubject: _S[42],
currentMarkdown: _S[43],
hoveredZone: null,
pendingPasteFiles: [],
theme: _S[44],
prompts: {},
apiKey: _S[45],
model: _S[46],
files: {
question: [],
model: [],
student: []
},
isGenerationFinished: false
};
const DEFAULT_PROMPTS = {
math: _S[47],
english: _S[48],
science: _S[49],
social: _S[50],
japanese: _S[51],
other: _S[52]
};
function _f1() {
_f2();
_fA();
_f7(_s.currentSubject);
}
function _f2() {
_s.apiKey = localStorage.getItem(_S[53]) || _S[54];
_s.model = localStorage.getItem(_S[55]) || _S[56];
_s.currentSubject = localStorage.getItem(_S[57]) || _S[58];
_s.theme = localStorage.getItem(_S[59]) || _S[60];
_f3(_s.theme);
const savedPrompts = localStorage.getItem(_S[61]);
_s.prompts = savedPrompts ? JSON.parse(savedPrompts) : { ...DEFAULT_PROMPTS };
_e.apiKeyInput.value = _s.apiKey;
_e.modelSelect.value = _s.model;
_e.subjectSelect.value = _s.currentSubject;
}
function _f3(theme) {
document.body.setAttribute(_S[62], theme);
_e.themeToggleBtn.textContent = theme === _S[63] ? _S[64] : _S[65];
_s.theme = theme;
localStorage.setItem(_S[66], theme);
}
function _f4() {
const newTheme = _s.theme === _S[67] ? _S[68] : _S[69];
_f3(newTheme);
}
function _f5() {
const key = _e.apiKeyInput.value.trim();
const model = _e.modelSelect.value;
if (!key) {
alert(_S[70]);
return;
}
_s.apiKey = key;
_s.model = model;
localStorage.setItem(_S[71], key);
localStorage.setItem(_S[72], model);
_fD(_e.settingsModal, false);
}
function _f6() {
const text = _e.systemPrompt.value;
_s.prompts[_s.currentSubject] = text;
localStorage.setItem(_S[73], JSON.stringify(_s.prompts));
}
function _f7(subject) {
_s.currentSubject = subject;
localStorage.setItem(_S[74], subject);
_e.systemPrompt.value = _s.prompts[subject] || DEFAULT_PROMPTS[subject] || DEFAULT_PROMPTS.other;
}
function _f8() {
const dataStr = _S[75] + encodeURIComponent(JSON.stringify(_s.prompts, null, 2));
const downloadAnchorNode = document.createElement(_S[76]);
downloadAnchorNode.setAttribute(_S[77], dataStr);
downloadAnchorNode.setAttribute(_S[78], _S[79]);
document.body.appendChild(downloadAnchorNode);
downloadAnchorNode.click();
downloadAnchorNode.remove();
}
function _f9(event) {
const file = event.target.files[0];
if (!file) return;
const reader = new FileReader();
reader.onload = function (e) {
try {
const contents = JSON.parse(e.target.result);
if (typeof contents === _S[80] && contents !== null) {
_s.prompts = { ..._s.prompts, ...contents };
localStorage.setItem(_S[81], JSON.stringify(_s.prompts));
_f7(_s.currentSubject);
alert(_S[82]);
} else {
throw new Error(_S[83]);
}
} catch (err) {
console.error(err);
alert(_S[84]);
}
};
reader.readAsText(file);
event.target.value = _S[85];
}
function _fA() {
[_S[86], _S[87], _S[88]].forEach(type => _fB(type));
window.addEventListener(_S[89], (e) => e.preventDefault());
window.addEventListener(_S[90], (e) => e.preventDefault());
_e.generateBtn.addEventListener(_S[91], _fL);
window.addEventListener(_S[92], _fF);
_e.closePasteBtn.addEventListener(_S[93], () => _fD(_e.pasteModal, false));
_e.pasteOptions.forEach(btn => {
btn.addEventListener(_S[94], () => {
const target = btn.getAttribute(_S[95]);
if (_s.pendingPasteFiles.length > 0) {
_fH(_s.pendingPasteFiles, target);
_s.pendingPasteFiles = [];
}
_fD(_e.pasteModal, false);
});
});
_e.copyBtn.addEventListener(_S[96], _fQ);
_e.screenshotBtn.addEventListener(_S[97], _fS);
_e.openSettingsBtn.addEventListener(_S[98], () => _fD(_e.settingsModal, true));
_e.closeSettingsBtn.addEventListener(_S[99], () => _fD(_e.settingsModal, false));
_e.saveSettingsBtn.addEventListener(_S[100], _f5);
document.getElementById(_S[101]).addEventListener(_S[102], _f8);
document.getElementById(_S[103]).addEventListener(_S[104], () => document.getElementById(_S[105]).click());
document.getElementById(_S[106]).addEventListener(_S[107], _f9);
document.getElementById(_S[108]).addEventListener(_S[109], _fW);
document.getElementById(_S[110]).addEventListener(_S[111], () => document.getElementById(_S[112]).classList.add(_S[113]));
_e.subjectSelect.addEventListener(_S[114], (e) => {
_f6();
_f7(e.target.value);
});
_e.systemPrompt.addEventListener(_S[115], _f6);
_e.themeToggleBtn.addEventListener(_S[116], _f4);
}
function _fB(type) {
const zone = _e.dropZones[type];
const input = _e.inputs[type];
const container = document.querySelector(`.drop-zone-group[data-type="${type}"]`);
const clearBtn = container.querySelector(_S[117]);
if (!zone || !input) return;
zone.addEventListener(_S[118], () => input.click());
input.addEventListener(_S[119], (e) => _fG(e, type));
zone.addEventListener(_S[120], (e) => {
e.preventDefault();
container.classList.add(_S[121]);
});
zone.addEventListener(_S[122], (e) => {
e.preventDefault();
container.classList.remove(_S[123]);
});
zone.addEventListener(_S[124], (e) => {
e.preventDefault();
container.classList.remove(_S[125]);
_fE(e, type);
});
container.addEventListener(_S[126], () => {
_s.hoveredZone = type;
});
container.addEventListener(_S[127], () => {
if (_s.hoveredZone === type) {
_s.hoveredZone = null;
}
});
if (clearBtn) {
clearBtn.addEventListener(_S[128], (e) => {
e.stopPropagation();
_fC(type);
});
}
}
function _fC(type) {
_s.files[type] = [];
_fI(type);
_fK();
_e.inputs[type].value = _S[129];
}
function _fD(modal, show) {
if (show) modal.classList.remove(_S[130]);
else modal.classList.add(_S[131]);
}
async function _fE(e, type) {
const files = e.dataTransfer.files;
if (files.length > 0) _fH(files, type);
}
function _fF(e) {
const items = e.clipboardData.items;
const files = [];
for (let i = 0; i < items.length; i++) {
if (items[i].type.indexOf(_S[132]) !== -1) {
const file = items[i].getAsFile();
if (file) files.push(file);
}
}
if (files.length > 0) {
e.preventDefault();
if (_s.hoveredZone) {
_fH(files, _s.hoveredZone);
} else {
_s.pendingPasteFiles = files;
_fD(_e.pasteModal, true);
}
}
}
function _fG(e, type) {
const files = e.target.files;
if (files.length > 0) _fH(files, type);
}
async function _fH(fileList, type) {
const files = Array.from(fileList);
if (files.length === 0) return;
if (_s.isGenerationFinished) {
_s.files.question = [];
_s.files.model = [];
_s.files.student = [];
_fI(_S[133]);
_fI(_S[134]);
_fI(_S[135]);
_s.isGenerationFinished = false;
}
if (!type || !_s.files[type]) {
alert(`内部エラー: 不明なファイルカテゴリです (${type})`);
return;
}
_e.generateBtn.disabled = true;
try {
const promises = files.map(file => {
return _fO(file).catch(err => {
console.error(`Skipped file ${file.name}:`, err);
return null;
});
});
const results = await Promise.all(promises);
const validResults = results.filter(r => r !== null).flat();
if (validResults.length === 0 && results.length > 0) {
alert(_S[136]);
} else {
_s.files[type] = [..._s.files[type], ...validResults];
_fI(type);
}
_fK();
_e.generateBtn.disabled = false;
_e.generateBtn.innerHTML = _S[137];
} catch (err) {
console.error(err);
alert(_S[138] + err.message);
_e.generateBtn.disabled = false;
}
}
function _fI(type) {
const container = _e.thumbs[type];
container.innerHTML = _S[139];
const files = _s.files[type];
if (files.length === 0) {
container.classList.add(_S[140]);
return;
}
container.classList.remove(_S[141]);
files.forEach((imgData, index) => {
const img = document.createElement(_S[142]);
img.src = `data:${imgData.mimeType};base64,${imgData.data}`;
img.title = `Click to remove`;
img.addEventListener(_S[143], (e) => {
e.stopPropagation();
_fJ(type, index);
});
container.appendChild(img);
});
}
function _fJ(type, index) {
_s.files[type].splice(index, 1);
_fI(type);
_fK();
}
function _fK() {
const total = _s.files.question.length + _s.files.model.length + _s.files.student.length;
_e.fileStatus.textContent = `画像合計: ${total}枚 (問:${_s.files.question.length}, 模範:${_s.files.model.length}, 生徒:${_s.files.student.length})`;
}
async function _fL() {
const totalFiles = _s.files.question.length + _s.files.model.length + _s.files.student.length;
if (totalFiles === 0) {
alert(_S[144]);
return;
}
if (!_s.apiKey) {
alert(_S[145]);
_fD(_e.settingsModal, true);
return;
}
if (!_e.userPrompt.value.trim()) {
}
_fR(true);
_e.generateBtn.disabled = true;
try {
await _fM();
} catch (err) {
console.error(err);
_fN(`### エラーが発生しました\n\`\`\`\n${err.message}\n\`\`\``);
} finally {
_fR(false);
_e.generateBtn.disabled = false;
}
}
async function _fM() {
const fixedPrompt = _e.systemPrompt.value;
const additionalPrompt = _e.userPrompt.value;
const texInstruction = _S[146];
const parts = [{ text: fixedPrompt + texInstruction }];
if (_s.files.question.length > 0) {
parts.push({ text: _S[147] });
_s.files.question.forEach(f => parts.push({ inline_data: { mime_type: f.mimeType, data: f.data } }));
}
if (_s.files.model.length > 0) {
parts.push({ text: _S[148] });
_s.files.model.forEach(f => parts.push({ inline_data: { mime_type: f.mimeType, data: f.data } }));
}
if (_s.files.student.length > 0) {
parts.push({ text: _S[149] });
_s.files.student.forEach(f => parts.push({ inline_data: { mime_type: f.mimeType, data: f.data } }));
}
parts.push({ text: `\n\n## 追加プロンプト\n${additionalPrompt || '画像を解析して、その内容について解説してください。'}` });
const requestBody = {
contents: [
{
parts: parts
}
],
generationConfig: {
temperature: 0.4
},
safetySettings: [
{ category: _S[150], threshold: _S[151] },
{ category: _S[152], threshold: _S[153] },
{ category: _S[154], threshold: _S[155] },
{ category: _S[156], threshold: _S[157] }
]
};
try {
const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${_s.model}:generateContent?key=${_s.apiKey}`, {
method: _S[158],
headers: { [_S[159]]: _S[160] },
body: JSON.stringify(requestBody)
});
const data = await response.json();
if (data.error) {
throw new Error(data.error.message);
}
if (!data.candidates || data.candidates.length === 0) {
console.error(_S[161], data);
if (data.promptFeedback) {
const blockReason = data.promptFeedback.blockReason;
throw new Error(`生成がブロックされました (理由: ${blockReason})`);
}
throw new Error(_S[162]);
}
const candidate = data.candidates[0];
if (candidate.finishReason && candidate.finishReason !== _S[163]) {
console.warn(_S[164], candidate.finishReason);
}
if (!candidate.content || !candidate.content.parts || !candidate.content.parts[0]) {
throw new Error(_S[165]);
}
const text = candidate.content.parts[0].text;
const allImages = [];
if (_e.includeChecks.question.checked) allImages.push(..._s.files.question);
if (_e.includeChecks.model.checked) allImages.push(..._s.files.model);
if (_e.includeChecks.student.checked) allImages.push(..._s.files.student);
_fN(text, allImages);
} catch (err) {
throw err;
} finally {
_e.fileStatus.textContent = _S[166];
_s.isGenerationFinished = true;
}
}
function _fN(markdown, imageParts = null) {
const PLACEHOLDER_PREFIX = _S[167];
const mathBlocks = [];
const STORAGE_PREFIX = _S[168];
const storeMath = (match) => {
const placeholder = `${PLACEHOLDER_PREFIX}${mathBlocks.length}`;
mathBlocks.push(match);
return placeholder;
};
let processedMarkdown = markdown;
processedMarkdown = processedMarkdown.replace(
/\$\$([\s\S]*?)\$\$/g,
(match) => storeMath(match)
);
processedMarkdown = processedMarkdown.replace(
/\\\[([\s\S]*?)\\\]/g,
(match) => storeMath(match)
);
processedMarkdown = processedMarkdown.replace(
/\\\(([\s\S]*?)\\\)/g,
(match) => storeMath(match)
);
processedMarkdown = processedMarkdown.replace(
/\$([^$\n]+?)\$/g,
(match) => storeMath(match)
);
processedMarkdown = processedMarkdown.replace(
/(\\begin\{([a-z]+)\*?\}([\s\S]*?)\\end\{\2\*?\})/g,
(match) => {
return storeMath(`$$${match}$$`);
}
);
let html = marked.parse(processedMarkdown, { breaks: true });
for (let i = mathBlocks.length - 1; i >= 0; i--) {
const math = mathBlocks[i];
const placeholder = `${PLACEHOLDER_PREFIX}${i}`;
const regex = new RegExp(placeholder, _S[169]);
html = html.replace(regex, () => math);
}
if (imageParts && Array.isArray(imageParts)) {
let imgsHtml = _S[170];
imageParts.forEach(part => {
const imgSrc = `data:${part.mimeType};base64,${part.data}`;
imgsHtml += `<img src="${imgSrc}" class="response-preview-image" alt="Uploaded Content">`;
});
imgsHtml += _S[171];
html = imgsHtml + html;
}
_e.responseArea.innerHTML = html;
_e.editBtn.classList.remove(_S[172]);
_e.copyBtn.classList.remove(_S[173]);
_e.screenshotBtn.classList.remove(_S[174]);
_s.currentMarkdown = markdown;
if (window.renderMathInElement) {
renderMathInElement(_e.responseArea, {
delimiters: [
{ left: _S[175], right: _S[176], display: true },
{ left: _S[177], right: _S[178], display: true },
{ left: _S[179], right: _S[180], display: false },
{ left: _S[181], right: _S[182], display: false }
],
throwOnError: false
});
}
}
async function _fO(file) {
if (file.type.startsWith(_S[183])) {
return new Promise((resolve, reject) => {
const reader = new FileReader();
reader.onload = (e) => {
const base64 = e.target.result.split(_S[184])[1];
resolve([{ mimeType: file.type, data: base64 }]);
};
reader.onerror = reject;
reader.readAsDataURL(file);
});
} else if (file.type === _S[185]) {
const arrayBuffer = await file.arrayBuffer();
return await _fP(arrayBuffer);
} else {
throw new Error(_S[186]);
}
}
async function _fP(arrayBuffer) {
if (typeof pdfjsLib === _S[187]) {
throw new Error(_S[188]);
}
try {
const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
const pdf = await loadingTask.promise;
const maxPages = pdf.numPages;
const images = [];
const MAX_PAGES_TO_PROCESS = 10;
const pagesToProcess = Math.min(maxPages, MAX_PAGES_TO_PROCESS);
if (maxPages > MAX_PAGES_TO_PROCESS) {
console.warn(`PDF has ${maxPages} pages. Only first ${MAX_PAGES_TO_PROCESS} will be processed.`);
}
for (let pageNum = 1; pageNum <= pagesToProcess; pageNum++) {
const page = await pdf.getPage(pageNum);
const viewport = page.getViewport({ scale: 2.0 });
const canvas = document.createElement(_S[189]);
const context = canvas.getContext(_S[190]);
canvas.height = viewport.height;
canvas.width = viewport.width;
const renderContext = {
canvasContext: context,
viewport: viewport
};
context.fillStyle = _S[191];
context.fillRect(0, 0, canvas.width, canvas.height);
await page.render(renderContext).promise;
const dataUrl = canvas.toDataURL(_S[192], 0.95);
images.push({
mimeType: _S[193],
data: dataUrl.split(_S[194])[1]
});
}
return images;
} catch (err) {
console.error(_S[195], err);
throw new Error(_S[196] + err.message);
}
}
function _fQ() {
const clone = _e.responseArea.cloneNode(true);
const images = clone.getElementsByTagName(_S[197]);
while (images.length > 0) {
images[0].remove();
}
const hr = clone.getElementsByTagName(_S[198]);
while (hr.length > 0) {
hr[0].remove();
}
const text = clone.innerText.trim();
navigator.clipboard.writeText(text).then(() => {
const originalText = _e.copyBtn.textContent;
_e.copyBtn.textContent = _S[199];
setTimeout(() => {
_e.copyBtn.textContent = originalText;
}, 2000);
}).catch(err => {
console.error(_S[200], err);
alert(_S[201]);
});
}
function _fR(isLoading) {
if (isLoading) {
_e.loadingIndicator.classList.remove(_S[202]);
_e.responseArea.style.opacity = _S[203];
_e.copyBtn.classList.add(_S[204]);
_e.screenshotBtn.classList.add(_S[205]);
} else {
_e.loadingIndicator.classList.add(_S[206]);
_e.responseArea.style.opacity = _S[207];
}
}
function _fS() {
const target = _e.responseArea;
const originalBg = target.style.background;
const dataTheme = document.body.getAttribute(_S[208]);
const bgHex = dataTheme === _S[209] ? _S[210] : _S[211];
const captureBg = dataTheme === _S[212] ? _S[213] : _S[214];
target.style.background = bgHex;
const originalPadding = target.style.padding;
target.style.padding = _S[215];
html2canvas(target, {
useCORS: true,
scale: 2,
backgroundColor: captureBg,
logging: false
}).then(canvas => {
target.style.background = originalBg;
target.style.padding = originalPadding;
const link = document.createElement(_S[216]);
link.download = `clear_maker_response_${Date.now()}.png`;
link.href = canvas.toDataURL(_S[217]);
link.click();
}).catch(err => {
console.error(err);
target.style.background = originalBg;
target.style.padding = originalPadding;
alert(_S[218]);
});
}
function _fT(isEditing) {
if (isEditing) {
_e.responseArea.classList.add(_S[219]);
_e.responseEditor.classList.remove(_S[220]);
_e.responseEditor.value = _s.currentMarkdown || _S[221];
_e.editBtn.classList.add(_S[222]);
_e.copyBtn.classList.add(_S[223]);
_e.screenshotBtn.classList.add(_S[224]);
_e.editActions.classList.remove(_S[225]);
} else {
_e.responseArea.classList.remove(_S[226]);
_e.responseEditor.classList.add(_S[227]);
_e.editBtn.classList.remove(_S[228]);
_e.copyBtn.classList.remove(_S[229]);
_e.screenshotBtn.classList.remove(_S[230]);
_e.editActions.classList.add(_S[231]);
}
}
function _fU() {
const newMarkdown = _e.responseEditor.value;
_s.currentMarkdown = newMarkdown;
const totalFiles = [..._s.files.question, ..._s.files.model, ..._s.files.student];
_fN(newMarkdown, totalFiles);
_fT(false);
}
function _fV() {
_fT(false);
}
async function _fW() {
const modal = document.getElementById(_S[232]);
const content = document.getElementById(_S[233]);
_fD(_e.settingsModal, false);
_fD(modal, true);
content.innerHTML = _S[234];
try {
console.log(_S[235]);
const text = README_CONTENT;
if (typeof marked === _S[236]) {
throw new Error(_S[237]);
}
const html = marked.parse(text);
content.innerHTML = html;
} catch (err) {
console.error(_S[238], err);
content.innerHTML = `<p style="color:red">読み込みに失敗しました。<br>${err.message}</p>`;
}
}
_f1();})();