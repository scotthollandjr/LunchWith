--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.4
-- Dumped by pg_dump version 9.5.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: messages; Type: TABLE; Schema: public; Owner: eyecue
--

CREATE TABLE messages (
    id integer NOT NULL,
    sender_id integer,
    recipient_id integer,
    message character varying,
    subject character varying,
    new boolean DEFAULT true,
    messagetime timestamp without time zone DEFAULT now()
);


ALTER TABLE messages OWNER TO eyecue;

--
-- Name: messages_id_seq; Type: SEQUENCE; Schema: public; Owner: eyecue
--

CREATE SEQUENCE messages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE messages_id_seq OWNER TO eyecue;

--
-- Name: messages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eyecue
--

ALTER SEQUENCE messages_id_seq OWNED BY messages.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: eyecue
--

ALTER TABLE ONLY messages ALTER COLUMN id SET DEFAULT nextval('messages_id_seq'::regclass);


--
-- Data for Name: messages; Type: TABLE DATA; Schema: public; Owner: eyecue
--

COPY messages (id, sender_id, recipient_id, message, subject, new, messagetime) FROM stdin;
1	26	35	Test message content	test message subject	t	2016-09-09 11:07:12.393148
2	28	35	message 2	subject2	t	2016-09-09 11:07:12.393148
3	28	36	you do not exist yet!	future message	t	2016-09-09 11:07:12.393148
4	35	25	timestamp test	timestamp test subject	t	2016-09-09 11:12:36.284542
\.


--
-- Name: messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: eyecue
--

SELECT pg_catalog.setval('messages_id_seq', 4, true);


--
-- Name: messages_pkey; Type: CONSTRAINT; Schema: public; Owner: eyecue
--

ALTER TABLE ONLY messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

