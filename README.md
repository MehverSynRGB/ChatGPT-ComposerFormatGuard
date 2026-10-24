<div align="center">
    <img src="https://github.com/MehverSynRGB/ChatGPT-ComposerFormatGuard/raw/main/docs/icon/256.png" width="20%"/>
    <h1>ChatGPT-输入格式保护 <code>v1.1</code></h1>
    <p>
        <a href='https://github.com/MehverSynRGB/ChatGPT-ComposerFormatGuard'><img src="https://img.shields.io/badge/-GitHub-3A3A3A?style=flat&amp;logo=GitHub&amp;logoColor=white" referrerpolicy="no-referrer" alt="GitHub"></a>
        <a href='https://greasyfork.org/scripts/592655'><img src="https://img.shields.io/badge/-GreasyFork-670000?style=flat&amp;logo=tampermonkey&amp;logoColor=white" referrerpolicy="no-referrer" alt="GreasyFork"></a>
    </p>
    <p>简体中文 | <a href='https://github.com/MehverSynRGB/ChatGPT-ComposerFormatGuard/blob/main/docs/README-en.md'>English</a></p>
</div>


## 简介

让 Markdown 在 ChatGPT 输入框中保持原始文本，避免编辑期被转换成粗体、列表、标题等富文本格式；消息发出后仍由 ChatGPT 正常渲染。

- 粘贴时只向 ChatGPT 编辑器提供 `text/plain`，保留 Markdown 标记本身。
- 非输入法状态下的普通键入同样走纯文本路径，避免 `**text**`、`# title` 和列表标记自动格式化。
- 阻止常见的文字格式化快捷键和原生格式化输入事件。
- 保留换行，并统一 Windows、macOS 和 Linux 的换行格式。
- 不干预图片、文件、语音、提交和模型选择，仍由 ChatGPT 原组件处理。
- 支持 `chatgpt.com` 和旧版 `chat.openai.com` 链接。

在 Tampermonkey、Violentmonkey 或其他兼容的用户脚本管理器中安装 `ChatGPT-ComposerFormatGuard.user.js`。之后将带有格式的 Markdown 或网页文本粘贴或键入 ChatGPT 输入框，输入框会显示原始 Markdown 标记。

页面右下角的 `MD` 圆形按钮用于切换保护。绿色表示已启用，灰色表示已关闭；状态会被记住，关闭后立即恢复 ChatGPT 原有输入行为，无需刷新。

脚本不干预消息发送；消息发出后，ChatGPT 仍按原有流程渲染 Markdown。

### 制作动机

ChatGPT 输入框从纯文本/Markdown 式编辑转向实时富文本格式化后，给频繁处理代码、Markdown、公式和其他语法敏感文本的用户带来了实际阻碍。本脚本希望让标记在编辑期间保持字面量，仅在消息发出后再由 ChatGPT 渲染。

**“我想建议提供一个选项，用于关闭提示词输入框中的富文本粘贴处理和实时 Markdown 渲染。”** — [R4nT，OpenAI Developer Community，2026 年 8 月 16 日](https://community.openai.com/t/add-a-plain-text-composer-option-for-chatgpt-and-codex/1390698)

**“Markdown 应当是可选的，它毫无理由地彻底破坏了生产力。”** — [alexrose，OpenAI Developer Community，2026 年 8 月 11 日](https://community.openai.com/t/markdown-in-the-chat-window-is-completely-breaking-outgoing-prompts-and-making-gpt-completely-unusable-for-basic-tasks/1390024)

**“我真的希望能把那个文本框设为纯文本，并关掉所有这些富文本功能。”** — [shodan，OpenAI Developer Community，2026 年 8 月 9 日](https://community.openai.com/t/severe-pasting-issues-code-gets-mangled-into-markdown/1389665)

**“我真的非常讨厌它。有人知道怎么把它关掉吗？”** — [Glossy_Mossy，r/ChatGPT，2026 年 8 月](https://www.reddit.com/r/ChatGPT/comments/1vhrsty/how_do_i_turn_off_autoformatting/)

## 许可证

[BSD 3-Clause License](LICENSE)
