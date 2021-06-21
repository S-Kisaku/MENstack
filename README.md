# コマンド ############################################
#プロジェクトの開始方法（以下のコマンドを打ってね!）
cd app/infra
make init

#expressのサーバーに入る
cd app/infra
make exec-express

#dbのサーバーに入る
cd app/infra
make exec-mysql

# dbの設計 ##########################################
- dbの種類:mysql
- 今回使用するテーブル:to_do_list
- 設定してあるユーザー設定
　username:dev
　password:dev

# expressについて ####################################
- テンプレートエンジンはejs
　　N予備だと pug ってやつを使うけど今回はejs
- ORMを使用してください

 参考 https://qiita.com/y4u0t2a1r0/items/fb7a879cdd2a187bad29
 N予備 第3章の23

最後に....
  #　わかんねってなったら迷わず箕作まで