--
-- PostgreSQL database dump
--

-- Dumped from database version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE ONLY public.discovered DROP CONSTRAINT discovered_user_id_fkey;
ALTER TABLE ONLY public.caughtpokemon DROP CONSTRAINT caughtpokemon_users_id_fkey;
ALTER TABLE ONLY public.caughtpokemon DROP CONSTRAINT caughtpokemon_list_id_fkey;
ALTER TABLE ONLY public.users DROP CONSTRAINT users_username_key;
ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
ALTER TABLE ONLY public.list DROP CONSTRAINT list_pkey;
ALTER TABLE ONLY public.discoveredpoke DROP CONSTRAINT discoveredpoke_pkey;
ALTER TABLE ONLY public.discovered DROP CONSTRAINT discovered_pkey;
ALTER TABLE ONLY public.caughtpokemon DROP CONSTRAINT caughtpokemon_pkey;
ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.list ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.discoveredpoke ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.discovered ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.caughtpokemon ALTER COLUMN id DROP DEFAULT;
DROP SEQUENCE public.users_id_seq;
DROP TABLE public.users;
DROP SEQUENCE public.list_id_seq;
DROP TABLE public.list;
DROP SEQUENCE public.discoveredpoke_id_seq;
DROP TABLE public.discoveredpoke;
DROP SEQUENCE public.discovered_id_seq;
DROP TABLE public.discovered;
DROP SEQUENCE public.caughtpokemon_id_seq;
DROP TABLE public.caughtpokemon;
DROP EXTENSION plpgsql;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: caughtpokemon; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.caughtpokemon (
    id integer NOT NULL,
    list_id integer NOT NULL,
    users_id integer NOT NULL,
    pokeid integer NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);


--
-- Name: caughtpokemon_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.caughtpokemon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: caughtpokemon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.caughtpokemon_id_seq OWNED BY public.caughtpokemon.id;


--
-- Name: discovered; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.discovered (
    id integer NOT NULL,
    user_id integer NOT NULL,
    pokeid integer NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);


--
-- Name: discovered_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.discovered_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: discovered_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.discovered_id_seq OWNED BY public.discovered.id;


--
-- Name: discoveredpoke; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.discoveredpoke (
    id integer NOT NULL,
    pokeid integer NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);


--
-- Name: discoveredpoke_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.discoveredpoke_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: discoveredpoke_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.discoveredpoke_id_seq OWNED BY public.discoveredpoke.id;


--
-- Name: list; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.list (
    id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);


--
-- Name: list_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.list_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: list_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.list_id_seq OWNED BY public.list.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: caughtpokemon id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.caughtpokemon ALTER COLUMN id SET DEFAULT nextval('public.caughtpokemon_id_seq'::regclass);


--
-- Name: discovered id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.discovered ALTER COLUMN id SET DEFAULT nextval('public.discovered_id_seq'::regclass);


--
-- Name: discoveredpoke id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.discoveredpoke ALTER COLUMN id SET DEFAULT nextval('public.discoveredpoke_id_seq'::regclass);


--
-- Name: list id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.list ALTER COLUMN id SET DEFAULT nextval('public.list_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: caughtpokemon; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.caughtpokemon (id, list_id, users_id, pokeid, created_at) FROM stdin;
2	1	3	25	2020-04-22 04:00:40.900632
3	1	3	25	2020-04-22 04:15:15.328921
4	1	3	25	2020-04-22 04:15:15.3304
5	1	3	25	2020-04-22 04:15:15.370371
6	1	3	25	2020-04-22 04:15:15.39428
7	1	3	25	2020-04-22 04:15:15.406034
8	1	3	25	2020-04-22 04:16:23.611538
9	1	3	25	2020-04-22 04:16:23.657959
10	1	3	25	2020-04-22 04:16:23.658604
11	1	3	25	2020-04-22 04:16:23.689752
12	1	3	25	2020-04-22 04:16:23.69306
13	1	3	25	2020-04-22 04:16:23.701933
14	1	3	25	2020-04-22 04:16:23.705266
15	1	3	25	2020-04-22 04:16:23.70752
16	1	3	25	2020-04-22 04:16:23.708664
17	1	3	25	2020-04-22 04:16:23.709998
18	1	3	25	2020-04-22 04:16:23.720799
19	1	3	25	2020-04-22 04:16:23.726278
20	1	3	25	2020-04-22 04:16:23.741163
21	1	3	25	2020-04-22 04:16:23.742402
22	1	3	25	2020-04-22 04:16:23.743507
23	1	3	25	2020-04-22 04:16:23.752294
24	1	3	25	2020-04-22 04:16:23.753661
25	1	3	25	2020-04-22 04:16:23.756258
26	1	3	25	2020-04-22 04:16:23.758994
27	1	3	25	2020-04-22 04:16:23.776213
28	1	3	25	2020-04-22 04:16:23.776988
29	1	3	25	2020-04-22 04:16:23.777587
30	1	3	25	2020-04-22 04:16:23.780132
31	1	3	25	2020-04-22 04:16:23.782053
32	1	3	25	2020-04-22 04:16:23.782995
33	1	3	25	2020-04-22 04:16:23.804166
34	1	3	25	2020-04-22 04:16:23.807693
35	1	3	25	2020-04-22 04:16:23.808988
36	1	3	25	2020-04-22 04:16:23.810055
37	1	3	25	2020-04-22 04:16:23.811573
38	1	3	25	2020-04-22 04:16:23.814911
39	1	3	25	2020-04-22 04:16:23.827456
40	1	3	25	2020-04-22 04:16:23.82944
41	1	3	25	2020-04-22 04:16:23.83157
42	1	3	25	2020-04-22 04:16:23.834451
43	1	3	25	2020-04-22 04:16:23.84522
44	1	3	25	2020-04-22 04:16:23.848544
45	1	3	25	2020-04-22 04:16:23.864575
46	1	3	25	2020-04-22 04:16:23.865888
47	1	3	25	2020-04-22 04:16:23.866713
48	1	3	25	2020-04-22 04:16:23.868044
49	1	3	25	2020-04-22 04:17:19.008883
50	1	3	25	2020-04-22 04:17:19.056737
51	1	3	25	2020-04-22 04:17:19.058176
52	1	3	25	2020-04-22 04:17:19.069019
53	1	3	25	2020-04-22 04:17:19.070158
54	1	3	25	2020-04-22 04:17:19.071922
55	1	3	25	2020-04-22 04:17:19.114454
56	1	3	25	2020-04-22 04:17:19.116435
57	1	3	25	2020-04-22 04:17:19.118192
58	1	3	25	2020-04-22 04:17:19.119024
59	1	3	25	2020-04-22 04:17:19.120173
60	1	3	25	2020-04-22 04:17:19.147189
61	1	3	25	2020-04-22 04:17:19.148594
62	1	3	25	2020-04-22 04:17:19.149568
63	1	3	25	2020-04-22 04:17:19.150658
64	1	3	25	2020-04-22 04:17:19.162325
65	1	3	25	2020-04-22 04:17:19.1678
66	1	3	25	2020-04-22 04:17:19.172691
67	1	3	25	2020-04-22 04:17:19.175531
68	1	3	25	2020-04-22 04:17:19.176753
69	1	3	25	2020-04-22 04:17:19.178101
70	1	3	25	2020-04-22 04:17:19.187206
71	1	3	25	2020-04-22 04:17:19.189717
72	1	3	25	2020-04-22 04:17:19.199997
73	1	3	25	2020-04-22 04:17:19.204803
74	1	3	25	2020-04-22 04:17:19.210233
75	1	3	25	2020-04-22 04:17:19.217309
76	1	3	25	2020-04-22 04:17:19.219726
77	1	3	25	2020-04-22 04:17:19.220806
78	1	3	25	2020-04-22 04:17:19.234517
79	1	3	25	2020-04-22 04:17:19.235331
80	1	3	25	2020-04-22 04:17:19.240141
81	1	3	25	2020-04-22 04:17:19.241249
82	1	3	25	2020-04-22 04:17:19.24263
83	1	3	25	2020-04-22 04:17:19.24353
84	1	3	25	2020-04-22 04:17:19.257565
85	1	3	25	2020-04-22 04:17:19.261563
86	1	3	25	2020-04-22 04:17:19.262086
87	1	3	25	2020-04-22 04:17:19.263229
88	1	3	25	2020-04-22 04:17:19.264291
89	1	3	25	2020-04-22 04:17:19.265178
90	1	3	25	2020-04-22 04:17:22.57686
91	1	3	25	2020-04-22 04:17:22.629928
92	1	3	25	2020-04-22 04:17:22.648152
93	1	3	25	2020-04-22 04:17:22.649591
94	1	3	25	2020-04-22 04:17:22.652023
95	1	3	25	2020-04-22 04:17:22.654377
96	1	3	25	2020-04-22 04:17:22.657861
97	1	3	25	2020-04-22 04:17:22.660038
98	1	3	25	2020-04-22 04:17:22.694665
99	1	3	25	2020-04-22 04:17:22.695393
100	1	3	25	2020-04-22 04:17:22.696997
101	1	3	25	2020-04-22 04:17:22.699463
102	1	3	25	2020-04-22 04:17:22.700784
103	1	3	25	2020-04-22 04:17:22.702274
104	1	3	25	2020-04-22 04:17:22.734295
105	1	3	25	2020-04-22 04:17:22.747086
106	1	3	25	2020-04-22 04:17:22.747953
107	1	3	25	2020-04-22 04:17:22.749421
108	1	3	25	2020-04-22 04:17:22.750748
109	1	3	25	2020-04-22 04:17:22.75165
110	1	3	25	2020-04-22 04:17:22.764749
111	1	3	25	2020-04-22 04:17:22.78074
112	1	3	25	2020-04-22 04:17:22.781393
113	1	3	25	2020-04-22 04:17:22.787634
114	1	3	25	2020-04-22 04:17:22.790721
115	1	3	25	2020-04-22 04:17:22.792923
116	1	3	25	2020-04-22 04:17:22.796067
117	1	3	25	2020-04-22 04:17:22.799906
118	1	3	25	2020-04-22 04:17:22.802755
119	1	3	25	2020-04-22 04:17:22.817035
120	1	3	25	2020-04-22 04:17:22.820957
121	1	3	25	2020-04-22 04:17:22.822001
122	1	3	25	2020-04-22 04:17:22.823631
123	1	3	25	2020-04-22 04:17:22.827449
124	1	3	25	2020-04-22 04:17:22.831671
125	1	3	25	2020-04-22 04:17:22.832182
126	1	3	25	2020-04-22 04:17:22.851702
127	1	3	25	2020-04-22 04:17:22.854179
128	1	3	25	2020-04-22 04:17:22.859956
129	1	3	25	2020-04-22 04:17:22.861116
130	1	3	25	2020-04-22 04:17:22.862062
131	1	3	25	2020-04-22 04:17:31.792189
132	1	3	25	2020-04-22 04:17:31.793297
133	1	3	25	2020-04-22 04:17:31.795333
134	1	3	25	2020-04-22 04:17:31.796745
135	1	3	25	2020-04-22 04:17:31.799599
136	1	3	25	2020-04-22 04:17:31.801896
137	1	3	25	2020-04-22 04:17:31.810227
138	1	3	25	2020-04-22 04:17:31.837798
139	1	3	25	2020-04-22 04:17:31.854164
140	1	3	25	2020-04-22 04:17:31.856854
141	1	3	25	2020-04-22 04:17:31.85761
142	1	3	25	2020-04-22 04:17:31.86021
143	1	3	25	2020-04-22 04:17:31.860362
144	1	3	25	2020-04-22 04:17:31.865382
145	1	3	25	2020-04-22 04:17:31.891106
146	1	3	25	2020-04-22 04:17:31.892136
147	1	3	25	2020-04-22 04:17:31.895111
148	1	3	25	2020-04-22 04:17:31.895884
149	1	3	25	2020-04-22 04:17:31.897325
150	1	3	25	2020-04-22 04:17:31.899008
151	1	3	25	2020-04-22 04:17:31.917271
152	1	3	25	2020-04-22 04:17:31.918755
153	1	3	25	2020-04-22 04:17:31.931499
154	1	3	25	2020-04-22 04:17:31.934887
155	1	3	25	2020-04-22 04:17:31.939905
156	1	3	25	2020-04-22 04:17:31.94859
157	1	3	25	2020-04-22 04:17:31.950236
158	1	3	25	2020-04-22 04:17:31.952588
163	1	3	25	2020-04-22 04:17:31.977633
173	1	3	25	2020-04-22 04:17:41.422712
180	1	3	25	2020-04-22 04:17:41.458134
185	1	3	25	2020-04-22 04:17:41.489174
187	1	3	25	2020-04-22 04:17:41.492913
194	1	3	25	2020-04-22 04:17:41.528185
197	1	3	25	2020-04-22 04:17:41.551088
159	1	3	25	2020-04-22 04:17:31.954833
160	1	3	25	2020-04-22 04:17:31.959812
161	1	3	25	2020-04-22 04:17:31.968028
162	1	3	25	2020-04-22 04:17:31.976527
174	1	3	25	2020-04-22 04:17:41.423579
175	1	3	25	2020-04-22 04:17:41.434345
176	1	3	25	2020-04-22 04:17:41.437186
177	1	3	25	2020-04-22 04:17:41.444986
178	1	3	25	2020-04-22 04:17:41.452911
200	1	3	25	2020-04-22 04:17:41.554147
164	1	3	25	2020-04-22 04:17:31.97879
168	1	3	25	2020-04-22 04:17:41.396854
169	1	3	25	2020-04-22 04:17:41.41691
172	1	3	25	2020-04-22 04:17:41.421637
179	1	3	25	2020-04-22 04:17:41.457053
186	1	3	25	2020-04-22 04:17:41.490396
191	1	3	25	2020-04-22 04:17:41.523507
192	1	3	25	2020-04-22 04:17:41.526306
199	1	3	25	2020-04-22 04:17:41.553589
165	1	3	25	2020-04-22 04:17:31.979724
166	1	3	25	2020-04-22 04:17:31.987904
167	1	3	25	2020-04-22 04:17:41.396102
170	1	3	25	2020-04-22 04:17:41.417626
171	1	3	25	2020-04-22 04:17:41.420427
181	1	3	25	2020-04-22 04:17:41.458826
195	1	3	25	2020-04-22 04:17:41.529053
196	1	3	25	2020-04-22 04:17:41.549639
182	1	3	25	2020-04-22 04:17:41.460136
183	1	3	25	2020-04-22 04:17:41.47705
184	1	3	25	2020-04-22 04:17:41.487374
188	1	3	25	2020-04-22 04:17:41.493814
189	1	3	25	2020-04-22 04:17:41.498546
190	1	3	25	2020-04-22 04:17:41.522728
193	1	3	25	2020-04-22 04:17:41.527224
198	1	3	25	2020-04-22 04:17:41.552691
201	1	3	25	2020-04-22 04:17:41.554665
202	1	3	25	2020-04-22 04:17:41.565361
203	1	3	25	2020-04-22 04:17:53.256947
204	1	3	25	2020-04-22 04:17:53.255704
205	1	3	25	2020-04-22 04:17:53.267989
206	1	3	25	2020-04-22 04:17:53.269241
207	1	3	25	2020-04-22 04:17:53.271539
208	1	3	25	2020-04-22 04:17:53.277289
209	1	3	25	2020-04-22 04:17:53.281834
210	1	3	25	2020-04-22 04:17:53.287069
211	1	3	25	2020-04-22 04:17:53.288145
212	1	3	25	2020-04-22 04:17:53.305145
213	1	3	25	2020-04-22 04:17:53.325237
214	1	3	25	2020-04-22 04:17:53.326463
215	1	3	25	2020-04-22 04:17:53.32874
216	1	3	25	2020-04-22 04:17:53.32995
217	1	3	25	2020-04-22 04:17:53.333688
218	1	3	25	2020-04-22 04:17:53.335024
219	1	3	25	2020-04-22 04:17:53.350708
220	1	3	25	2020-04-22 04:17:53.356331
221	1	3	25	2020-04-22 04:17:53.369094
222	1	3	25	2020-04-22 04:17:53.369987
223	1	3	25	2020-04-22 04:17:53.37103
224	1	3	25	2020-04-22 04:17:53.372438
225	1	3	25	2020-04-22 04:17:53.375074
226	1	3	25	2020-04-22 04:17:53.376191
227	1	3	25	2020-04-22 04:17:53.397629
228	1	3	25	2020-04-22 04:17:53.39926
229	1	3	25	2020-04-22 04:17:53.400696
230	1	3	25	2020-04-22 04:17:53.401312
231	1	3	25	2020-04-22 04:17:53.402065
232	1	3	25	2020-04-22 04:17:53.416518
233	1	3	25	2020-04-22 04:17:53.419335
234	1	3	25	2020-04-22 04:17:53.429939
235	1	3	25	2020-04-22 04:17:53.432409
236	1	3	25	2020-04-22 04:17:53.433584
237	1	3	25	2020-04-22 04:17:53.434109
238	1	3	25	2020-04-22 04:17:53.437568
239	1	3	25	2020-04-22 04:19:35.796299
240	1	3	25	2020-04-22 04:19:35.811103
241	1	3	25	2020-04-22 04:19:35.837851
242	1	3	25	2020-04-22 04:19:35.845822
243	1	3	25	2020-04-22 04:19:35.858639
244	1	3	25	2020-04-22 04:19:35.860473
245	1	3	25	2020-04-22 04:19:35.866016
246	1	3	25	2020-04-22 04:19:35.868794
247	1	3	25	2020-04-22 04:19:35.874975
248	1	3	25	2020-04-22 04:21:35.815789
249	1	3	25	2020-04-22 04:22:54.060261
250	1	3	25	2020-04-22 04:24:20.015281
251	1	3	25	2020-04-22 04:26:28.143124
252	1	1	1	2020-04-22 04:50:21.798503
253	1	1	1	2020-04-22 04:51:47.50065
254	1	1	1	2020-04-22 04:52:21.356945
255	1	1	5	2020-04-22 04:54:10.871592
\.


--
-- Data for Name: discovered; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.discovered (id, user_id, pokeid, created_at) FROM stdin;
2	3	1	2020-04-22 05:22:08.526299
3	1	2	2020-04-22 05:44:48.950804
4	1	2	2020-04-22 05:45:07.200173
8	1	2	2020-04-22 05:52:39.943458
9	1	2	2020-04-22 05:52:59.537275
10	1	2	2020-04-22 05:54:36.783174
13	1	2	2020-04-22 06:39:02.270312
14	1	56	2020-04-22 07:54:44.457292
26	1	56	2020-04-22 18:45:53.442556
27	1	56	2020-04-22 18:46:55.343331
28	1	56	2020-04-22 18:47:24.923093
\.


--
-- Data for Name: discoveredpoke; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.discoveredpoke (id, pokeid, created_at) FROM stdin;
1	25	2020-04-22 19:01:48.666758
\.


--
-- Data for Name: list; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.list (id, created_at) FROM stdin;
1	2020-04-22 03:47:18.68483
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (id, username, created_at) FROM stdin;
1	user1	2020-04-22 02:59:17.856466
3	user2	2020-04-22 02:59:32.024299
\.


--
-- Name: caughtpokemon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.caughtpokemon_id_seq', 255, true);


--
-- Name: discovered_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.discovered_id_seq', 29, true);


--
-- Name: discoveredpoke_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.discoveredpoke_id_seq', 1, true);


--
-- Name: list_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.list_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- Name: caughtpokemon caughtpokemon_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.caughtpokemon
    ADD CONSTRAINT caughtpokemon_pkey PRIMARY KEY (id);


--
-- Name: discovered discovered_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.discovered
    ADD CONSTRAINT discovered_pkey PRIMARY KEY (id);


--
-- Name: discoveredpoke discoveredpoke_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.discoveredpoke
    ADD CONSTRAINT discoveredpoke_pkey PRIMARY KEY (id);


--
-- Name: list list_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.list
    ADD CONSTRAINT list_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: caughtpokemon caughtpokemon_list_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.caughtpokemon
    ADD CONSTRAINT caughtpokemon_list_id_fkey FOREIGN KEY (list_id) REFERENCES public.list(id);


--
-- Name: caughtpokemon caughtpokemon_users_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.caughtpokemon
    ADD CONSTRAINT caughtpokemon_users_id_fkey FOREIGN KEY (users_id) REFERENCES public.users(id);


--
-- Name: discovered discovered_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.discovered
    ADD CONSTRAINT discovered_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

