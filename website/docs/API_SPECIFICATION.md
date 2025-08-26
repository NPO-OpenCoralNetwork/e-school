# API仕様書

## エンドポイント一覧

### 認証系

#### POST /api/auth/login
**説明**: ユーザーログイン
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

#### POST /api/auth/register
**説明**: 新規ユーザー登録
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
```

### コース系

#### GET /api/courses
**説明**: コース一覧取得

#### GET /api/courses/{id}
**説明**: コース詳細取得

#### POST /api/courses/{id}/enroll
**説明**: コース登録

### 学習管理系

#### GET /api/progress/{userId}
**説明**: 学習進捗取得

#### POST /api/progress/{userId}/update
**説明**: 学習進捗更新

### タスク管理系

#### GET /api/tasks
**説明**: タスク一覧取得

#### POST /api/tasks
**説明**: タスク作成

#### PUT /api/tasks/{id}
**説明**: タスク更新

#### DELETE /api/tasks/{id}
**説明**: タスク削除

## レスポンス形式

### 成功時
```json
{
  "success": true,
  "data": {},
  "message": "操作が成功しました"
}
```

### エラー時
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "エラーメッセージ"
  }
}
```

## ステータスコード

- 200: OK
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error