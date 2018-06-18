# YTL Notification
## 概要
- YouTube Liveの配信開始通知をトリガーにAPIコールを行います
- [HLS Bridge](https://github.com/yukimochi/VRC_HLS)にYouTube LiveのURLを送ります
- Discordに配信情報を送ります
- [Google Apps Script](https://script.google.com/home)を利用してサーバーレスかつ無料で運用できます
- Googleアカウントが必要となります

## 使い方
1. 専用のGoogleアカウントを作成
1. [YouTube](https://www.youtube.com/)にて任意のチャンネルを登録し、通知をオン
1. [通知設定](https://www.youtube.com/account_notifications)にて通知を受け取る方法にメールを指定
1. [Google Apps Script](https://script.google.com/home)に新規スクリプトを追加し、YTL_notification.gsをコピペ
1. 実行して各種権限を許可
1. トリガーを毎分に設定

## ライセンス
Copyright (c) 2018 amausagi

This software is released under the MIT License.

http://opensource.org/licenses/mit-license.php