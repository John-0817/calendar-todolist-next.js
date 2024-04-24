const { db } = require('@vercel/postgres');
const {lists} = require('../place-holder-data');



async function seedLists(client) {

  try{
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS lists (
        title VARCHAR(255) NOT NULL,
        color TEXT NOT NULL UNIQUE,
      );
    `;

    const insertedList = await Promise.all(
      lists.map(
        (list) => client.sql`
        INSERT INTO lists (title, color)
        VALUES (${list.title}, ${list.color})
        ON CONFLICT (title) DO NOTHING;
      `,
      ),  
    );

    return {
      createTable,
      lists: insertedList,
    };
  } catch (error) {
    console.error('Error seeding revenue:', error);
    throw error;
  }
};

async function main() {
  const client = await db.connect();

  await seedLists(client)
  
  await client.end();
};

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});