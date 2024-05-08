import { sql } from '@vercel/postgres';
import { Task } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchTaskToday() {
  noStore();

  const date = new Date().toLocaleDateString();
  const dateArray = date.split('/')
  const today = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`
  
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

export async function fetchTaskThisWeek() {
  noStore();

  const today = new Date();
  const weekStart = today.getDate() - today.getDay();
  const weekEnd = weekStart + 6;
  const lastDay = new Date(today.setDate(weekEnd)).toLocaleDateString();
  const firstDay = new Date(today.setDate(weekStart)).toLocaleDateString();
  const firstDayArray = firstDay.split('/');
  const lastDayArray = lastDay.split('/');
  const firstDate = `${firstDayArray[2]}-${firstDayArray[1]}-${firstDayArray[0]}`;
  const lastDate = `${lastDayArray[2]}-${lastDayArray[1]}-${lastDayArray[0]}`;

  try {
    const data = await sql<Task>`
      SELECT * 
      FROM task
      WHERE date::text >= ${firstDate} AND date::text <= ${lastDate}
      ORDER BY date, timestamp
      `;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch today's task data.`);
  }
}

export async function fetchUpcomingTaskToday() {
  noStore();

  const date = new Date().toLocaleDateString();
  const dateArray = date.split('/')
  const today = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`
  
  try {
    const data = await sql<Task>`
      SELECT * 
      FROM task
      WHERE date::text = ${today}
      ORDER BY timestamp
      Limit 4
      `;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch today's task data.`);
  }
}

export async function fetchUpcomingTaskTomorrow() {
  noStore();

  const today = new Date();
  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + 1);
  const date = nextDay.toLocaleDateString();
  const dateArray = date.split('/');
  const tomorrow = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
  
  try {
    const data = await sql<Task>`
      SELECT * 
      FROM task
      WHERE date::text = ${tomorrow}
      ORDER BY timestamp
      Limit 3
      `;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch today's task data.`);
  }
}

export async function fetchUpcomingTaskThisWeek() {
  noStore();

  const today = new Date();
  const weekStart = today.getDate() - today.getDay();
  const weekEnd = weekStart + 6;
  const lastDay = new Date(today.setDate(weekEnd)).toLocaleDateString();
  const firstDay = new Date(today.setDate(weekStart)).toLocaleDateString();
  const firstDayArray = firstDay.split('/');
  const lastDayArray = lastDay.split('/');
  const firstDate = `${firstDayArray[2]}-${firstDayArray[1]}-${firstDayArray[0]}`;
  const lastDate = `${lastDayArray[2]}-${lastDayArray[1]}-${lastDayArray[0]}`;

  try {
    const data = await sql<Task>`
      SELECT * 
      FROM task
      WHERE date::text >= ${firstDate} AND date::text <= ${lastDate}
      ORDER BY date, timestamp
      Limit 3
      `;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch today's task data.`);
  }
}