export const copyText = async (text, button) => {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }

    const originalText = button.textContent;
    button.textContent = '복사되었습니다.';
    button.classList.add('copied');
    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove('copied');
    }, 1000);
  } catch (err) {
    console.error('Clipboard copy failed', err);
  }
};

export const formatHtmlWithIndentation = (html) => {
  const tabSize = 2;
  let indentLevel = 0;

  return html
    .replace(/(>)(<)/g, '$1\n$2')
    .split('\n')
    .map((line) => {
      if (line.match(/^<\/\w/)) {
        indentLevel = Math.max(0, indentLevel - 1); // 최소값 제한
      }

      const indentedLine = ' '.repeat(indentLevel * tabSize) + line;

      if (line.match(/^<\w[^>]*[^/]?>$/)) {
        indentLevel += 1;
      }

      return indentedLine;
    })
    .join('\n');
};

export const initializeCodeEditors = () => {
  const codeEditors = document.querySelectorAll('.code_editor');

  codeEditors.forEach((editor) => {
    const input = editor.querySelector('.code_input');
    const output = editor.querySelector('code');

    if (input && output) {
      const inputHTML = input.innerHTML.trim();
      const formattedHTML = formatHtmlWithIndentation(inputHTML);
      output.textContent = formattedHTML;
    }

    const copyButton = editor.querySelector('.copy-btn');
    if (copyButton && !copyButton.dataset.bound) {
      copyButton.dataset.bound = true;
      copyButton.addEventListener('click', async () => {
        const codeToCopy = output.textContent.trim();
        await copyText(codeToCopy, copyButton);
      });
    }

    const codeBtn = editor.querySelector('.code-btn');
    const codeOutput = editor.querySelector('.code_output');
    if (codeBtn && codeOutput && !codeBtn.dataset.bound) {
      codeBtn.dataset.bound = true;
      codeBtn.addEventListener('click', () => {
        const isVisible = codeOutput.classList.toggle('visible');
        codeBtn.textContent = isVisible ? 'Code Close' : 'Code View';
      });
    }
  });
};

export const observeDomChanges = (initializeFn) => {
  const observer = new MutationObserver(() => {
    initializeFn(); // DOM 변경 시 초기화
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  return () => observer.disconnect();
};
