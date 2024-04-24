import { sql } from '@vercel/postgres';
import { Task } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchTaskToday() {
  noStore();

  const date = new Date().toLocaleDateString();
  const dateArray = date.split('/')
  const today = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`
  
  console.log("fetching data")

  try {
    const data = await sql<Task>`
      SELECT * 
      FROM task
      WHERE date::text = ${today}
      ORDER BY timestamp
      `;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch today's task data.`);
  }
}