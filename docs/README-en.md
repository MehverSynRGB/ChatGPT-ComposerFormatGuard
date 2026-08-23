<div align="center">
    <img src="https://github.com/MehverSynRGB/ChatGPT-ComposerFormatGuard/raw/main/docs/icon/256.png" width="20%"/>
    <h1>ChatGPT-ComposerFormatGuard <code>v1.0</code></h1>
    <p>
        <a href='https://github.com/MehverSynRGB/ChatGPT-ComposerFormatGuard'><img src="https://img.shields.io/badge/-GitHub-3A3A3A?style=flat&amp;logo=GitHub&amp;logoColor=white" referrerpolicy="no-referrer" alt="GitHub"></a>
        <a href='https://greasyfork.org/scripts/592655'><img src="https://img.shields.io/badge/-GreasyFork-670000?style=flat&amp;logo=tampermonkey&amp;logoColor=white" referrerpolicy="no-referrer" alt="GreasyFork"></a>
    </p>
    <p><a href='https://github.com/MehverSynRGB/ChatGPT-ComposerFormatGuard/blob/main/README.md'>简体中文</a> | English</p>
</div>


## Description

Keep Markdown literal in the ChatGPT composer instead of allowing it to become bold text, lists, headings, and other rich-text formatting while composing. ChatGPT continues to render Markdown after a message is sent.

- Provides only `text/plain` to the ChatGPT composer on paste, preserving Markdown source.
- Routes ordinary non-IME typing through the same plain-text path so `**text**`, `# title`, and list markers stay literal.
- Blocks common formatting shortcuts and native formatting input events.
- Preserves line breaks and normalizes Windows, macOS, and Linux line endings.
- Leaves image and file pastes, voice, sending, and model selection to the native ChatGPT components.
- Supports `chatgpt.com` and legacy `chat.openai.com` links.

Install `ChatGPT-ComposerFormatGuard.user.js` with Tampermonkey, Violentmonkey, or another compatible userscript manager. Then paste or type Markdown into the ChatGPT composer to keep the Markdown source visible.

Use the round `MD` button at the lower-right corner to toggle protection. Green means enabled and gray means disabled; the preference is remembered, and disabling it immediately restores ChatGPT's normal composer behavior without a refresh.

The script does not alter message submission. ChatGPT continues to render Markdown through its normal flow after a message is sent.

### Why this script exists

The switch from a plain-text/Markdown-style composer to live rich-text formatting has caused friction for users who work heavily with code, Markdown, formulas, and other syntax-sensitive text. This script keeps source markers literal while composing and leaves rendering to ChatGPT after submission.

**“I'd like to suggest an option to disable rich-text paste handling and live Markdown rendering in the prompt composer.”** — [R4nT, OpenAI Developer Community, Aug. 16, 2026](https://community.openai.com/t/add-a-plain-text-composer-option-for-chatgpt-and-codex/1390698)

**“Markdown should be optional, it's completely breaking productivity for no reason.”** — [alexrose, OpenAI Developer Community, Aug. 11, 2026](https://community.openai.com/t/markdown-in-the-chat-window-is-completely-breaking-outgoing-prompts-and-making-gpt-completely-unusable-for-basic-tasks/1390024)

**“I really wish I could just make that textbox plaintext only and disable all that rich text stuff.”** — [shodan, OpenAI Developer Community, Aug. 9, 2026](https://community.openai.com/t/severe-pasting-issues-code-gets-mangled-into-markdown/1389665)

**“I REALLY hate it. Does anyone know if there's a way to turn it off?”** — [Glossy_Mossy, r/ChatGPT, Aug. 2026](https://www.reddit.com/r/ChatGPT/comments/1vhrsty/how_do_i_turn_off_autoformatting/)

## License

[BSD 3-Clause License](../LICENSE)
