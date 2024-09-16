

# Force Custom Fonts Extension Fix

This repository contains a fix for the "Force Custom Fonts" Chrome extension. The original extension had an issue where it was replacing icon fonts, causing icons to display as text characters instead of graphical symbols.

### The Problem

The extension was aggressively replacing fonts, including those used for icons. This caused icon fonts to be replaced with regular text fonts, rendering the icons as text characters.

### The Solution

We modified the `style.js` file to exclude icon elements from the font replacement. Specifically, we added `:not(md-icon):not(.icon)` to the CSS selector that applies custom fonts.

### Changes Made

In `2.4.0_0/js/style.js`, we modified the following line:


This change preserves icon fonts while still applying custom fonts to regular text elements.

### Files Modified

- `2.4.0_0/js/style.js`

### How to Use

1. Clone this repository
2. Replace the original `style.js` file in the extension with the modified one
3. Reload the extension in Chrome

## 中文

这个仓库包含了对"强制自定义字体"Chrome扩展的修复。原始扩展存在一个问题，即它替换了图标字体，导致图标显示为文本字符而不是图形符号。

### 问题

该扩展过于激进地替换字体，包括用于图标的字体。这导致图标字体被替换为普通文本字体，使图标呈现为文本字符。

### 解决方案

我们修改了 `style.js` 文件，将图标元素排除在字体替换之外。具体来说，我们在应用自定义字体的 CSS 选择器中添加了 `:not(md-icon):not(.icon)`。

### 修改内容

在 `2.4.0_0/js/style.js` 文件中，我们修改了以下行：

这个修改保留了图标字体，同时仍然将自定义字体应用于普通文本元素。

### 修改的文件

- `2.4.0_0/js/style.js`

### 使用方法

1. 克隆此仓库
2. 用修改后的文件替换扩展中原来的 `style.js` 文件
3. 在 Chrome 中重新加载扩展