CREATE TABLE company (
        company_id serial not null,
        company_name varchar(100) not null,
        phone varchar(20),
        mail varchar(200),
        address varchar(200),
        memo varchar(100),
        PRIMARY key (company_id)
    );

INSERT INTO public.company (company_id, company_name, phone, mail, address, memo) VALUES(1, 'カンパニー ', '111-1111-1111', 'sample@sample.com', '日本東京都千代田区', 'テストです。');
INSERT INTO public.company (company_id, company_name, phone, mail, address, memo) VALUES(2, 'カンパニー2 ', '222-2222-2222', 'sample2@sample.com', '日本東京都千代田区2', 'テスト2です。');
INSERT INTO public.company (company_id, company_name, phone, mail, address, memo) VALUES(2, 'カンパニー3 ', '333-3333-3333', 'sample3@sample.com', '日本東京都千代田区3', 'テスト3です。');

select * from company;

delete from company where company_id in (1);

drop table company;