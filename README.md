# kanekoi-training-web  

起動コマンド  
node server.js  

 API呼出コマンド  

-- Web アプリ開発 - Node.js --  

①GET：「Hello World」を返す  
curl -X "GET" "http://localhost:4000/hello"  

②POST：リクエストパラメータとして2つの整数を渡すと、レスポンスとしてその合計を返す  
curl -X POST -H "Content-Type: application/json" -d '{"arg1": "12", "arg2": "34"}' http://localhost:4000/sum  

③GET：（上と同じ）リクエストパラメータとして2つの整数を渡すと、レスポンスとしてその合計を返す  
curl -X GET "http://localhost:4000/sum?arg1=12&arg2=34"  

④GET：http://localhost:4000 にアクセスしたらhtmlファイルが表示されるようにする  
http://localhost:4000  

-- Web アプリ開発 - Docker, DB --  

⑤GET：レスポンスでcompanyテーブルに登録したデータをリストで返す  
curl -X "GET" "http://localhost:4000/company/1"  
curl -X "GET" "http://localhost:4000/company/2"  