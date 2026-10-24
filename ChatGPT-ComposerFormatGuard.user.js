// ==UserScript==
// @name			ChatGPT-ComposerFormatGuard
// @name:zh-CN		ChatGPT-输入格式保护
// @namespace		https://github.com/Mehver
// @version		    1.1
// @description		Keep pasted and typed Markdown literal in the ChatGPT composer until it is sent.
// @description:zh-CN	让粘贴和键入的 Markdown 在 ChatGPT 输入框中保持原样，发送后再由 ChatGPT 渲染。
// @author		    https://github.com/Mehver
// @icon			data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAA1RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiI+CjxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOklwdGM0eG1wQ29yZT0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcENvcmUvMS4wL3htbG5zLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI0MDAwIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iNDAwMCI+CjwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4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
// @match		    https://chatgpt.com/*
// @match		    https://chat.openai.com/*
// @license		    BSD-3-Clause
// @charset		    UTF-8
// @homepageURL		https://github.com/MehverSynRGB/ChatGPT-ComposerFormatGuard
// @contributionURL	https://github.com/MehverSynRGB/ChatGPT-ComposerFormatGuard
// @copyright		Copyright (c) 2026 Mehver (https://github.com/Mehver). All rights reserved.
// @grant			GM_getValue
// @grant			GM_setValue
// @run-at		    document-start
// @noframes
// ==/UserScript==

(function () {
    'use strict';

    const COMPOSER_SELECTOR = '[data-app-shell-active-page="true"] form[data-chatgpt-composer] [contenteditable="true"][data-composer-markdown], #thread-bottom form[data-type="unified-composer"] #prompt-textarea.ProseMirror[contenteditable="true"], form[data-type="unified-composer"] #prompt-textarea.ProseMirror[contenteditable="true"], #prompt-textarea.ProseMirror[contenteditable="true"]';
    const STORAGE_KEY = 'chatgptComposerFormatGuardEnabled';
    const TOGGLE_ID = 'chatgpt-composer-format-guard-toggle';
    const FORMAT_SHORTCUTS = new Set(['b', 'i', 'u']);
    const LIST_INPUT_TYPES = new Set(['insertOrderedList', 'insertUnorderedList']);
    const HTML_BLOCK_TAGS = new Set(['ADDRESS', 'ARTICLE', 'ASIDE', 'BLOCKQUOTE', 'DD', 'DIV', 'DL', 'DT', 'FIELDSET', 'FIGCAPTION', 'FIGURE', 'FOOTER', 'FORM', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'HEADER', 'HR', 'LI', 'MAIN', 'NAV', 'OL', 'P', 'PRE', 'SECTION', 'TABLE', 'TD', 'TH', 'TR', 'UL']);
    const HTML_IGNORED_TAGS = new Set(['EMBED', 'IFRAME', 'NOSCRIPT', 'OBJECT', 'SCRIPT', 'STYLE', 'TEMPLATE', 'TITLE']);

    let enabled = getEnabledPreference();
    let composing = false;

    function getComposer(target) {
        return target instanceof Element ? target.closest(COMPOSER_SELECTOR) : null;
    }

    function containsFile(clipboardData) {
        return Array.from(clipboardData.items || []).some(item => item.kind === 'file');
    }

    function getClipboardText(clipboardData) {
        const plainText = clipboardData.getData('text/plain');
        if (plainText) return plainText;

        const html = clipboardData.getData('text/html');
        if (!html) return '';

        const parsed = new DOMParser().parseFromString(html, 'text/html');
        const text = [];

        function appendBreak() {
            if (text.length && !text[text.length - 1].endsWith('\n')) text.push('\n');
        }

        function isBlockBoundary(node) {
            return node && node.nodeType === 1 && (node.tagName === 'BR' || HTML_BLOCK_TAGS.has(node.tagName));
        }

        function readNode(node) {
            if (node.nodeType === 3) {
                const value = node.nodeValue || '';
                const previous = node.previousSibling;
                const next = node.nextSibling;
                const isPreformatted = node.parentElement && node.parentElement.closest('pre, textarea');
                if (!value.trim() && !isPreformatted) {
                    if (isBlockBoundary(previous) || isBlockBoundary(next)) return;
                    text.push(/[\r\n\t]/.test(value) ? ' ' : value);
                    return;
                }

                text.push(value);
                return;
            }
            if (node.nodeType !== 1) return;
            if (HTML_IGNORED_TAGS.has(node.tagName)) return;

            if (node.tagName === 'BR') {
                text.push('\n');
                return;
            }

            const isBlock = HTML_BLOCK_TAGS.has(node.tagName);
            if (isBlock) appendBreak();
            for (const child of node.childNodes) readNode(child);
            if (isBlock) appendBreak();
        }

        readNode(parsed.body);
        return text.join('').replace(/^\n+|\n+$/g, '');
    }

    function getEnabledPreference() {
        try {
            if (typeof GM_getValue === 'function') return GM_getValue(STORAGE_KEY, true) !== false;
        } catch (error) {
            console.warn('[ChatGPT-ComposerFormatGuard] Unable to read the saved setting.', error);
        }

        return localStorage.getItem(STORAGE_KEY) !== 'false';
    }

    function setEnabledPreference(value) {
        enabled = value;

        try {
            if (typeof GM_setValue === 'function') {
                GM_setValue(STORAGE_KEY, value);
            } else {
                localStorage.setItem(STORAGE_KEY, String(value));
            }
        } catch (error) {
            console.warn('[ChatGPT-ComposerFormatGuard] Unable to save the setting.', error);
        }

        updateToggle();
    }

    function createPlainTextPasteEvent(text) {
        try {
            const rawClipboard = new DataTransfer();
            rawClipboard.setData('text/plain', text.replace(/\r\n?/g, '\n'));
            return new ClipboardEvent('paste', {
                bubbles: true,
                cancelable: true,
                composed: true,
                clipboardData: rawClipboard
            });
        } catch (error) {
            console.warn('[ChatGPT-ComposerFormatGuard] Unable to create a plain-text paste event.', error);
            return null;
        }
    }

    document.addEventListener('paste', event => {
        // Ignore our replacement event and leave attachments for ChatGPT to handle.
        if (!enabled || composing || !event.isTrusted || event.defaultPrevented) return;

        const composer = getComposer(event.target);
        const clipboardData = event.clipboardData;
        if (!composer || !clipboardData || containsFile(clipboardData)) return;

        const plainText = getClipboardText(clipboardData);
        if (!plainText) return;

        const rawPasteEvent = createPlainTextPasteEvent(plainText);
        if (!rawPasteEvent) return;

        event.preventDefault();
        event.stopImmediatePropagation();
        composer.dispatchEvent(rawPasteEvent);
    }, true);

    document.addEventListener('beforeinput', event => {
        if (!enabled || composing || !event.isTrusted || event.defaultPrevented || event.isComposing) return;

        const composer = getComposer(event.target);
        if (!composer) return;

        const inputType = event.inputType || '';
        if (inputType === 'insertText' && event.data) {
            const rawPasteEvent = createPlainTextPasteEvent(event.data);
            if (!rawPasteEvent) return;

            event.preventDefault();
            event.stopImmediatePropagation();
            composer.dispatchEvent(rawPasteEvent);
            return;
        }

        if ((inputType.startsWith('format') && inputType !== 'formatSetBlockTextDirection') || LIST_INPUT_TYPES.has(inputType)) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }, true);

    document.addEventListener('keydown', event => {
        if (!enabled || composing || !event.isTrusted || event.defaultPrevented || event.isComposing) return;
        if ((!event.ctrlKey && !event.metaKey) || event.altKey || !FORMAT_SHORTCUTS.has(event.key.toLowerCase())) return;
        if (!getComposer(event.target)) return;

        event.preventDefault();
        event.stopImmediatePropagation();
    }, true);

    document.addEventListener('compositionstart', event => {
        if (getComposer(event.target)) composing = true;
    }, true);

    document.addEventListener('compositionend', event => {
        if (!getComposer(event.target)) return;

        // Keep the final IME commit on the native path even when the browser clears isComposing early.
        window.setTimeout(() => {
            composing = false;
        }, 0);
    }, true);

    function updateToggle() {
        const toggle = document.getElementById(TOGGLE_ID);
        if (!toggle) return;

        toggle.style.background = enabled ? '#10a37f' : '#6e6e80';
        toggle.style.boxShadow = enabled ? '0 2px 10px rgba(16, 163, 127, 0.42)' : '0 2px 10px rgba(0, 0, 0, 0.24)';
        toggle.style.opacity = enabled ? '1' : '0.72';
        toggle.setAttribute('aria-pressed', String(enabled));
        toggle.setAttribute('aria-label', `输入格式保护：${enabled ? '已启用，点击关闭' : '已关闭，点击启用'}`);
        toggle.title = `输入格式保护：${enabled ? '已启用' : '已关闭'}`;
    }

    function mountToggle() {
        if (document.getElementById(TOGGLE_ID)) return true;
        if (!document.querySelector(COMPOSER_SELECTOR) || !document.body) return false;

        const toggle = document.createElement('button');
        toggle.id = TOGGLE_ID;
        toggle.type = 'button';
        toggle.textContent = 'MD';
        toggle.style.cssText = 'all:unset;box-sizing:border-box;position:fixed;right:20px;bottom:96px;z-index:1000;display:flex;align-items:center;justify-content:center;width:42px;height:42px;border:1px solid rgba(255,255,255,0.28);border-radius:50%;color:#fff;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:12px;font-weight:700;letter-spacing:-0.5px;cursor:pointer;user-select:none;transition:transform 0.15s ease,opacity 0.15s ease,background 0.15s ease,box-shadow 0.15s ease;';
        toggle.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            setEnabledPreference(!enabled);
        });
        toggle.addEventListener('mouseenter', () => {
            toggle.style.transform = 'scale(1.08)';
        });
        toggle.addEventListener('mouseleave', () => {
            toggle.style.transform = '';
        });

        document.body.appendChild(toggle);
        updateToggle();
        return true;
    }

    function installToggle() {
        mountToggle();

        let scheduled = false;
        const observer = new MutationObserver(() => {
            if (document.getElementById(TOGGLE_ID) || scheduled) return;

            scheduled = true;
            window.requestAnimationFrame(() => {
                scheduled = false;
                mountToggle();
            });
        });
        observer.observe(document.documentElement, { childList: true, subtree: true });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', installToggle, { once: true });
    } else {
        installToggle();
    }

    console.log('Script ChatGPT-ComposerFormatGuard (ChatGPT-输入格式保护) loaded successfully. https://github.com/MehverSynRGB/ChatGPT-ComposerFormatGuard');
})();
