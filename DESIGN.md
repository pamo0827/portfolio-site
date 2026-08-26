---
meta:
  name: Watanabe Yoshikatsu — Portfolio
  macrostructure: Index-First
  anchorHue: 70
  defaultMode: light

colors:
  light:
    paper: "oklch(97% 0.008 70)"
    paper2: "oklch(94.5% 0.010 70)"
    rule: "oklch(87% 0.012 70)"
    muted: "oklch(44% 0.010 60)"
    ink: "oklch(21% 0.012 60)"
    accent: "oklch(56% 0.17 32)"
    accentInk: "oklch(98% 0.008 70)"
    focus: "{colors.light.accent}"
  dark:
    paper: "oklch(16% 0.010 70)"
    paper2: "oklch(20% 0.012 70)"
    rule: "oklch(31% 0.010 70)"
    muted: "oklch(74% 0.008 60)"
    ink: "oklch(94% 0.008 80)"
    accent: "oklch(70% 0.145 34)"
    accentInk: "oklch(16% 0.010 70)"
    focus: "{colors.dark.accent}"

typography:
  display:
    fontFamily: "JetBrains Mono"
    fontWeight: 700
    fontSize: "clamp(2.1rem, 6.4vw, 3.9rem)"
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  sectionTitle:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.18em"
    lineHeight: 1.08
  body:
    fontFamily: "Geist, Noto Sans JP"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.72
  meta:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "-0.01em"
    fontFeatures: "tabular-nums"

layout:
  measure: "64rem"
  colMeta: "7rem"
  gutterStart: "clamp(1.25rem, 11vw, 10rem)"
  gutterEnd: "2rem"
  space:
    3xs: "0.125rem"
    2xs: "0.25rem"
    xs: "0.5rem"
    sm: "0.75rem"
    md: "1rem"
    lg: "1.5rem"
    xl: "2.5rem"
    2xl: "4rem"

shapes:
  rule: "1px solid {colors.light.rule}"
  toggle:
    rounded: "50%"
    size: "36px"

components:
  link:
    textColor: "{colors.light.ink}"
    textDecoration: none
  linkHover:
    textColor: "{colors.light.accent}"
    textDecoration: "underline 1px {colors.light.accent}"
  themeToggle:
    backgroundColor: transparent
    textColor: "{colors.light.muted}"
    size: "{shapes.toggle.size}"
    rounded: "{shapes.toggle.rounded}"
  themeToggleHover:
    backgroundColor: "{colors.light.paper2}"
    textColor: "{colors.light.ink}"
  sectionTick:
    backgroundColor: "{colors.light.accent}"
    size: "5px"

motion:
  easeOut: "cubic-bezier(0.16, 1, 0.3, 1)"
  durMicro: "120ms"
  durShort: "220ms"
  durLong: "420ms"
---

## Overview

一枚もののポートフォリオ索引。マクロ構造は **Index-First** — ページそのものがリンクの索引であり、
マーケティング的なヒーロー画像や物語の流れを持たない。訪問者は「読む」より先に「走査する」。

設計原則は [Nutlope/hallmark](https://github.com/Nutlope/hallmark) の
anti-patterns / slop-test に準拠し、トークン記法は
[google-labs-code/design.md](https://github.com/google-labs-code/design.md) に従う。

## Colors

アンカー色相は **70（温かいオート）**。紙もインクもニュートラルも、すべてこの色相へ
わずかに寄せている（chroma 0.008–0.012）。純黒 `#000` / 純白 `#fff` は使わない。

アクセントは朱色 `oklch(56% 0.17 32)` の一色のみ。用途はリンクのホバー、フォーカスリング、
セクション見出し前の 5px のティック、テキスト選択範囲に限定し、画面占有率は 3% 未満に抑える。

ダークモードは色相を変えず、明度と彩度だけを動かす。ライトが既定で、切り替えは
`localStorage` に保存する（OS 設定は既定を上書きしない）。

## Typography

3 ファミリーが上限（hallmark の 2+1 ルール）。

- **Display / Meta** — JetBrains Mono 700。氏名、セクション見出し、日付、技術タグ。
  日付列は `tabular-nums` で縦に揃う。
- **Body** — Geist 400。
- **JP Body** — Noto Sans JP 400（Geist にフォールバックされる日本語グリフを担当）。

Inter / Roboto / Poppins などの LLM デフォルト書体は使わない。見出しはすべてローマン体
（イタリック見出しは AI 生成の代表的な兆候として禁止）。

## Layout

中央寄せをやめ、コンテンツを**左に寄せた非対称**にしている（`gutterStart` は最大 10rem、
`gutterEnd` は 2rem 固定）。セクションの上下パディングも意図的に不均一。

リストの左メタ列は全セクションで `colMeta`（7rem）を共有し、日付・アプリ名の左端と
本文の左端が縦に揃う。索引としての規律はこの1本の縦ラインが支えているので、
セクションごとに幅を変えない。

リスト行は「左マージンに日付 / 右に本文」の 2 カラム。これは**本文レベルのメタラベル**であり、
禁止されている「セクション見出しの横にラベルを置く」パターン（slop-test gate 54）ではない。
セクション見出しは常に単一カラムで縦に積む。

768px 以下では全リストが 1 カラムに畳まれ、ガターは左右対称の 1.25rem になる。

## Motion

ページロード時の 1 回だけ、DOM 順に 60ms ずつずらしたフェードアップ。
アニメーションは `transform` と `opacity` のみ。`prefers-reduced-motion: reduce` では
不透明度のクロスフェードに縮退する。スクロール連動、パララックス、ホバーの拡大縮小は使わない。

## Do's and Don'ts

**Do**

- 新しい色や書体が必要になったら、まず `:root` にトークンとして名前を付ける。
- 余白は `--space-*` スケールから選ぶ。生の px を書かない。
- 対話要素には `:hover` / `:focus-visible` / `:active` / `:disabled` を必ず用意する。
- 装飾を足す前に、まず何かを取り除けないか確認する。

**Don't**

- 純黒・純白、彩度 0 のグレー。
- 紫→青、紫→ピンクのグラデーション、`background-clip: text` の見出し。
- 3 等分のアイコン付きカードグリッド、カードの入れ子、左端の太いカラーストライプ。
- セクションごとの通し番号アイビロウ（`01 / WORKS`）。
- アクセント色の面塗り。
