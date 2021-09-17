# Lesson Backend by Node.js

## Overview

Node.js を使ってサーバーを構築し,JSON ファイルを書き換える Endpoint を作成する.

## Procedure

```sh
yarn init -y
```

```sh
yarn add express cors nodemon body-parser nanoid
```

express...サーバーを構築するのを楽にしてくれる（Node.js の http メソッドを使っても良い）

cors...通信に関する制約を設定するために使用（初期の設定が厳しいので緩和する）

nodemon...サーバーを起動するために使用（ファイルの変更を反映させてサーバーを再起動してくれるようになる）

body-parser...express において POST リクエストを解析するために使用（JSON の変換をしてくれる）

nanoid...保存するデータにランダムな ID を割り振るために使用（ランダムな文字列が自動的に生成される）

### サーバーの起動

```sh
yarn start
```

### docker-compose を使ってサーバーを起動する

```sh
docker-compose up
```
