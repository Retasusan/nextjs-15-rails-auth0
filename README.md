# これは、技術書展 2025 に向けた Next.js 15、Rails、Auth0 を使用した認証システムのサンプルアプリケーションです。

## 概要

`frontend`ディレクトリには、Next.js 15 を使用したフロントエンドのコードが含まれています。
`backend`ディレクトリには、Rails を使用したバックエンドのコードが含まれています。

## セットアップ

### フロントエンドのセットアップ

1. `frontend`ディレクトリに移動します。
2. 必要な依存関係をインストールします。

```bash
npm install
```

3. 環境変数を設定します。`.env.local`ファイルを作成し、以下の内容を追加します。

```plaintext
AUTH0_SECRET=<your_auth0_secret>
AUTH0_ISSUER_BASE_URL=https://<your-auth0-domain>
AUTH0_BASE_URL=http://localhost:3000
AUTH0_CLIENT_ID=<your_auth0_client_id>
AUTH0_CLIENT_SECRET=<your_auth0_client_secret>
AUTH0_AUDIENCE=https://<your-api-identifier>
AUTH0_SCOPE=openid profile email

AUTH0_DOMAIN=<your-auth0-domain>
APP_BASE_URL=http://localhost:3000

NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

4. 開発サーバーを起動します。

```bash
npm run dev
```

### バックエンドのセットアップ

```bash
cd backend
bundle install
```

5. 環境変数を設定します。`.env`ファイルを作成し、以下の内容を追加します。

```plaintext
AUTH0_JWKS_URI=https://<your-auth0-domain>/.well-known/jwks.json
AUTH0_DOMAIN=<your-auth0-domain>
AUTH0_CLIENT_ID=<your-auth0-client-id>
AUTH0_CLIENT_SECRET=<your-auth0-client-secret>
```

6. サーバーを起動します。

```bash
rails server -p 8000
```

## 使用方法

フロントエンドのアプリケーションにアクセスするには、ブラウザで`http://localhost:3000`を開きます。
バックエンドの API にアクセスするには、`http://localhost:8000`を使用します。

## 注意事項

- このサンプルアプリケーションは、Auth0 を使用した認証システムの基本的な実装を示しています。
- 実際のアプリケーションでは、セキュリティやエラーハンドリングなど、追加の考慮事項が必要です。
- Auth0 の設定や環境変数は、実際のプロジェクトに合わせて適切に設定してください。
- このサンプルは、技術書展 2025 に向けたデモ用であり、商用利用を目的としていません。
- このコードは、Next.js 15、Rails、Auth0 の最新のバージョンに基づいていますが、将来のバージョンでの互換性は保証されません。
- このプロジェクトは、オープンソースであり、GitHub 上で公開されています。フィードバックや改善提案は歓迎します。
