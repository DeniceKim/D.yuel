# VSCode json 세팅   

## 설정 적용 우선순위   

1.  Workspace(프로젝트) 설정 → 프로젝트/.vscode/settings.json   
2.  User(전역) 설정 → ~/Library/Application Support/Code/User/settings.json (macOS)   
3.  C:\Users\사용자명\AppData\Roaming\Code\User\settings.json (Windows)   

## settings.json 설정 설명   

- 전역(User) Mac 경로 : ~/Library/Application Support/Code/User/settings.json   
- 전역(User) Win 경로 : %APPDATA%\Code\User\settings.json   

```jsonc
{
  // ===== UI / Workbench =====
  "workbench.startupEditor": "none",
  "workbench.activityBar.location": "top",
  "workbench.iconTheme": "vscode-icons",
  "vsicons.dontShowNewVersionMessage": true,

  // ===== Files =====
  "files.autoSave": "afterDelay",
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": false,
  "explorer.confirmDelete": false,

  // ===== Editor / Format =====
  "editor.tabSize": 2,
  "editor.minimap.enabled": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // (선택) 저장 시 포맷도 함께 하려면 유지
  "editor.formatOnSave": true,

  // ===== CSS/SCSS / Lint =====
  // CSS/SCSS에서 알 수 없는 @규칙 경고 무시 (@use, @forward 등)
  "css.lint.unknownAtRules": "ignore",
  "scss.lint.unknownAtRules": "ignore",
  // CSS, SCSS에만 PostCSS Sorting을 저장 시 자동 실행
  "[css]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.postcss-sorting": "always"
    }
  },
  "[scss]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.postcss-sorting": "always"
    }
  },
  "postcssSorting.config": {
    "order": ["custom-properties"],
    "properties-order": [
      // --- 박스 모델 및 레이아웃 ---
      "content",
      "visibility",
      "display",
      "overflow",
      "overflow-x",
      "overflow-y",
      "float",
      "clear",
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",

      // --- Flex / Grid ---
      "flex",
      "flex-basis",
      "flex-grow",
      "flex-shrink",
      "flex-direction",
      "flex-wrap",
      "justify-content",
      "align-items",
      "align-content",
      "align-self",
      "grid",
      "grid-template",
      "grid-template-columns",
      "grid-template-rows",
      "grid-gap",
      "grid-column",
      "grid-row",

      // --- 크기 ---
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",

      // --- 간격 ---
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",

      // --- 테두리 & 배경 ---
      "border",
      "border-width",
      "border-style",
      "border-color",
      "border-radius",
      "background",
      "background-color",
      "background-image",
      "background-repeat",
      "background-position",
      "background-size",

      // --- 글꼴 / 텍스트 ---
      "color",
      "font",
      "font-family",
      "font-size",
      "font-weight",
      "font-style",
      "line-height",
      "letter-spacing",
      "text-align",
      "text-transform",
      "text-decoration",
      "white-space",

      // --- 효과 & 인터랙션 ---
      "box-shadow",
      "opacity",
      "cursor",
      "pointer-events",

      // --- 트랜지션 & 애니메이션 ---
      "transition",
      "transition-property",
      "transition-duration",
      "transition-timing-function",
      "animation",
      "animation-name",
      "animation-duration",
      "animation-timing-function",
      "animation-delay",
      "animation-iteration-count"
    ]
  },

  // ===== Git / 보안 =====
  "git.autofetch": true,
  "git.ssh.useLocalAgent": true,
  // 보안상 권장: 신뢰 안 된 파일은 프롬프트
  "security.workspace.trust.untrustedFiles": "open",

  // ===== JS/TS 편의 =====
  "javascript.updateImportsOnFileMove.enabled": "always"
}
```

아래처럼 설정도 가능.   

```jsonc
 "css.lint.unknownAtRules": "ignore",
  "scss.lint.unknownAtRules": "ignore",
  "[scss]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.postcss-sorting": "explicit" // 필요할 때만 명시적으로 실행(keybindings.json 에서 설정한 단축키)
      "source.fixAll.postcss-sorting": "always" // 저장 시 Prettier가 먼저 실행. 이어서 PostCSS Sorting이 실행되어 CSS 속성 정렬까지 자동 완료. 파일 저장시 항시 정렬 (css, scss 등 모든 파일 적용)
    }
  },
```

## keybindings.json   

- 처음 설정하는 부분이라면 파일이 없으니 새로 파일 생성하여 작성.   
- 기본 css 속성 선언 순서를 제어하는 단축키 설정.   
- vscode에 PostCSS Sorting 확장 설치가 되어 있어야 함.   
- 전역(User) Mac 경로 : ~/Library/Application Support/Code/User/keybindings.json   
- 전역(User) Win 경로 : %APPDATA%\Code\User\keybindings.json   

```jsonc
[
  {
    "key": "ctrl+shift+c",            // 원하는 단축키
    "command": "postcssSorting.execute", // 확장에서 제공하는 실제 명령 이름 확인 필요
    "when": "editorLangId == 'scss'" // SCSS 파일일 때만 실행
  }
]
```




## 클린 명령어

```text
rm -rf: node_modules/와 출력물만 삭제 후 재설치
`rm -rf node_modules dist .vite .cache && pnpm i`
딥 클린(락파일 포함)

락파일까지 제거해 의존성 트리 재해결
`rm -rf node_modules dist .vite .cache pnpm-lock.yaml && pnpm i`

스토어 정리(pnpm 전용)
pnpm 전역 스토어의 불필요 패키지 정리
`pnpm store prune`

전체 프로세스(한 번에)
`rm -rf node_modules dist .vite .cache pnpm-lock.yaml && pnpm i && pnpm build`


npm 사용 시

빠른 클린: `rm -rf node_modules dist .vite .cache && npm i`
딥 클린: `rm -rf node_modules dist .vite .cache package-lock.json && npm i`

주의
더 강력한 정리: git clean -xfd는 추적되지 않은 파일까지 지우므로 신중히 사용
```
