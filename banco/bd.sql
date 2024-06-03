-- auto-generated definition
create table vendas.transacao_estoque
(
    id                bigserial,
    estoque_id        integer
        constraint fk_transacao_estoque
            references configuracao.estoque,
    usuario_inclusao  varchar,
    data_inclusao     varchar,
    usuario_alteracao varchar,
    data_alteracao    varchar,
    quantidade        integer,
    transacao_id      integer
);

alter table transacao_estoque
    owner to postgres;



-- auto-generated definition
create table vendas.transacao
(
    id                bigserial,
    valor_total       double precision,
    desconto          double precision,
    metodo_pagamento  integer,
    quantidade_total  integer,
    usuario_inclusao  varchar,
    data_inclusao     varchar,
    usuario_alteracao varchar,
    data_alteracao    varchar
);

alter table transacao
    owner to postgres;

