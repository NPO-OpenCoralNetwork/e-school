# AI Creator Lab への貢献ガイド

AI Creator Labへの貢献にご関心をお持ちいただき、ありがとうございます！
このプロジェクトは、多くの方々の協力により成り立っています。

## 🤝 貢献の方法

### 1. バグ報告・改善提案
- [バグ報告テンプレート](https://github.com/your-repo/e-school/issues/new?template=bug_report.yml)を使用
- [機能改善テンプレート](https://github.com/your-repo/e-school/issues/new?template=feature_request.yml)を使用

### 2. カリキュラム・教材へのフィードバック
- [カリキュラムフィードバック](https://github.com/your-repo/e-school/issues/new?template=curriculum_feedback.yml)を使用
- 実際の受講体験に基づいたご意見をお聞かせください

### 3. 技術的な貢献
- ウェブサイトの改善
- 新機能の開発
- ドキュメントの改善
- テストの追加

### 4. 教育・講師としての貢献
- [提携・協力提案](https://github.com/your-repo/e-school/issues/new?template=partnership.yml)を使用
- 講師・メンターとしての参加
- 教材作成への協力

## 📋 行動規範

### 基本方針
- **学習者ファースト**: すべての判断は学習者の利益を最優先に
- **包括性**: 年齢、性別、経験レベルに関わらず誰もが参加できる環境
- **建設的**: 批判的なフィードバックも建設的な改善提案として
- **透明性**: オープンで透明なコミュニケーション

### 禁止事項
- 差別的・攻撃的な言動
- 個人情報の無断公開
- 商業的な宣伝・勧誘
- 著作権侵害

## 🚀 技術的な貢献の始め方

### 1. 開発環境のセットアップ
```bash
# リポジトリのクローン
git clone https://github.com/your-repo/e-school.git
cd e-school/website

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

### 2. ブランチ戦略
- `main`: 本番環境のコード
- `develop`: 開発中のコード
- `feature/[機能名]`: 新機能開発
- `fix/[修正内容]`: バグ修正
- `docs/[ドキュメント名]`: ドキュメント更新

### 3. プルリクエストの手順
```bash
# フィーチャーブランチを作成
git checkout -b feature/new-feature

# 変更を実装
# コードを書く

# テストを実行
npm run test
npm run lint

# コミット
git add .
git commit -m "feat: 新機能を追加"

# プッシュ
git push origin feature/new-feature

# GitHub上でプルリクエストを作成
```

### 4. コミットメッセージのルール
[Conventional Commits](https://www.conventionalcommits.org/)に従います：

```
type(scope): description

feat: 新機能
fix: バグ修正
docs: ドキュメント更新
style: コードスタイル修正
refactor: リファクタリング
test: テスト追加・修正
chore: その他の変更
```

## 🎓 教育・カリキュラムへの貢献

### 1. カリキュラム改善提案
- 既存カリキュラムの体験・評価
- 新しいトピック・技術の提案
- 学習効果の向上提案

### 2. 教材作成
- プレゼンテーション資料
- 実習用サンプルコード
- 解説動画・文書
- 練習問題・課題

### 3. 講師・メンター参加
- 定期講座の講師
- オンライン質問対応
- プロジェクト指導
- キャリア相談

## 🤝 コミュニティ参加

### 1. ディスカッション参加
- [GitHub Discussions](https://github.com/your-repo/e-school/discussions)での議論
- アイデア共有・質問
- 他のコントリビューターとの交流

### 2. イベント・ワークショップ
- 体験会・説明会のサポート
- 特別講座の企画・運営
- 交流イベントの開催

### 3. 広報・マーケティング
- SNSでの情報発信
- ブログ記事の執筆
- 口コミでの紹介

## 🏷️ Issue ラベルの説明

### 種類別
- `bug`: バグ・不具合
- `enhancement`: 機能追加・改善
- `question`: 質問・お問い合わせ
- `curriculum`: カリキュラム・教材関連
- `partnership`: 提携・協力関連

### 優先度
- `priority:high`: 緊急・重要
- `priority:medium`: 中程度
- `priority:low`: 低優先度

### ステータス
- `needs-triage`: 優先度・担当者の検討が必要
- `needs-discussion`: チーム内での議論が必要
- `help-wanted`: 外部からの協力を求めている

### サービス別
- `adult-school`: 大人向けAIスクール
- `kids-lab`: AI Kids Lab
- `corporate`: 法人向けサービス
- `npo`: NPO・助成金関連
- `website`: ウェブサイト・システム

## 📞 お問い合わせ

### 技術的な質問
- [GitHub Issues](https://github.com/your-repo/e-school/issues)でご質問ください
- [GitHub Discussions](https://github.com/your-repo/e-school/discussions)でディスカッション

### 一般的なお問い合わせ
- メール: info@ai-creator-lab.com
- 電話: 03-1234-5678（平日9:00-18:00）

### 提携・協力について
- [提携提案フォーム](https://github.com/your-repo/e-school/issues/new?template=partnership.yml)
- 直接メール: partnership@ai-creator-lab.com

## 🎉 貢献者への感謝

すべての貢献者の皆様のお名前は、以下に掲載させていただきます：
- [CONTRIBUTORS.md](./CONTRIBUTORS.md)
- プロジェクトウェブサイトの貢献者ページ
- 年次報告書

## 📄 ライセンス

このプロジェクトへの貢献は、[MIT License](../LICENSE)の下で公開されます。
プルリクエストを送信することで、あなたの貢献が同ライセンスの下で配布されることに同意したものとみなします。

---

**AI Creator Lab** - すべての人にAI時代を生き抜く力を 🚀

ご質問やご不明な点がございましたら、お気軽にお声かけください。
皆様の貢献をお待ちしています！