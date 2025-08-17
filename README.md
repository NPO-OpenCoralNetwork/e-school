# AI Creator Lab - E-School Platform

> AIで未来を創る学びの場

すべての人にAI時代を生き抜く力を。大人から子どもまで、NPO法人まで、包括的なAI教育プラットフォームで未来をサポートします。

## 🌟 概要

AI Creator Labは、Next.js 15とTailwind CSS 4を使用して構築された最新のAI教育プラットフォームです。React 19を基盤とし、レスポンシブデザインとモダンなUIコンポーネントを提供します。

## 🚀 3つの核となる事業

### 1. 大人向けAIスクール
- **3日間集中講座**: ChatGPT/Claude活用術
- **実践的なプロンプトエンジニアリング**
- **業務効率化の実現**
- **即戦力となるスキル習得**

### 2. 子ども向けスクール（AI Kids Lab）
- **年齢別プログラム**: 小1〜高校生対象
- **AI・プログラミング・3DCG**: 総合的なデジタル創造教育
- **公民館×オンラインのハイブリッド**: 安心・安全なサードプレイス
- **創造性とテクノロジーの融合**

### 3. 法人向けサービス
- **カスタムAI研修プログラム**
- **AI導入コンサルティング**
- **DX戦略策定支援**
- **継続的な技術サポート**

## 🛠️ 技術スタック

### フロントエンド
- **Framework**: Next.js 15.4.6
- **React**: 19.1.0
- **スタイリング**: Tailwind CSS 4
- **UI Components**: Radix UI
- **アイコン**: Lucide React
- **TypeScript**: 5.x

### 開発ツール
- **ESLint**: 9.x（Next.js設定）
- **PostCSS**: Tailwind CSS統合
- **Node.js**: 20.x推奨

## 📦 セットアップ

### 必要な環境
- Node.js 20.x以上
- npm または yarn

### インストール

```bash
# リポジトリのクローン
git clone https://github.com/your-username/e-school.git
cd e-school/website

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

開発サーバーは [http://localhost:3000](http://localhost:3000) で起動します。

### 利用可能なスクリプト

```bash
# 開発サーバー（Turbopack使用）
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバー起動
npm run start

# ESLintチェック
npm run lint
```

## 📁 プロジェクト構造

```
e-school/
├── website/                 # Next.jsアプリケーション
│   ├── public/             
│   │   ├── images/         # 画像アセット
│   │   └── *.svg           # アイコンファイル
│   ├── src/
│   │   ├── app/            # App Router
│   │   │   ├── adult-school/   # 大人向けスクールページ
│   │   │   ├── kids-lab/       # 子ども向けスクールページ
│   │   │   ├── corporate/      # 法人向けサービスページ
│   │   │   ├── npo-services/   # NPO向けサービスページ
│   │   │   ├── layout.tsx      # グローバルレイアウト
│   │   │   └── page.tsx        # ホームページ
│   │   ├── components/     # 再利用可能コンポーネント
│   │   │   ├── ui/             # UIコンポーネント
│   │   │   ├── layout/         # レイアウトコンポーネント
│   │   │   ├── forms/          # フォームコンポーネント
│   │   │   ├── learning/       # 学習関連コンポーネント
│   │   │   └── community/      # コミュニティコンポーネント
│   │   ├── lib/            # ユーティリティ関数
│   │   └── types/          # TypeScript型定義
│   ├── package.json
│   └── tailwind.config.ts
├── src/                    # 共通コンポーネント
│   └── components/layout/  # 共有レイアウト
├── 企画案整理版.md        # 事業企画書
└── README.md              # このファイル
```

## 🎨 デザインシステム

### カラーパレット
- **Primary**: Blue (blue-400 to blue-600)
- **Secondary**: Indigo (indigo-400 to indigo-600)
- **Accent**: Purple (purple-400 to purple-600)
- **Background**: Gray scale (gray-800 to gray-900)

### UI Components
- **Button**: Radix UI基盤のカスタムボタン
- **Card**: レスポンシブなカードコンポーネント
- **Navigation**: アクセシブルなナビゲーションメニュー

## 📊 主要な特徴

### 実践重視の教育
理論だけでなく、実際の業務や創作活動ですぐに使えるスキルを重視。即戦力となる実践的な学習体験を提供。

### 個別サポート
一人ひとりのレベルや目標に合わせたパーソナライズド教育。あなただけの学習ペースで確実にスキルアップ。

### 継続学習支援
コース終了後もコミュニティで継続的な学習をサポート。生涯にわたる学習パートナーとして寄り添い。

### 最新技術対応
急速に進歩するAI技術に対応した最新のカリキュラム。常に時代の最先端を学び続けることが可能。

## 📈 実績

- **受講生数**: 500名以上
- **満足度**: 98%
- **企業導入実績**: 50社以上
- **学習サポート**: 24時間対応

## 🤝 コントリビューション

プロジェクトへの貢献を歓迎します！

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/AmazingFeature`)
3. 変更をコミット (`git commit -m 'Add some AmazingFeature'`)
4. ブランチにプッシュ (`git push origin feature/AmazingFeature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は [LICENSE](LICENSE) ファイルをご覧ください。

## 📞 お問い合わせ

- **ウェブサイト**: [AI Creator Lab](https://example.com)
- **Email**: info@ai-creator-lab.com
- **Twitter**: [@AICreatorLabTokyo](https://twitter.com/AICreatorLabTokyo)

---

**AI Creator Lab** - すべての人にAI時代を生き抜く力を 🚀