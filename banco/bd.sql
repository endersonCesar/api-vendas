-- auto-generated definition
create table configuracao.estoque
(
    id               bigserial,
    produto_id       integer,
    marca_id         integer,
    tamanho          varchar,
    caracteristica   varchar,
    total_peca       varchar,
    quantidade       varchar,
    valor_unitario   integer,
    usuario_inclusao varchar,
    data_inclusao    date,
    usuario_alteraco varchar,
    data_alteracao   date
);

alter table estoque
    owner to postgres;

-- auto-generated definition
create table configuracao.marca
(
    id                bigserial,
    marca             varchar,
    usuario_inclusao  varchar,
    data_inclusao     date,
    usuario_alteracao varchar,
    data_alteracao    date
);

alter table marca
    owner to postgres;

create unique index idx_unique_marca
    on marca (marca);

-- auto-generated definition
create table configuracao.produto
(
    id                bigserial,
    produto           varchar,
    usuario_inclusao  varchar,
    data_inclusao     varchar,
    usuario_alteracao varchar,
    data_alteracao    varchar
);

alter table produto
    owner to postgres;

create unique index idx_unique_produto
    on produto (produto);

