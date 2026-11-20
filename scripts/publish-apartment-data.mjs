// Explicit first-time seed into an empty private database. Never overwrites live edits.
import {readFile} from 'node:fs/promises';
import pg from 'pg';
if(!process.env.APARTMENTS_DATABASE_URL)throw Error('Set APARTMENTS_DATABASE_URL for the intended private database.');
const snapshot=JSON.parse(await readFile('.private/apartments.json','utf8'));
const pool=new pg.Pool({connectionString:process.env.APARTMENTS_DATABASE_URL,max:1});
try{await pool.query('CREATE TABLE IF NOT EXISTS private_apartments (id integer PRIMARY KEY CHECK(id=1), data jsonb NOT NULL)');const r=await pool.query('INSERT INTO private_apartments(id,data) VALUES(1,$1) ON CONFLICT DO NOTHING RETURNING id',[snapshot]);if(!r.rowCount)throw Error('Database already has apartment data; refused to overwrite it.');console.log(`Seeded ${snapshot.apartments.length} apartments into the private database.`);}finally{await pool.end();}
