create table Customer
(
    id       integer not null
        constraint key_name
            primary key,
    number   integer,
    name     varchar(255),
    lastname varchar(255),
    balance  integer
);

create table Transaction
(
    id               integer not null,
    create_date      date,
    update_date      date,
    payment_interval         varchar(255),
    interval_due_date  date,
    due_date  date,
    interest         integer,
    total_payments    integer,
    total_amount      integer,
    paid_off_intervals integer,
    payment          integer,
    is_paid           boolean,
    customer_id      bigint  not null,
        foreign key (customer_id)
        references Customer (id)
);