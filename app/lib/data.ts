import { sql } from '@vercel/postgres';
import { Task } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchTaskToday() {
  noStore();

  const today = new Date().toDateString();

  
  try {
    const data = await sql<Task>`
      SELECT * 
      FROM task
      WHERE date = ${today}
      ORDER BY timestamp
      `;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch today's task data.`);
  }
}

export async function fetchTaskThisWeek(date: Date) {
  noStore();

  const month = date.getMonth();
  const year = date.getFullYear();
  const weekStart = date.getDate() - date.getDay() < 0 ? 1 : date.getDate() - date.getDay();
  const weekEnd = date.getDate() + 6 - date.getDay() > new Date(year, month + 1, 0).getDate() 
  ? new Date(year, month + 1, 0).getDate() : date.getDate() + 6 - date.getDay();

  const firstDate = new Date(year, month, weekStart).toDateString();
  const lastDate = new Date(year, month, weekEnd).toDateString();


  try {
    const data = await sql<Task>`
      SELECT * 
      FROM task
      WHERE date >= ${firstDate} AND date <= ${lastDate}
      ORDER BY date, timestamp
      `;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch today's task data.`);
  }
}

type TaskByDate = {
  [key: number]: Task[];
};

export async function fetchTaskThisMonth() {
  noStore();

  const thisMonth = new Date().getMonth() + 1;
  const taskByDate: TaskByDate = {};

  try {
    const data = await sql<Task>`
      SELECT * 
      FROM task
      WHERE EXTRACT (MONTH FROM date) = ${thisMonth}
      ORDER BY date, timestamp
      `;

    data.rows.forEach(task => {
      const taskDate = new Date(task.date);
      const dayOfMonth = taskDate.getDate();

      if (!taskByDate[dayOfMonth]) {
        taskByDate[dayOfMonth] = [];
      }

      if (taskByDate[dayOfMonth].length < 3){
        taskByDate[dayOfMonth].push(task);
      }
    });

    return taskByDate;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch today's task data.`);
  }
}

export async function fetchUpcomingTaskToday() {
  noStore();

  const today = new Date().toDateString();
  
  try {
    const data = await sql<Task>`
      SELECT * 
      FROM task
      WHERE date = ${today}
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

  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();

  const tomorrowDate = date.getDate() + 1;

  const tomorrow = new Date(year, month, tomorrowDate).toDateString();
  
  try {
    const data = await sql<Task>`
      SELECT * 
      FROM task
      WHERE date = ${tomorrow}
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

  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  const weekStart = date.getDate() - date.getDay() < 0 ? 1 : date.getDate() - date.getDay();
  const weekEnd = date.getDate() + 6 - date.getDay() > new Date(year, month + 1, 0).getDate() 
  ? new Date(year, month + 1, 0).getDate() : date.getDate() + 6 - date.getDay();

  const firstDate = new Date(year, month, weekStart).toDateString();
  const lastDate = new Date(year, month, weekEnd).toDateString();

  try {
    const data = await sql<Task>`
      SELECT * 
      FROM task
      WHERE date >= ${firstDate} AND date <= ${lastDate}
      ORDER BY date, timestamp
      Limit 3
      `;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch today's task data.`);
  }
}