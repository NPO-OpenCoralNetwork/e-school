# セットアップガイド

AI Creator Lab E-Schoolプラットフォームの開発環境セットアップから本番デプロイまでの詳細なガイドです。

## 📋 目次

1. [開発環境のセットアップ](#開発環境のセットアップ)
2. [プロジェクトのクローンと初期設定](#プロジェクトのクローンと初期設定)
3. [開発サーバーの起動](#開発サーバーの起動)
4. [環境設定](#環境設定)
5. [データベースセットアップ](#データベースセットアップ)
6. [本番環境デプロイ](#本番環境デプロイ)
7. [トラブルシューティング](#トラブルシューティング)

---

## 🛠️ 開発環境のセットアップ

### 必要なソフトウェア

#### 1. Node.js
**推奨バージョン**: 20.x 以上

```bash
# Node.jsバージョン確認
node --version

# npmバージョン確認  
npm --version
```

**インストール方法**:
- [Node.js公式サイト](https://nodejs.org/)からダウンロード
- または nodenv/nvm を使用:
```bash
# nvmを使用する場合
nvm install 20
nvm use 20
```

#### 2. Git
```bash
# Gitバージョン確認
git --version
```

#### 3. エディター（推奨）
- **VS Code**: 拡張機能が豊富
- **WebStorm**: TypeScript/React開発に最適化

### VS Code 推奨拡張機能

以下の拡張機能をインストールすることを推奨します：

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json"
  ]
}
```

---

## 📁 プロジェクトのクローンと初期設定

### 1. リポジトリのクローン

```bash
# HTTPSでクローン
git clone https://github.com/your-username/e-school.git

# またはSSHでクローン（推奨）
git clone git@github.com:your-username/e-school.git

# プロジェクトディレクトリに移動
cd e-school
```

### 2. ディレクトリ構造の確認

```bash
# ディレクトリ構造を確認
tree -I node_modules
```

期待される構造:
```
e-school/
├── README.md
├── docs/
│   ├── SERVICES.md
│   └── SETUP_GUIDE.md
├── website/
│   ├── package.json
│   ├── next.config.ts
│   ├── tailwind.config.ts
│   ├── src/
│   └── public/
└── 企画案整理版.md
```

### 3. Webサイトディレクトリに移動

```bash
cd website
```

### 4. 依存関係のインストール

```bash
# npm使用
npm install

# または yarn使用
yarn install

# または pnpm使用（高速）
pnpm install
```

**インストール時間**: 通常 2-5分程度

---

## 🚀 開発サーバーの起動

### 1. 開発サーバー起動

```bash
# Turbopack使用（高速）
npm run dev

# 標準モード
npm run dev -- --turbo false
```

### 2. ブラウザでアクセス

開発サーバーが起動したら以下のURLにアクセス:
- **ローカル**: http://localhost:3000
- **ネットワーク**: http://192.168.x.x:3000 (他デバイスからのアクセス用)

### 3. 開発サーバーの確認

正常に起動すると以下のような画面が表示されます:
- ヒーローセクションに「AIで未来を創る学びの場」
- 3つの事業紹介カード
- レスポンシブデザインが適用されたレイアウト

---

## ⚙️ 環境設定

### 1. 環境変数の設定

`.env.local` ファイルを作成:

```bash
# website ディレクトリ内で実行
touch .env.local
```

`.env.local` の例:
```env
# 開発環境用設定
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# 本番環境（後で設定）
# NEXT_PUBLIC_SITE_URL=https://your-domain.com
# NEXT_PUBLIC_API_URL=https://your-domain.com/api

# 外部サービス（必要に応じて）
# NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
# STRIPE_SECRET_KEY=sk_test_...
# STRIPE_PUBLISHABLE_KEY=pk_test_...
```

### 2. TypeScript設定の確認

`tsconfig.json` が正しく設定されているか確認:

```bash
# TypeScriptの型チェック
npm run type-check

# またはビルドで確認
npm run build
```

### 3. ESLint設定の確認

```bash
# ESLint実行
npm run lint

# 自動修正
npm run lint -- --fix
```

---

## 🗄️ データベースセットアップ

### 1. データベース選択肢

現在はスタティックサイトですが、将来の拡張のための選択肢:

#### Supabase（推奨）
```bash
# Supabase CLI インストール
npm install -g @supabase/cli

# プロジェクト初期化
supabase init

# ローカルデータベース起動
supabase start
```

#### PlanetScale（MySQL）
```bash
# PlanetScale CLI インストール
npm install -g @planetscale/cli

# データベース接続
pscale connect e-school main
```

#### Vercel Postgres
```bash
# Vercel CLI インストール
npm install -g vercel

# データベース作成
vercel env add POSTGRES_URL
```

### 2. データベース接続設定

必要に応じて `lib/database.ts` ファイルを作成:

```typescript
// lib/database.ts の例
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)
```

---

## 🌐 本番環境デプロイ

### 1. Vercel デプロイ（推奨）

#### Vercel CLI使用:
```bash
# Vercel CLI インストール
npm install -g vercel

# ログイン
vercel login

# デプロイ
vercel

# 本番デプロイ
vercel --prod
```

#### GitHub連携:
1. [Vercel](https://vercel.com)にGitHubアカウントでログイン
2. リポジトリをインポート
3. プロジェクト設定:
   - **Framework**: Next.js
   - **Root Directory**: `website`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

### 2. Netlify デプロイ

```bash
# Netlify CLI インストール
npm install -g netlify-cli

# ログイン
netlify login

# デプロイ
netlify deploy

# 本番デプロイ
netlify deploy --prod
```

### 3. 環境変数の設定

デプロイサービスで以下の環境変数を設定:

| 変数名 | 値 | 説明 |
|--------|----|----|
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.com` | サイトURL |
| `NEXT_PUBLIC_API_URL` | `https://your-domain.com/api` | API URL |
| `NODE_ENV` | `production` | 環境識別 |

### 4. カスタムドメイン設定

#### Vercel:
1. プロジェクト設定 → Domains
2. カスタムドメインを追加
3. DNS設定でCNAMEレコードを追加

#### Netlify:
1. Site settings → Domain management
2. カスタムドメインを追加
3. DNS設定でCNAMEレコードを追加

---

## 📊 パフォーマンス最適化

### 1. ビルド最適化の確認

```bash
# ビルドサイズの分析
npm run build
npm run analyze  # bundle-analyzerが設定されている場合
```

### 2. 画像最適化

Next.js の Image コンポーネントを使用:
```typescript
import Image from 'next/image'

<Image
  src="/images/hero-bg.svg"
  alt="Hero Background"
  width={1200}
  height={600}
  priority
/>
```

### 3. フォント最適化

`next/font` を使用:
```typescript
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
```

---

## 🔧 開発ツールの設定

### 1. Prettier設定

`.prettierrc` ファイル:
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 100,
  "tabWidth": 2
}
```

### 2. ESLint詳細設定

`eslint.config.mjs` の詳細:
```javascript
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
```

### 3. VS Code設定

`.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  }
}
```

---

## 🛠️ トラブルシューティング

### よくある問題と解決方法

#### 1. npm install でエラーが発生する

```bash
# キャッシュをクリア
npm cache clean --force

# node_modules を削除して再インストール
rm -rf node_modules package-lock.json
npm install
```

#### 2. ポート3000が使用中

```bash
# 別のポートで起動
npm run dev -- -p 3001

# または使用中のプロセスを終了
lsof -ti:3000 | xargs kill -9
```

#### 3. TypeScriptエラー

```bash
# TypeScript の型チェック
npm run type-check

# 型定義の再インストール
npm install --save-dev @types/node @types/react @types/react-dom
```

#### 4. Tailwind CSSが反映されない

```bash
# Tailwind CSS設定を確認
npx tailwindcss-cli@latest init

# 開発サーバーを再起動
npm run dev
```

#### 5. ビルドエラー

```bash
# 詳細なエラー情報を表示
npm run build -- --debug

# Next.js キャッシュをクリア
rm -rf .next
npm run build
```

### ログ確認方法

#### 開発環境:
```bash
# Next.js ログ
npm run dev -- --debug

# ネットワークリクエスト確認
curl -I http://localhost:3000
```

#### 本番環境:
- Vercel: Dashboard → Functions → Logs
- Netlify: Site dashboard → Functions → Logs

---

## 📚 追加リソース

### 公式ドキュメント
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

### 開発ツール
- [VS Code](https://code.visualstudio.com/)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

### デプロイメント
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)

---

## 🆘 サポート

問題が解決しない場合:

1. **ドキュメントを確認**: 上記のリソースを参照
2. **Issue作成**: GitHubリポジトリでIssueを作成
3. **コミュニティ**: Next.js Discord や Stack Overflow で質問
4. **直接サポート**: info@ai-creator-lab.com までご連絡

---

*このガイドは定期的に更新されます。最新情報については [README.md](../README.md) もご確認ください。*