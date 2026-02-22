(function(){var _S=['https://script.google.com/macros/s/AKfycbztFiRh4EVm6vsXYJE0rpv3pGFPOSpilylrofIlpJ5rlwIifAyTLKsTW_TxCedwrm4K/exec','drop-overlay','settings-modal','open-settings','close-settings','save-settings','api-key','model-select','subject-select','system-prompt','user-prompt','file-status','response-area','loading-indicator','generate-btn','copy-btn','screenshot-btn','theme-toggle','edit-btn','response-editor','edit-actions','save-edit-btn','cancel-edit-btn','paste-modal','close-paste-modal','.paste-option-btn','drop-zone-question','drop-zone-model','drop-zone-student','file-input-question','file-input-model','file-input-student','thumbnails-question','thumbnails-model','thumbnails-student','include-question','include-model','include-student','.version-tag','click','click','click','click','click','other','','dark','','gemini-3.1-pro-preview',"あなたは数学の教師です。与えられた数式や問題を解析し、解答・解説を行ってください。","あなたは英語の教師です。与えられた英文や問題を解析し、和訳や文法解説を行ってください。","あなたは理科の教師です。与えられた問題を解析し、科学的な根拠に基づいて解説してください。","あなたは社会科の教師です。歴史、地理、公民などの問題を背景知識とともに解説してください。","あなたは国語の教師です。現代文、古文、漢文などの問題を解析し、読解のポイントを解説してください。","あなたは優秀な家庭教師です。与えられた画像を解析し、生徒の質問に答えてください。",'v1.6.1','gemini_api_key','','gemini_model','gemini-3.1-pro-preview','current_subject','other','theme','dark','subject_prompts','Failed to parse subject_prompts, using defaults:','include_question','false','include_model','false','include_student','false','data-theme','dark','🌙','☀️','theme','dark','light','dark','API Keyを入力してください','gemini_api_key','gemini_model','subject_prompts','current_subject','application/json','a',"href","download","clear_maker_prompts.json",'object','subject_prompts','プロンプト設定を復元しました！','Invalid JSON structure','ファイルの読み込みに失敗しました。正しいJSONファイルか確認してください。','','question','model','student','dragover','drop','click','paste','click','click','data-target','click','click','click','click','click','export-prompts-btn','click','import-prompts-btn','click','import-prompts-input','import-prompts-input','change','open-readme-btn','click','close-readme-btn','click','readme-modal','hidden','change','input','click','change','include_question','change','include_model','change','include_student','.clear-zone-btn','click','change','dragover','active','dragleave','active','drop','active','mouseenter','mouseleave','click','','hidden','hidden','image','question','model','student','ファイルの読み込みに失敗しました。','✨ 解析を実行','予期せぬエラーが発生しました: ','','hidden','hidden','img','click','少なくとも1つの画像をアップロードしてください','まずは右上の設定ボタン(⚙️)からAPIキーを設定してください。',"\n\n【重要】\n・数式は必ずLaTeX形式（$...$ または $$...$$）で記述してください。\n・行内数式は $...$ で、独立数式は $$...$$ で囲んでください。\n・特に複数行の数式（aligned環境など）を使う場合は、必ず $$ \\begin{aligned} ... \\end{aligned} $$ のように全体を $$ で囲んでください。","\n\n## 問題画像","\n\n## 模範解答画像","\n\n## 生徒の解答画像","HARM_CATEGORY_HARASSMENT","BLOCK_NONE","HARM_CATEGORY_HATE_SPEECH","BLOCK_NONE","HARM_CATEGORY_SEXUALLY_EXPLICIT","BLOCK_NONE","HARM_CATEGORY_DANGEROUS_CONTENT","BLOCK_NONE",'POST','Content-Type','application/json','API Response Unexpected:','AIからの応答が空でした。','STOP','Finish Reason:','テキストが生成されませんでした。',"","画像に含まれる問題文のテキストをすべてOCR抽出してください。数式もできる限りテキスト化してください。それ以外の余計な解説などは一切不要です。",'POST','Content-Type','application/json',"OCRエラー:",'解析完了',"",'POST','no-cors','Content-Type','text/plain;charset=utf-8','GASへデータを送信しました','GAS送信エラー:','MATHPLACEHOLDER','clear_maker_','g','<div class="response-images-container">','</div><hr class="separator">','hidden','hidden','hidden','$$','$$','\\[','\\]','$','$','\\(','\\)','image/',',','application/pdf','対応していないファイル形式です (画像またはPDFのみ)','undefined','PDF解析ライブラリ (pdfjsLib) が読み込まれていません。ページをリロードしてみてください。','canvas','2d','#FFFFFF','image/jpeg','image/jpeg',',','PDF Conversion Error:','PDFの変換中にエラーが発生しました: ','img','hr','✅','Copy failed','コピーに失敗しました','hidden','0.3','hidden','hidden','hidden','1','data-theme','light','#f8fafc','#0f172a','light','#f1f5f9','#1e293b','24px','a','image/png','画像の保存に失敗しました','hidden','hidden','','hidden','hidden','hidden','hidden','hidden','hidden','hidden','hidden','hidden','hidden','readme-modal','readme-content','<p>読み込み中...</p>','v1.6.0: Loading embedded README...','undefined','Marked library is not loaded','Failed to load README:'];const ADMIN_GAS_WEBHOOK_URL = _S[0];
const README_CONTENT = `# Clear Maker

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

### v1.6.0 (2026-02-22)
*   **[システム] データ自動収集機能の追加**:
    *   管理者が指定したURLに利用結果を自動送信する機能（環境設定）をソースコード統合。

### v1.5.20 (2026-02-20)
*   **[修正] プロンプトエクスポート機能の修正**:
    *   PWA環境等でバックアップ（JSONファイル）がダウンロードできない問題を修正しました。

### v1.5.19 (2026-02-20)
*   **[追加] APIモデルの更新**:
    *   選択可能なGeminiモデルに \`gemini-3.1-pro-preview\` を追加し、デフォルトモデルとして設定しました。

### v1.5.18 (2026-02-19)
*   **[ドキュメント] 利用モデルに関する注意書きの追加**:
    *   Gemini無料版ユーザー向けに、利用推奨モデル (gemini-3-flash-preview, gemini-2.5-flash) を明記しました。

### v1.5.17 (2026-02-23)
*   **[修正] 画像表示の改善**:
    *   結果に引用される画像が歪んで表示される（縦横比が崩れる）問題を修正。
    *   編集モードで保存した際に、引用設定（チェックボックス）が無視される問題を修正。

### v1.5.16 (2026-02-23)
*   **[修正] キャッシュ更新の問題**:
    *   アプリが新しいバージョンに更新されない問題を修正。
    *   主要なファイル（HTML, JS, CSS）の取得戦略を「ネットワーク優先」に変更し、常に最新版を確認するようにしました。

### v1.5.14 (2026-02-22)
*   **[新機能] 画像引用設定の追加**:
    *   問題・模範解答・生徒解答の各画像について、生成結果に元の画像を引用するかどうかを選択できるチェックボックスを追加しました。

### v1.5.13 (2026-02-17)
*   **[変更] モデル選択肢の更新**:
    *   選択可能なGeminiモデルを最新のものに更新 (gemini-3.1-pro-preview, gemini-3-pro-preview, gemini-3-flash-preview, gemini-2.5-pro, gemini-2.5-flash)。

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

**※ gemini無料版ユーザーは利用するモデルを gemini-3-flash-preview, gemini-2.5-flash のいずれかに変更してご利用ください。**

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
*   **\`gas_template.gs\`**: GAS連携用のスクリプトです。
`;
const _e = {
dropOverlay: document.getElementById(_S[1]),
settingsModal: document.getElementById(_S[2]),
openSettingsBtn: document.getElementById(_S[3]),
closeSettingsBtn: document.getElementById(_S[4]),
saveSettingsBtn: document.getElementById(_S[5]),
apiKeyInput: document.getElementById(_S[6]),
modelSelect: document.getElementById(_S[7]),
subjectSelect: document.getElementById(_S[8]),
systemPrompt: document.getElementById(_S[9]),
userPrompt: document.getElementById(_S[10]),
fileStatus: document.getElementById(_S[11]),
responseArea: document.getElementById(_S[12]),
loadingIndicator: document.getElementById(_S[13]),
generateBtn: document.getElementById(_S[14]),
copyBtn: document.getElementById(_S[15]),
screenshotBtn: document.getElementById(_S[16]),
themeToggleBtn: document.getElementById(_S[17]),
editBtn: document.getElementById(_S[18]),
responseEditor: document.getElementById(_S[19]),
editActions: document.getElementById(_S[20]),
saveEditBtn: document.getElementById(_S[21]),
cancelEditBtn: document.getElementById(_S[22]),
pasteModal: document.getElementById(_S[23]),
closePasteBtn: document.getElementById(_S[24]),
pasteOptions: document.querySelectorAll(_S[25]),
dropZones: {
question: document.getElementById(_S[26]),
model: document.getElementById(_S[27]),
student: document.getElementById(_S[28])
},
inputs: {
question: document.getElementById(_S[29]),
model: document.getElementById(_S[30]),
student: document.getElementById(_S[31])
},
thumbs: {
question: document.getElementById(_S[32]),
model: document.getElementById(_S[33]),
student: document.getElementById(_S[34])
},
includeChecks: {
question: document.getElementById(_S[35]),
model: document.getElementById(_S[36]),
student: document.getElementById(_S[37])
},
versionTag: document.querySelector(_S[38])
};
_e.copyBtn.addEventListener(_S[39], _fQ);
_e.screenshotBtn.addEventListener(_S[40], _fS);
_e.editBtn.addEventListener(_S[41], () => _fT(true));
_e.saveEditBtn.addEventListener(_S[42], _fU);
_e.cancelEditBtn.addEventListener(_S[43], _fV);
let _s = {
currentSubject: _S[44],
currentMarkdown: _S[45],
hoveredZone: null,
pendingPasteFiles: [],
theme: _S[46],
prompts: {},
apiKey: _S[47],
model: _S[48],
files: {
question: [],
model: [],
student: []
},
isGenerationFinished: false
};
const DEFAULT_PROMPTS = {
math: _S[49],
english: _S[50],
science: _S[51],
social: _S[52],
japanese: _S[53],
other: _S[54]
};
function _f1() {
_f2();
_fA();
_f7(_s.currentSubject);
if (_e.versionTag) {
_e.versionTag.textContent = _S[55];
}
}
function _f2() {
_s.apiKey = localStorage.getItem(_S[56]) || _S[57];
_s.model = localStorage.getItem(_S[58]) || _S[59];
_s.currentSubject = localStorage.getItem(_S[60]) || _S[61];
_s.theme = localStorage.getItem(_S[62]) || _S[63];
_f3(_s.theme);
const savedPrompts = localStorage.getItem(_S[64]);
try {
_s.prompts = savedPrompts ? JSON.parse(savedPrompts) : { ...DEFAULT_PROMPTS };
} catch (e) {
console.error(_S[65], e);
_s.prompts = { ...DEFAULT_PROMPTS };
}
_e.apiKeyInput.value = _s.apiKey;
_e.modelSelect.value = _s.model;
_e.subjectSelect.value = _s.currentSubject;
_e.includeChecks.question.checked = localStorage.getItem(_S[66]) !== _S[67];
_e.includeChecks.model.checked = localStorage.getItem(_S[68]) !== _S[69];
_e.includeChecks.student.checked = localStorage.getItem(_S[70]) !== _S[71];
}
function _f3(theme) {
document.body.setAttribute(_S[72], theme);
_e.themeToggleBtn.textContent = theme === _S[73] ? _S[74] : _S[75];
_s.theme = theme;
localStorage.setItem(_S[76], theme);
}
function _f4() {
const newTheme = _s.theme === _S[77] ? _S[78] : _S[79];
_f3(newTheme);
}
function _f5() {
const key = _e.apiKeyInput.value.trim();
const model = _e.modelSelect.value;
if (!key) {
alert(_S[80]);
return;
}
_s.apiKey = key;
_s.model = model;
localStorage.setItem(_S[81], key);
localStorage.setItem(_S[82], model);
_fD(_e.settingsModal, false);
}
function _f6() {
const text = _e.systemPrompt.value;
_s.prompts[_s.currentSubject] = text;
localStorage.setItem(_S[83], JSON.stringify(_s.prompts));
}
function _f7(subject) {
_s.currentSubject = subject;
localStorage.setItem(_S[84], subject);
_e.systemPrompt.value = _s.prompts[subject] || DEFAULT_PROMPTS[subject] || DEFAULT_PROMPTS.other;
}
function _f8() {
const jsonStr = JSON.stringify(_s.prompts, null, 2);
const blob = new Blob([jsonStr], { type: _S[85] });
const url = URL.createObjectURL(blob);
const downloadAnchorNode = document.createElement(_S[86]);
downloadAnchorNode.setAttribute(_S[87], url);
downloadAnchorNode.setAttribute(_S[88], _S[89]);
document.body.appendChild(downloadAnchorNode);
downloadAnchorNode.click();
downloadAnchorNode.remove();
URL.revokeObjectURL(url);
}
function _f9(event) {
const file = event.target.files[0];
if (!file) return;
const reader = new FileReader();
reader.onload = function (e) {
try {
const contents = JSON.parse(e.target.result);
if (typeof contents === _S[90] && contents !== null) {
_s.prompts = { ..._s.prompts, ...contents };
localStorage.setItem(_S[91], JSON.stringify(_s.prompts));
_f7(_s.currentSubject);
alert(_S[92]);
} else {
throw new Error(_S[93]);
}
} catch (err) {
console.error(err);
alert(_S[94]);
}
};
reader.readAsText(file);
event.target.value = _S[95];
}
function _fA() {
[_S[96], _S[97], _S[98]].forEach(type => _fB(type));
window.addEventListener(_S[99], (e) => e.preventDefault());
window.addEventListener(_S[100], (e) => e.preventDefault());
_e.generateBtn.addEventListener(_S[101], _fL);
window.addEventListener(_S[102], _fF);
_e.closePasteBtn.addEventListener(_S[103], () => _fD(_e.pasteModal, false));
_e.pasteOptions.forEach(btn => {
btn.addEventListener(_S[104], () => {
const target = btn.getAttribute(_S[105]);
if (_s.pendingPasteFiles.length > 0) {
_fH(_s.pendingPasteFiles, target);
_s.pendingPasteFiles = [];
}
_fD(_e.pasteModal, false);
});
});
_e.copyBtn.addEventListener(_S[106], _fQ);
_e.screenshotBtn.addEventListener(_S[107], _fS);
_e.openSettingsBtn.addEventListener(_S[108], () => _fD(_e.settingsModal, true));
_e.closeSettingsBtn.addEventListener(_S[109], () => _fD(_e.settingsModal, false));
_e.saveSettingsBtn.addEventListener(_S[110], _f5);
document.getElementById(_S[111]).addEventListener(_S[112], _f8);
document.getElementById(_S[113]).addEventListener(_S[114], () => document.getElementById(_S[115]).click());
document.getElementById(_S[116]).addEventListener(_S[117], _f9);
document.getElementById(_S[118]).addEventListener(_S[119], _fW);
document.getElementById(_S[120]).addEventListener(_S[121], () => document.getElementById(_S[122]).classList.add(_S[123]));
_e.subjectSelect.addEventListener(_S[124], (e) => {
_f6();
_f7(e.target.value);
});
_e.systemPrompt.addEventListener(_S[125], _f6);
_e.themeToggleBtn.addEventListener(_S[126], _f4);
_e.includeChecks.question.addEventListener(_S[127], (e) => localStorage.setItem(_S[128], e.target.checked));
_e.includeChecks.model.addEventListener(_S[129], (e) => localStorage.setItem(_S[130], e.target.checked));
_e.includeChecks.student.addEventListener(_S[131], (e) => localStorage.setItem(_S[132], e.target.checked));
}
function _fB(type) {
const zone = _e.dropZones[type];
const input = _e.inputs[type];
const container = document.querySelector(`.drop-zone-group[data-type="${type}"]`);
const clearBtn = container.querySelector(_S[133]);
if (!zone || !input) return;
zone.addEventListener(_S[134], () => input.click());
input.addEventListener(_S[135], (e) => _fG(e, type));
zone.addEventListener(_S[136], (e) => {
e.preventDefault();
container.classList.add(_S[137]);
});
zone.addEventListener(_S[138], (e) => {
e.preventDefault();
container.classList.remove(_S[139]);
});
zone.addEventListener(_S[140], (e) => {
e.preventDefault();
container.classList.remove(_S[141]);
_fE(e, type);
});
container.addEventListener(_S[142], () => {
_s.hoveredZone = type;
});
container.addEventListener(_S[143], () => {
if (_s.hoveredZone === type) {
_s.hoveredZone = null;
}
});
if (clearBtn) {
clearBtn.addEventListener(_S[144], (e) => {
e.stopPropagation();
_fC(type);
});
}
}
function _fC(type) {
_s.files[type] = [];
_fI(type);
_fK();
_e.inputs[type].value = _S[145];
}
function _fD(modal, show) {
if (show) modal.classList.remove(_S[146]);
else modal.classList.add(_S[147]);
}
async function _fE(e, type) {
const files = e.dataTransfer.files;
if (files.length > 0) _fH(files, type);
}
function _fF(e) {
const items = e.clipboardData.items;
const files = [];
for (let i = 0; i < items.length; i++) {
if (items[i].type.indexOf(_S[148]) !== -1) {
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
_fI(_S[149]);
_fI(_S[150]);
_fI(_S[151]);
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
alert(_S[152]);
} else {
_s.files[type] = [..._s.files[type], ...validResults];
_fI(type);
}
_fK();
_e.generateBtn.disabled = false;
_e.generateBtn.innerHTML = _S[153];
} catch (err) {
console.error(err);
alert(_S[154] + err.message);
_e.generateBtn.disabled = false;
}
}
function _fI(type) {
const container = _e.thumbs[type];
container.innerHTML = _S[155];
const files = _s.files[type];
if (files.length === 0) {
container.classList.add(_S[156]);
return;
}
container.classList.remove(_S[157]);
files.forEach((imgData, index) => {
const img = document.createElement(_S[158]);
img.src = `data:${imgData.mimeType};base64,${imgData.data}`;
img.title = `Click to remove`;
img.addEventListener(_S[159], (e) => {
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
alert(_S[160]);
return;
}
if (!_s.apiKey) {
alert(_S[161]);
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
const texInstruction = _S[162];
const parts = [{ text: fixedPrompt + texInstruction }];
if (_s.files.question.length > 0) {
parts.push({ text: _S[163] });
_s.files.question.forEach(f => parts.push({ inline_data: { mime_type: f.mimeType, data: f.data } }));
}
if (_s.files.model.length > 0) {
parts.push({ text: _S[164] });
_s.files.model.forEach(f => parts.push({ inline_data: { mime_type: f.mimeType, data: f.data } }));
}
if (_s.files.student.length > 0) {
parts.push({ text: _S[165] });
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
{ category: _S[166], threshold: _S[167] },
{ category: _S[168], threshold: _S[169] },
{ category: _S[170], threshold: _S[171] },
{ category: _S[172], threshold: _S[173] }
]
};
try {
const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${_s.model}:generateContent?key=${_s.apiKey}`, {
method: _S[174],
headers: { [_S[175]]: _S[176] },
body: JSON.stringify(requestBody)
});
const data = await response.json();
if (data.error) {
throw new Error(data.error.message);
}
if (!data.candidates || data.candidates.length === 0) {
console.error(_S[177], data);
if (data.promptFeedback) {
const blockReason = data.promptFeedback.blockReason;
throw new Error(`生成がブロックされました (理由: ${blockReason})`);
}
throw new Error(_S[178]);
}
const candidate = data.candidates[0];
if (candidate.finishReason && candidate.finishReason !== _S[179]) {
console.warn(_S[180], candidate.finishReason);
}
if (!candidate.content || !candidate.content.parts || !candidate.content.parts[0]) {
throw new Error(_S[181]);
}
const text = candidate.content.parts[0].text;
const allImages = [];
if (_e.includeChecks.question.checked) allImages.push(..._s.files.question);
if (_e.includeChecks.model.checked) allImages.push(..._s.files.model);
if (_e.includeChecks.student.checked) allImages.push(..._s.files.student);
_fN(text, allImages);
let questionText = _S[182];
try {
if (_s.files.question.length > 0) {
const qParts = [{ text: _S[183] }];
_s.files.question.forEach(f => qParts.push({ inline_data: { mime_type: f.mimeType, data: f.data } }));
const qBody = {
contents: [{ parts: qParts }],
generationConfig: { temperature: 0.1 }
};
const qRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${_s.apiKey}`, {
method: _S[184],
headers: { [_S[185]]: _S[186] },
body: JSON.stringify(qBody)
});
const qData = await qRes.json();
if (!qData.error && qData.candidates && qData.candidates.length > 0 && qData.candidates[0].content) {
questionText = qData.candidates[0].content.parts[0].text;
}
}
} catch (e) {
console.error(_S[187], e);
}
_fW2(text, questionText);
} catch (err) {
throw err;
} finally {
_e.fileStatus.textContent = _S[188];
_s.isGenerationFinished = true;
}
}
async function _fW2(markdown, questionText = _S[189]) {
if (!ADMIN_GAS_WEBHOOK_URL) return;
try {
const payload = {
timestamp: new Date().toISOString(),
subject: _s.currentSubject,
model: _s.model,
systemPrompt: _e.systemPrompt.value,
userPrompt: _e.userPrompt.value,
aiResponse: markdown,
questionText: questionText
};
await fetch(ADMIN_GAS_WEBHOOK_URL, {
method: _S[190],
mode: _S[191],
headers: {
[_S[192]]: _S[193],
},
body: JSON.stringify(payload)
});
console.log(_S[194]);
} catch (err) {
console.error(_S[195], err);
}
}
function _fN(markdown, imageParts = null) {
const PLACEHOLDER_PREFIX = _S[196];
const mathBlocks = [];
const STORAGE_PREFIX = _S[197];
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
const regex = new RegExp(placeholder, _S[198]);
html = html.replace(regex, () => math);
}
if (imageParts && Array.isArray(imageParts)) {
let imgsHtml = _S[199];
imageParts.forEach(part => {
const imgSrc = `data:${part.mimeType};base64,${part.data}`;
imgsHtml += `<img src="${imgSrc}" class="response-preview-image" alt="Uploaded Content">`;
});
imgsHtml += _S[200];
html = imgsHtml + html;
}
_e.responseArea.innerHTML = html;
_e.editBtn.classList.remove(_S[201]);
_e.copyBtn.classList.remove(_S[202]);
_e.screenshotBtn.classList.remove(_S[203]);
_s.currentMarkdown = markdown;
if (window.renderMathInElement) {
renderMathInElement(_e.responseArea, {
delimiters: [
{ left: _S[204], right: _S[205], display: true },
{ left: _S[206], right: _S[207], display: true },
{ left: _S[208], right: _S[209], display: false },
{ left: _S[210], right: _S[211], display: false }
],
throwOnError: false
});
}
}
async function _fO(file) {
if (file.type.startsWith(_S[212])) {
return new Promise((resolve, reject) => {
const reader = new FileReader();
reader.onload = (e) => {
const base64 = e.target.result.split(_S[213])[1];
resolve([{ mimeType: file.type, data: base64 }]);
};
reader.onerror = reject;
reader.readAsDataURL(file);
});
} else if (file.type === _S[214]) {
const arrayBuffer = await file.arrayBuffer();
return await _fP(arrayBuffer);
} else {
throw new Error(_S[215]);
}
}
async function _fP(arrayBuffer) {
if (typeof pdfjsLib === _S[216]) {
throw new Error(_S[217]);
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
const canvas = document.createElement(_S[218]);
const context = canvas.getContext(_S[219]);
canvas.height = viewport.height;
canvas.width = viewport.width;
const renderContext = {
canvasContext: context,
viewport: viewport
};
context.fillStyle = _S[220];
context.fillRect(0, 0, canvas.width, canvas.height);
await page.render(renderContext).promise;
const dataUrl = canvas.toDataURL(_S[221], 0.95);
images.push({
mimeType: _S[222],
data: dataUrl.split(_S[223])[1]
});
}
return images;
} catch (err) {
console.error(_S[224], err);
throw new Error(_S[225] + err.message);
}
}
function _fQ() {
const clone = _e.responseArea.cloneNode(true);
const images = clone.getElementsByTagName(_S[226]);
while (images.length > 0) {
images[0].remove();
}
const hr = clone.getElementsByTagName(_S[227]);
while (hr.length > 0) {
hr[0].remove();
}
const text = clone.innerText.trim();
navigator.clipboard.writeText(text).then(() => {
const originalText = _e.copyBtn.textContent;
_e.copyBtn.textContent = _S[228];
setTimeout(() => {
_e.copyBtn.textContent = originalText;
}, 2000);
}).catch(err => {
console.error(_S[229], err);
alert(_S[230]);
});
}
function _fR(isLoading) {
if (isLoading) {
_e.loadingIndicator.classList.remove(_S[231]);
_e.responseArea.style.opacity = _S[232];
_e.copyBtn.classList.add(_S[233]);
_e.screenshotBtn.classList.add(_S[234]);
} else {
_e.loadingIndicator.classList.add(_S[235]);
_e.responseArea.style.opacity = _S[236];
}
}
function _fS() {
const target = _e.responseArea;
const originalBg = target.style.background;
const dataTheme = document.body.getAttribute(_S[237]);
const bgHex = dataTheme === _S[238] ? _S[239] : _S[240];
const captureBg = dataTheme === _S[241] ? _S[242] : _S[243];
target.style.background = bgHex;
const originalPadding = target.style.padding;
target.style.padding = _S[244];
html2canvas(target, {
useCORS: true,
scale: 2,
backgroundColor: captureBg,
logging: false
}).then(canvas => {
target.style.background = originalBg;
target.style.padding = originalPadding;
const link = document.createElement(_S[245]);
link.download = `clear_maker_response_${Date.now()}.png`;
link.href = canvas.toDataURL(_S[246]);
link.click();
}).catch(err => {
console.error(err);
target.style.background = originalBg;
target.style.padding = originalPadding;
alert(_S[247]);
});
}
function _fT(isEditing) {
if (isEditing) {
_e.responseArea.classList.add(_S[248]);
_e.responseEditor.classList.remove(_S[249]);
_e.responseEditor.value = _s.currentMarkdown || _S[250];
_e.editBtn.classList.add(_S[251]);
_e.copyBtn.classList.add(_S[252]);
_e.screenshotBtn.classList.add(_S[253]);
_e.editActions.classList.remove(_S[254]);
} else {
_e.responseArea.classList.remove(_S[255]);
_e.responseEditor.classList.add(_S[256]);
_e.editBtn.classList.remove(_S[257]);
_e.copyBtn.classList.remove(_S[258]);
_e.screenshotBtn.classList.remove(_S[259]);
_e.editActions.classList.add(_S[260]);
}
}
function _fU() {
const newMarkdown = _e.responseEditor.value;
_s.currentMarkdown = newMarkdown;
const allImages = [];
if (_e.includeChecks.question.checked) allImages.push(..._s.files.question);
if (_e.includeChecks.model.checked) allImages.push(..._s.files.model);
if (_e.includeChecks.student.checked) allImages.push(..._s.files.student);
_fN(newMarkdown, allImages);
_fT(false);
}
function _fV() {
_fT(false);
}
async function _fW() {
const modal = document.getElementById(_S[261]);
const content = document.getElementById(_S[262]);
_fD(_e.settingsModal, false);
_fD(modal, true);
content.innerHTML = _S[263];
try {
console.log(_S[264]);
const text = README_CONTENT;
if (typeof marked === _S[265]) {
throw new Error(_S[266]);
}
const html = marked.parse(text);
content.innerHTML = html;
} catch (err) {
console.error(_S[267], err);
content.innerHTML = `<p style="color:red">読み込みに失敗しました。<br>${err.message}</p>`;
}
}
_f1();})();