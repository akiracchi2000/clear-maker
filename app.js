
// DOM Elements
const elements = {
    dropOverlay: document.getElementById('drop-overlay'),
    settingsModal: document.getElementById('settings-modal'),
    openSettingsBtn: document.getElementById('open-settings'),
    closeSettingsBtn: document.getElementById('close-settings'),
    saveSettingsBtn: document.getElementById('save-settings'),
    apiKeyInput: document.getElementById('api-key'),
    modelSelect: document.getElementById('model-select'),
    subjectSelect: document.getElementById('subject-select'),
    systemPrompt: document.getElementById('system-prompt'),
    userPrompt: document.getElementById('user-prompt'),
    fileStatus: document.getElementById('file-status'),
    responseArea: document.getElementById('response-area'),
    loadingIndicator: document.getElementById('loading-indicator'),
    generateBtn: document.getElementById('generate-btn'),
    copyBtn: document.getElementById('copy-btn'),
    screenshotBtn: document.getElementById('screenshot-btn'),
    themeToggleBtn: document.getElementById('theme-toggle'),
    editBtn: document.getElementById('edit-btn'),
    responseEditor: document.getElementById('response-editor'),
    editActions: document.getElementById('edit-actions'),
    saveEditBtn: document.getElementById('save-edit-btn'),
    cancelEditBtn: document.getElementById('cancel-edit-btn'),
    // Drop Zones (Dynamic access via helpers preferred, but listing for clarity)
    dropZones: {
        question: document.getElementById('drop-zone-question'),
        model: document.getElementById('drop-zone-model'),
        student: document.getElementById('drop-zone-student')
    },
    inputs: {
        question: document.getElementById('file-input-question'),
        model: document.getElementById('file-input-model'),
        student: document.getElementById('file-input-student')
    },
    thumbs: {
        question: document.getElementById('thumbnails-question'),
        model: document.getElementById('thumbnails-model'),
        student: document.getElementById('thumbnails-student')
    }
};

// ... (listeners setup) ...

// Copy Button
// Copy & Edit Buttons
elements.copyBtn.addEventListener('click', copyResponse);
elements.screenshotBtn.addEventListener('click', saveAsImage);
elements.editBtn.addEventListener('click', () => toggleEditMode(true));
elements.saveEditBtn.addEventListener('click', saveEdit);
elements.cancelEditBtn.addEventListener('click', cancelEdit);

// ... (renderOutput update) ...



// State
let state = {
    currentSubject: 'other',
    currentMarkdown: '', // Added for edit mode
    theme: 'dark', // 'dark' or 'light'
    prompts: {}, // { subject: promptString }
    apiKey: '',
    model: 'gemini-3-pro-preview',
    // New File State
    files: {
        question: [],
        model: [],
        student: []
    },
    isGenerationFinished: false // Flag for auto-clear
};

// Default Prompts
const DEFAULT_PROMPTS = {
    math: "あなたは数学の専門教師です。与えられた数学の問題画像を解析し、生徒に分かりやすく解説してください。\n\n# 出力形式\n1. **答え**: [答え]\n2. **解説**: [詳細なステップバイステップ解決策]\n3. **ポイント**: [解法のコツや公式]",
    english: "あなたは英語の教師です。与えられた英文や問題を解析し、和訳や文法解説を行ってください。",
    science: "あなたは理科の教師です。与えられた問題を解析し、科学的な根拠に基づいて解説してください。",
    social: "あなたは社会科の教師です。歴史、地理、公民などの問題を背景知識とともに解説してください。",
    japanese: "あなたは国語の教師です。現代文、古文、漢文などの問題を解析し、読解のポイントを解説してください。",
    other: "あなたは優秀な家庭教師です。与えられた画像を解析し、生徒の質問に答えてください。"
};

// Initialization
function init() {
    loadSettings();
    setupEventListeners();
    updatePromptField(state.currentSubject);
}

function loadSettings() {
    state.apiKey = localStorage.getItem('gemini_api_key') || '';
    state.model = localStorage.getItem('gemini_model') || 'gemini-3-pro-preview';
    state.currentSubject = localStorage.getItem('current_subject') || 'other';

    // Load Theme
    state.theme = localStorage.getItem('theme') || 'dark';
    applyTheme(state.theme);

    // Load prompts
    const savedPrompts = localStorage.getItem('subject_prompts');
    state.prompts = savedPrompts ? JSON.parse(savedPrompts) : { ...DEFAULT_PROMPTS };

    // Fill Settings Form
    elements.apiKeyInput.value = state.apiKey;
    elements.modelSelect.value = state.model;
    elements.subjectSelect.value = state.currentSubject;
}

function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    elements.themeToggleBtn.textContent = theme === 'dark' ? '🌙' : '☀️';
    state.theme = theme;
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const newTheme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

function saveSettings() {
    const key = elements.apiKeyInput.value.trim();
    const model = elements.modelSelect.value;

    if (!key) {
        alert('API Keyを入力してください');
        return;
    }

    state.apiKey = key;
    state.model = model;

    localStorage.setItem('gemini_api_key', key);
    localStorage.setItem('gemini_model', model);

    toggleModal(elements.settingsModal, false);
}

function saveCurrentPrompt() {
    const text = elements.systemPrompt.value;
    state.prompts[state.currentSubject] = text;
    localStorage.setItem('subject_prompts', JSON.stringify(state.prompts));
}

function updatePromptField(subject) {
    state.currentSubject = subject;
    localStorage.setItem('current_subject', subject);
    elements.systemPrompt.value = state.prompts[subject] || DEFAULT_PROMPTS[subject] || DEFAULT_PROMPTS.other;
}

function exportPrompts() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.prompts, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "clear_maker_prompts.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function importPrompts(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const contents = JSON.parse(e.target.result);
            if (typeof contents === 'object' && contents !== null) {
                // Merge or Overwrite? Let's overwrite prompts but keep structure safe
                state.prompts = { ...state.prompts, ...contents };
                localStorage.setItem('subject_prompts', JSON.stringify(state.prompts));

                // Update current view
                updatePromptField(state.currentSubject);
                alert('プロンプト設定を復元しました！');
            } else {
                throw new Error('Invalid JSON structure');
            }
        } catch (err) {
            console.error(err);
            alert('ファイルの読み込みに失敗しました。正しいJSONファイルか確認してください。');
        }
    };
    reader.readAsText(file);
    event.target.value = ''; // Reset input to allow re-importing same file
}

// Event Listeners
function setupEventListeners() {
    // Drop Zone Setup
    ['question', 'model', 'student'].forEach(type => setupDropZone(type));

    // Global Drag & Drop Prevention (Prevents browser from opening file on miss-drop)
    window.addEventListener('dragover', (e) => e.preventDefault());
    window.addEventListener('drop', (e) => e.preventDefault());

    // Generate Button
    elements.generateBtn.addEventListener('click', executeGeneration);

    // Copy Button
    elements.copyBtn.addEventListener('click', copyResponse);
    elements.screenshotBtn.addEventListener('click', saveAsImage);

    // Settings Modal
    elements.openSettingsBtn.addEventListener('click', () => toggleModal(elements.settingsModal, true));
    elements.closeSettingsBtn.addEventListener('click', () => toggleModal(elements.settingsModal, false));
    elements.saveSettingsBtn.addEventListener('click', saveSettings);

    // Prompt Backup/Restore
    document.getElementById('export-prompts-btn').addEventListener('click', exportPrompts);
    document.getElementById('import-prompts-btn').addEventListener('click', () => document.getElementById('import-prompts-input').click());
    document.getElementById('import-prompts-input').addEventListener('change', importPrompts);

    // Subject Change
    elements.subjectSelect.addEventListener('change', (e) => {
        saveCurrentPrompt(); // Save previous
        updatePromptField(e.target.value);
    });

    // Prompt Edit (Auto-save)
    elements.systemPrompt.addEventListener('input', saveCurrentPrompt);

    // Theme Toggle
    elements.themeToggleBtn.addEventListener('click', toggleTheme);
}

function setupDropZone(type) {
    const zone = elements.dropZones[type];
    const input = elements.inputs[type];
    const container = document.querySelector(`.drop-zone-group[data-type="${type}"]`);
    const clearBtn = container.querySelector('.clear-zone-btn');

    if (!zone || !input) return;

    // Click to select
    zone.addEventListener('click', () => input.click());

    // File Input Change
    input.addEventListener('change', (e) => handleFileSelect(e, type));

    // Drag Over
    zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        container.classList.add('active');
    });

    // Drag Leave
    zone.addEventListener('dragleave', (e) => {
        e.preventDefault();
        container.classList.remove('active');
    });

    // Drop
    zone.addEventListener('drop', (e) => {
        e.preventDefault();
        container.classList.remove('active');
        handleDrop(e, type);
    });

    // Clear Button
    if (clearBtn) {
        clearBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering zone click
            clearZone(type);
        });
    }
}

function clearZone(type) {
    state.files[type] = [];
    renderThumbnails(type);
    updateFileStatus();
    // Clear input value so same file can be selected again if needed
    elements.inputs[type].value = '';
}

function toggleModal(modal, show) {
    if (show) modal.classList.remove('hidden');
    else modal.classList.add('hidden');
}

async function handleDrop(e, type) {
    const files = e.dataTransfer.files;
    if (files.length > 0) processFiles(files, type);
}

function handleFileSelect(e, type) {
    const files = e.target.files;
    if (files.length > 0) processFiles(files, type);
}

async function processFiles(fileList, type) {
    const files = Array.from(fileList);
    if (files.length === 0) return;

    // Auto-clear if generation was just finished
    if (state.isGenerationFinished) {
        // Clear all files
        state.files.question = [];
        state.files.model = [];
        state.files.student = [];
        renderThumbnails('question');
        renderThumbnails('model');
        renderThumbnails('student');
        state.isGenerationFinished = false; // Reset flag
    }

    // Validate type again
    if (!type || !state.files[type]) {
        alert(`内部エラー: 不明なファイルカテゴリです (${type})`);
        return;
    }

    elements.generateBtn.disabled = true;

    try {
        const promises = files.map(file => {
            return readFile(file).catch(err => {
                console.error(`Skipped file ${file.name}:`, err);
                return null;
            });
        });

        const results = await Promise.all(promises);
        const validResults = results.filter(r => r !== null).flat();

        if (validResults.length === 0 && results.length > 0) {
            alert('ファイルの読み込みに失敗しました。');
        } else {
            // Append to specific state category
            state.files[type] = [...state.files[type], ...validResults];
            renderThumbnails(type);
        }

        updateFileStatus();
        elements.generateBtn.disabled = false;
        elements.generateBtn.innerHTML = '✨ 解析を実行';

    } catch (err) {
        console.error(err);
        alert('予期せぬエラーが発生しました: ' + err.message);
        elements.generateBtn.disabled = false;
    }
}

function renderThumbnails(type) {
    const container = elements.thumbs[type];
    container.innerHTML = '';
    const files = state.files[type];

    if (files.length === 0) {
        container.classList.add('hidden');
        return;
    }

    container.classList.remove('hidden');
    files.forEach((imgData, index) => {
        const img = document.createElement('img');
        img.src = `data:${imgData.mimeType};base64,${imgData.data}`;
        img.title = `Click to remove`;
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            removeFile(type, index);
        });
        container.appendChild(img);
    });
}

function removeFile(type, index) {
    state.files[type].splice(index, 1);
    renderThumbnails(type);
    updateFileStatus();
}

function updateFileStatus() {
    const total = state.files.question.length + state.files.model.length + state.files.student.length;
    elements.fileStatus.textContent = `画像合計: ${total}枚 (問:${state.files.question.length}, 模範:${state.files.model.length}, 生徒:${state.files.student.length})`;
}

async function executeGeneration() {
    const totalFiles = state.files.question.length + state.files.model.length + state.files.student.length;
    if (totalFiles === 0) {
        alert('少なくとも1つの画像をアップロードしてください');
        return;
    }

    if (!state.apiKey) {
        alert('まずは右上の設定ボタン(⚙️)からAPIキーを設定してください。');
        toggleModal(elements.settingsModal, true);
        return;
    }

    if (!elements.userPrompt.value.trim()) {
        if (!confirm('追加プロンプトが入力されていませんが、解析を続行しますか？')) {
            elements.userPrompt.focus();
            return;
        }
    }

    setLoading(true);
    elements.generateBtn.disabled = true;

    try {
        await analyzeContent();
    } catch (err) {
        console.error(err);
        renderOutput(`### エラーが発生しました\n\`\`\`\n${err.message}\n\`\`\``);
    } finally {
        setLoading(false);
        elements.generateBtn.disabled = false;
    }
}

async function analyzeContent() {
    const fixedPrompt = elements.systemPrompt.value;
    const additionalPrompt = elements.userPrompt.value;

    const texInstruction = "\n\n【重要】\n・数式は必ずLaTeX形式（$...$ または $$...$$）で記述してください。\n・行内数式は $...$ で、独立数式は $$...$$ で囲んでください。\n・特に複数行の数式（aligned環境など）を使う場合は、必ず $$ \\begin{aligned} ... \\end{aligned} $$ のように全体を $$ で囲んでください。";

    // Construct Parts
    const parts = [{ text: fixedPrompt + texInstruction }];

    // 1. Question
    if (state.files.question.length > 0) {
        parts.push({ text: "\n\n## 問題画像" });
        state.files.question.forEach(f => parts.push({ inline_data: { mime_type: f.mimeType, data: f.data } }));
    }

    // 2. Model Answer
    if (state.files.model.length > 0) {
        parts.push({ text: "\n\n## 模範解答画像" });
        state.files.model.forEach(f => parts.push({ inline_data: { mime_type: f.mimeType, data: f.data } }));
    }

    // 3. Student Answer
    if (state.files.student.length > 0) {
        parts.push({ text: "\n\n## 生徒の解答画像" });
        state.files.student.forEach(f => parts.push({ inline_data: { mime_type: f.mimeType, data: f.data } }));
    }

    // User Instruction
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
            { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
        ]
    };

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${state.model}:generateContent?key=${state.apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message);
        }

        if (!data.candidates || data.candidates.length === 0) {
            console.error('API Response Unexpected:', data);
            if (data.promptFeedback) {
                const blockReason = data.promptFeedback.blockReason;
                throw new Error(`生成がブロックされました (理由: ${blockReason})`);
            }
            throw new Error('AIからの応答が空でした。');
        }

        const candidate = data.candidates[0];
        if (candidate.finishReason && candidate.finishReason !== 'STOP') {
            // Basic finish reason handling
            console.warn('Finish Reason:', candidate.finishReason);
        }

        if (!candidate.content || !candidate.content.parts || !candidate.content.parts[0]) {
            throw new Error('テキストが生成されませんでした。');
        }

        const text = candidate.content.parts[0].text;

        // Pass all images for display in result
        const allImages = [...state.files.question, ...state.files.model, ...state.files.student];
        renderOutput(text, allImages);

    } catch (err) {
        // Re-throw to be caught by executeGeneration
        throw err;
    } finally {
        elements.fileStatus.textContent = '解析完了';
        state.isGenerationFinished = true; // Set flag
    }
}

function renderOutput(markdown, imageParts = null) {
    // Placeholder strategy:
    // 1. Extract all Math blocks and replace with placeholders
    // 2. Parse Markdown
    // 3. Restore Math blocks

    // Use alphanumeric placeholder to avoid Markdown formatting issues
    // Use delimiters to avoid partial matching (e.g. PLACEHOLDER1 matching PLACEHOLDER10)
    const PLACEHOLDER_PREFIX = 'MATHPLACEHOLDER';
    const mathBlocks = [];

    // Helper to store match and return placeholder
    const storeMath = (match) => {
        const placeholder = `${PLACEHOLDER_PREFIX}${mathBlocks.length}`;
        mathBlocks.push(match);
        return placeholder;
    };

    let processedMarkdown = markdown;

    // Detect $$...$$
    processedMarkdown = processedMarkdown.replace(
        /\$\$([\s\S]*?)\$\$/g,
        (match) => storeMath(match)
    );

    // Detect \[...\]
    processedMarkdown = processedMarkdown.replace(
        /\\\[([\s\S]*?)\\\]/g,
        (match) => storeMath(match)
    );

    // Detect \(...\)
    processedMarkdown = processedMarkdown.replace(
        /\\\(([\s\S]*?)\\\)/g,
        (match) => storeMath(match)
    );

    // Detect $...$ (Inline, be careful not to match simple currency)
    // We assume $...$ with no spaces around $ 
    // or simply $...$ but non-greedy.
    // Simplified regex: $(not $)...$
    processedMarkdown = processedMarkdown.replace(
        /\$([^$\n]+?)\$/g,
        (match) => storeMath(match)
    );

    // Detect standalone environments: \begin{env}...\end{env}
    // We treat them as Display Math ($$...$$)
    // IMPORTANT: This must come LAST to avoid wrapping environments that were already captured by $$...$$ above
    processedMarkdown = processedMarkdown.replace(
        /(\\begin\{([a-z]+)\*?\}([\s\S]*?)\\end\{\2\*?\})/g,
        (match) => {
            return storeMath(`$$${match}$$`);
        }
    );

    let html = marked.parse(processedMarkdown, { breaks: true });

    // Restore Math blocks
    // IMPORTANT: Process in reverse order to avoid prefix matching issues (e.g. matching 1 inside 10)
    for (let i = mathBlocks.length - 1; i >= 0; i--) {
        const math = mathBlocks[i];
        const placeholder = `${PLACEHOLDER_PREFIX}${i}`;
        // Use global regex replacement for robustness
        const regex = new RegExp(placeholder, 'g');
        html = html.replace(regex, () => math);
    }

    if (imageParts && Array.isArray(imageParts)) {
        let imgsHtml = '<div class="response-images-container" style="display: flex; gap: 10px; overflow-x: auto; margin-bottom: 1rem;">';
        imageParts.forEach(part => {
            const imgSrc = `data:${part.mimeType};base64,${part.data}`;
            imgsHtml += `<img src="${imgSrc}" class="response-preview-image" alt="Uploaded Content" style="max-height: 200px; border-radius: 8px;">`;
        });
        imgsHtml += '</div><hr class="separator">';
        html = imgsHtml + html;
    }

    elements.responseArea.innerHTML = html;
    elements.editBtn.classList.remove('hidden');
    elements.copyBtn.classList.remove('hidden');
    elements.screenshotBtn.classList.remove('hidden');

    // Save current markdown for editing
    state.currentMarkdown = markdown;

    // Render Math with KaTeX
    if (window.renderMathInElement) {
        renderMathInElement(elements.responseArea, {
            delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '\\[', right: '\\]', display: true },
                { left: '$', right: '$', display: false },
                { left: '\\(', right: '\\)', display: false }
            ],
            throwOnError: false
        });
    }
}

async function readFile(file) {
    if (file.type.startsWith('image/')) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                // Remove prefix: data:image/png;base64,
                const base64 = e.target.result.split(',')[1];
                // Return as array for consistency with PDF multi-page
                resolve([{ mimeType: file.type, data: base64 }]);
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    } else if (file.type === 'application/pdf') {
        const arrayBuffer = await file.arrayBuffer();
        return await convertPdfToImage(arrayBuffer);
    } else {
        throw new Error('対応していないファイル形式です (画像またはPDFのみ)');
    }
}

async function convertPdfToImage(arrayBuffer) {
    if (typeof pdfjsLib === 'undefined') {
        throw new Error('PDF解析ライブラリ (pdfjsLib) が読み込まれていません。ページをリロードしてみてください。');
    }

    try {
        // Load PDF
        const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
        const pdf = await loadingTask.promise;

        const maxPages = pdf.numPages;
        const images = [];

        // Limit pages to avoid browser crash on huge PDFs
        const MAX_PAGES_TO_PROCESS = 10;
        const pagesToProcess = Math.min(maxPages, MAX_PAGES_TO_PROCESS);

        if (maxPages > MAX_PAGES_TO_PROCESS) {
            console.warn(`PDF has ${maxPages} pages. Only first ${MAX_PAGES_TO_PROCESS} will be processed.`);
            // Optional: alert user
        }

        for (let pageNum = 1; pageNum <= pagesToProcess; pageNum++) {
            const page = await pdf.getPage(pageNum);

            // Set scale for quality
            const viewport = page.getViewport({ scale: 2.0 });

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };

            // Fill with white background
            context.fillStyle = '#FFFFFF';
            context.fillRect(0, 0, canvas.width, canvas.height);

            await page.render(renderContext).promise;

            // Convert to base64 jpeg
            const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
            images.push({
                mimeType: 'image/jpeg',
                data: dataUrl.split(',')[1]
            });
        }

        return images;
    } catch (err) {
        console.error('PDF Conversion Error:', err);
        throw new Error('PDFの変換中にエラーが発生しました: ' + err.message);
    }
}
function copyResponse() {
    // Get text content, excluding the hidden elements if any, but specifically targeting response text
    // Simple approach: clone, remove image, get text
    const clone = elements.responseArea.cloneNode(true);
    const images = clone.getElementsByTagName('img');
    while (images.length > 0) {
        images[0].remove();
    }
    const hr = clone.getElementsByTagName('hr');
    while (hr.length > 0) {
        hr[0].remove();
    }

    const text = clone.innerText.trim();

    navigator.clipboard.writeText(text).then(() => {
        const originalText = elements.copyBtn.textContent;
        elements.copyBtn.textContent = '✅';
        setTimeout(() => {
            elements.copyBtn.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Copy failed', err);
        alert('コピーに失敗しました');
    });
}

function setLoading(isLoading) {
    if (isLoading) {
        elements.loadingIndicator.classList.remove('hidden');
        elements.responseArea.style.opacity = '0.3';
        elements.copyBtn.classList.add('hidden');
        elements.screenshotBtn.classList.add('hidden');
    } else {
        elements.loadingIndicator.classList.add('hidden');
        elements.responseArea.style.opacity = '1';
    }
}

function saveAsImage() {
    const target = elements.responseArea;
    const originalBg = target.style.background;

    // Set background explicit for Screenshot (Dark Theme)
    const dataTheme = document.body.getAttribute('data-theme');
    const bgHex = dataTheme === 'light' ? '#f8fafc' : '#0f172a';
    const captureBg = dataTheme === 'light' ? '#f1f5f9' : '#1e293b';

    target.style.background = bgHex; // Match body bg or darker panel

    // Ensure padding
    const originalPadding = target.style.padding;
    target.style.padding = '24px';

    html2canvas(target, {
        useCORS: true,
        scale: 2, // High resolution
        backgroundColor: captureBg, // Force background color
        logging: false
    }).then(canvas => {
        // Revert style
        target.style.background = originalBg;
        target.style.padding = originalPadding;

        const link = document.createElement('a');
        link.download = `clear_maker_response_${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    }).catch(err => {
        console.error(err);
        target.style.background = originalBg;
        target.style.padding = originalPadding;
        alert('画像の保存に失敗しました');
    });
}

// Edit Mode Functions
function toggleEditMode(isEditing) {
    if (isEditing) {
        elements.responseArea.classList.add('hidden');
        elements.responseEditor.classList.remove('hidden');

        elements.responseEditor.value = state.currentMarkdown || '';

        elements.editBtn.classList.add('hidden');
        elements.copyBtn.classList.add('hidden');
        elements.screenshotBtn.classList.add('hidden');
        elements.editActions.classList.remove('hidden');
    } else {
        elements.responseArea.classList.remove('hidden');
        elements.responseEditor.classList.add('hidden');

        elements.editBtn.classList.remove('hidden');
        elements.copyBtn.classList.remove('hidden');
        elements.screenshotBtn.classList.remove('hidden');
        elements.editActions.classList.add('hidden');
    }
}

function saveEdit() {
    const newMarkdown = elements.responseEditor.value;
    state.currentMarkdown = newMarkdown;
    const totalFiles = [...state.files.question, ...state.files.model, ...state.files.student];
    renderOutput(newMarkdown, totalFiles);
    toggleEditMode(false);
}

function cancelEdit() {
    toggleEditMode(false);
}

// Start
init();
