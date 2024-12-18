CREATE TABLE users (
        id serial not null,
        name varchar(100) not null,
        address varchar(100),
        PRIMARY key (id)
    );

INSERT INTO users (id, name, address) VALUES(1, '山田', '東京');
INSERT INTO users (id, name, address) VALUES(2, '鈴木', '大阪');
INSERT INTO users (id, name, address) VALUES(3, '中村', '愛知');

select * from users;

delete from users where id in (1,2);

drop table users;