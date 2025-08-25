# AI Creator Lab - E-School Platform

> AIを「学びの鏡」として、すべての人が自己の可能性を最大限に開花させる

すべての人にAI時代を生き抜く力を。大人から子どもまで、NPO法人まで、包括的なAI教育プラットフォームで未来をサポートします。

🧠 **教育理念**: 行動主義・認知主義・構成主義を統合したハイブリッド学習理論

## 🌟 概要

AI Creator Labは、Next.js 15とTailwind CSS 4を使用して構築された最新のAI教育プラットフォームです。React 19を基盤とし、レスポンシブデザインとモダンなUIコンポーネントを提供します。

### 🎆 教育イノベーション
- **3段階アウトプットシステム**: 即時・短期（24-72時間）・長期（1週間後）のアウトプットで学習定着
- **AIリフレクション**: AIを「学びの鏡」として活用し、メタ認知を育成
- **パーソナライズ学習**: Big Five性格分析による個別最適化

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

### 🧠 統合的学習理論アプローチ
**行動主義**: 習慣化メカニズムとスペースド・リピティションで確実な定着を実現。

**認知主義**: メタ認知の育成とBig Five性格分析による個別最適化。

**構成主義**: 探究型学習とプロジェクトベースの実践。

### 🔄 3段階アウトプットシステム
**即時アウトプット**: 学習直後のリフレクティブ・ライティングで理解を深化。

**短期アウトプット**: 24-72時間後の復習で長期記憶への定着を促進。

**長期アウトプット**: 1週間後の深い理解確認と実践適用。

### 🤖 AIを「学びの鏡」として活用
**セルフ・リフレクション**: 24時間対応の振り返りパートナーとしてAIを活用。

**ソーシャル・リフレクション**: 中立的で無限の忍耐を持つフィードバック提供。

**メタ認知コーチ**: 認知の歪みを検出し、正しい学習戦略へ導く。

### 🎯 パーソナライズ学習
**Big Five性格分析**: 開放性・誠実性・外向性・協調性・神経症傾向に基づく最適化。

**適応的学習パス**: 一人ひとりの特性に合わせた学習コンテンツとペース調整。

## 📈 実績

- **受講生数**: 500名以上
- **満足度**: 98%
- **企業導入実績**: 50社以上
- **学習サポート**: 24時間対応

## 📖 教育理念・メソドロジー

詳細な教育理念とメソドロジーについては、[教育理念ドキュメント](docs/EDUCATIONAL_PHILOSOPHY.md)をご覧ください。

## 🤝 コントリビューション

プロジェクトへの貢献を歓迎します！

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/AmazingFeature`)
3. 変更をコミット (`git commit -m 'Add some AmazingFeature'`)
4. ブランチにプッシュ (`git push origin feature/AmazingFeature`)
5. プルリクエストを作成

## 📊 プロジェクト管理

### GitHub Project Board
- **プロジェクトボード**: [AI Creator Lab - e-school](https://github.com/orgs/NPO-OpenCoralNetwork/projects/9)
- **Issue管理**: テンプレートを使用して課題・提案を報告してください
  - 🐛 [バグ報告](https://github.com/NPO-OpenCoralNetwork/e-school/issues/new?template=bug_report.yml)
  - ✨ [機能要望](https://github.com/NPO-OpenCoralNetwork/e-school/issues/new?template=feature_request.yml)
  - 📚 [カリキュラムフィードバック](https://github.com/NPO-OpenCoralNetwork/e-school/issues/new?template=curriculum_feedback.yml)
  - ❓ [質問](https://github.com/NPO-OpenCoralNetwork/e-school/issues/new?template=question.yml)
  - 🤝 [提携提案](https://github.com/NPO-OpenCoralNetwork/e-school/issues/new?template=partnership.yml)

### コントリビューション
プロジェクトへの貢献方法は [CONTRIBUTING.md](.github/CONTRIBUTING.md) をご覧ください。

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は [LICENSE](LICENSE) ファイルをご覧ください。

## 📞 お問い合わせ

- **ウェブサイト**: [AI Creator Lab](https://example.com)
- **Email**: info@ai-creator-lab.com
- **Twitter**: [@AICreatorLabTokyo](https://twitter.com/AICreatorLabTokyo)

---

**AI Creator Lab** - すべての人にAI時代を生き抜く力を 🚀