'use server'

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  list: z.string(),
  due_date: z.string(),
  timestamp: z.string(),
  done: z.boolean(),
})

const CreateTask = FormSchema.omit({ id: true, timestamp: true, done: true });
const UpdateTask = FormSchema;

export async function createTask( path: string, formData: FormData ) {
  const { title, description, list, due_date } = CreateTask.parse({
    title: formData.get('title'),
    description: formData.get('description'),
    list: formData.get('listTitle'),
    due_date: formData.get('task_due_date'),
  });
  
  const dateArray = due_date.split('/');
  const date = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`
  const timestamp = new Date().getTime().toString();

  await sql`
    INSERT INTO task (title, description, list, date, timestamp)
    VALUES (${title}, ${description}, ${list}, ${date}, ${timestamp})
  `;

  if (path === 'today') {
    revalidatePath('/todo/today');
    redirect('/todo/today');
  }
};

export async function updateTask( task_id: string, task_timestamp: string, task_done: boolean, path: string, formData: FormData ) {
  const { id, title, description, list, due_date, timestamp, done } = UpdateTask.parse({
    id: task_id,
    title: formData.get('title'),
    description: formData.get('description'),
    list: formData.get('listTitle'),
    due_date: formData.get('task_due_date'),
    timestamp: task_timestamp,
    done: task_done,
  });

  const dateArray = due_date.split('/');
  const date = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`
  
  await sql`
    UPDATE task
    SET title = ${title}, description = ${description}, list = ${list}, date = ${date}, timestamp = ${timestamp}, done = ${done}
    WHERE id = ${id}
  `;

  if (path === 'today') {
    revalidatePath('/todo/today');
    redirect('/todo/today');
  }
};

export async function deleteTask( task_id: string, path: string ) {
  await sql`DELETE FROM task WHERE id = ${task_id}`;

  if (path === 'today') {
    revalidatePath('/todo/today');
    redirect('/todo/today');
  }
};

interface SearchParamsObjects{
  title?: string;
  description?: string;
  list?: string;
  date?: string;
  timestamp?: string;
  done?: boolean;
}

export async function updateState(task_id: string, done: boolean, path: string, searchParams: SearchParamsObjects) {
  await sql`
    UPDATE task
    SET done = ${!done}
    WHERE id = ${task_id}
  `;

  const urlPath = new URLSearchParams();

  let urlFullPath = `${path}?`
  const addParam = (key: string, value?: string | boolean) => {
    console.log(value)
    if (value !== undefined) {
      if (urlFullPath.length > path.length + 1) {
        urlFullPath += '&';
      }
      urlFullPath += `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }
  };

  if (Object.keys(searchParams).length !== 0 && path.includes(`${task_id}`)) {

    addParam('title', searchParams.title);
    addParam('description', searchParams.description);
    addParam('list', searchParams.list);
    addParam('date', searchParams.date);
    addParam('timestamp', searchParams.timestamp);
    addParam('done', !(searchParams.done));
    
    revalidatePath(path);
    // redirect(urlFullPath)
  } else if (Object.keys(searchParams).length !== 0) {
    addParam('title', searchParams.title);
    addParam('description', searchParams.description);
    addParam('list', searchParams.list);
    addParam('date', searchParams.date);
    addParam('timestamp', searchParams.timestamp);
    addParam('done', searchParams.done);
    
    revalidatePath(path);
    // redirect(urlFullPath)
  } else {
    revalidatePath(path);
    redirect(path);
  }
}
