'use client'

import { outfit } from '@/app/ui/font'
import { XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { lists } from '@/app/lib/list-asset';
import { createTask, deleteTask, updateTask } from '@/app/lib/actions';
import Link from 'next/link';

import "react-datepicker/dist/react-datepicker.css";

export function AddNewTask( { path }: { path: string }) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const createWithPath = createTask.bind(null, path);
  const href = `/todo/${path}`;

  return(
    <>
      <div className='flex flex-row justify-between mb-4 '>
        <h2 className={`${outfit.className} text-xl font-semibold`}>
          Task:
        </h2>
        <Link href={href}>
          <XMarkIcon className='w-5 text-gray-500'/>
        </Link>
      </div>
      <form action={createWithPath} className='grow flex flex-col space-y-4 text-sm xl:text-base' >
        {/* Task Title */}
        <input 
          type="text" 
          name='title'
          placeholder='Task Title' 
          className={`${outfit.className} w-full p-2 rounded border bg-gray-100 `}
        />

        {/* Task description */}
        <textarea 
          id='description'
          name="description" 
          cols={30} 
          rows={3} 
          placeholder='Description'
          className={`${outfit.className} align-top resize-none w-full p-2 rounded border bg-gray-100`}
        />
        <div className='space-y-2'>

          {/* Task list category */}
          <div className='grid grid-cols-2 xl:grid-cols-4'>
            <label htmlFor="list" className={`${outfit.className} p-2`}>List</label>
            <div>
              <select 
                id="list" 
                name="listTitle" 
                className='p-2 rounded border bg-gray-100'
                defaultValue="" 
              >
                <option value="" disabled className={`${outfit.className}`}>
                  select list
                </option>
                {lists.map((list) => {
                  const isVisible = list.isVisible;
                  const title = list.title;
                  return(
                    isVisible && (
                    <option 
                      key={title} 
                      value={title}
                      className={`${outfit.className}`}
                    >{title}</option>
                    )
                  )
                })}
              </select>
            </div>
          </div>

          {/* Task due date */}
          <div>
            <div className='grid grid-cols-2 xl:grid-cols-4'>
              <label htmlFor="due_date" className={`${outfit.className} p-2`}>Due Date</label>
              <div>
                <DatePicker 
                  name='task_due_date'
                  // dateFormat={'YYY-MM-dd'}
                  selected={selectedDate}
                  onChange={(date) => date && setSelectedDate(date)}
                  dateFormat={'dd/MM/yyyy'}
                  minDate={new Date()}
                  maxDate={new Date()}
                  className={`${outfit.className} p-2 rounded border bg-gray-100 max-w-[7rem]`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='grow flex flex-col justify-between text-sm xl:text-base'>
          <div />
          <div className='grid grid-cols-2 gap-4'>
            <button 
              type='submit'
              className='flex col-start-2 p-2 justify-center border rounded bg-orange-300'
            >
              <p className={`${outfit.className} font-semibold`}>Save Task</p>
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export function AddNewTaskTomorrow( { path }: { path: string }) {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(tomorrow);
  const createWithPath = createTask.bind(null, path);
  const href = `/todo/${path}`;

  return(
    <>
      <div className='flex flex-row justify-between mb-4 '>
        <h2 className={`${outfit.className} text-xl font-semibold`}>
          Task:
        </h2>
        <Link href={href}>
          <XMarkIcon className='w-5 text-gray-500'/>
        </Link>
      </div>
      <form action={createWithPath} className='grow flex flex-col space-y-4 text-sm xl:text-base' >
        {/* Task Title */}
        <input 
          type="text" 
          name='title'
          placeholder='Task Title' 
          className={`${outfit.className} w-full p-2 rounded border bg-gray-100 `}
        />

        {/* Task description */}
        <textarea 
          id='description'
          name="description" 
          cols={30} 
          rows={3} 
          placeholder='Description'
          className={`${outfit.className} align-top resize-none w-full p-2 rounded border bg-gray-100`}
        />
        <div className='space-y-2'>

          {/* Task list category */}
          <div className='grid grid-cols-2 xl:grid-cols-4'>
            <label htmlFor="list" className={`${outfit.className} p-2`}>List</label>
            <div>
              <select 
                id="list" 
                name="listTitle" 
                className='p-2 rounded border bg-gray-100'
                defaultValue="" 
              >
                <option value="" disabled className={`${outfit.className}`}>
                  select list
                </option>
                {lists.map((list) => {
                  const isVisible = list.isVisible;
                  const title = list.title;
                  return(
                    isVisible && (
                    <option 
                      key={title} 
                      value={title}
                      className={`${outfit.className}`}
                    >{title}</option>
                    )
                  )
                })}
              </select>
            </div>
          </div>

          {/* Task due date */}
          <div>
            <div className='grid grid-cols-2 xl:grid-cols-4'>
              <label htmlFor="due_date" className={`${outfit.className} p-2`}>Due Date</label>
              <div>
                <DatePicker 
                  name='task_due_date'
                  // dateFormat={'YYY-MM-dd'}
                  selected={selectedDate}
                  onChange={(date) => date && setSelectedDate(date)}
                  dateFormat={'dd/MM/yyyy'}
                  minDate={tomorrow}
                  maxDate={tomorrow}
                  className={`${outfit.className} p-2 rounded border bg-gray-100 max-w-[7rem]`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='grow flex flex-col justify-between text-sm xl:text-base'>
          <div />
          <div className='grid grid-cols-2 gap-4'>
            <button 
              type='submit'
              className='flex col-start-2 p-2 justify-center border rounded bg-orange-300'
            >
              <p className={`${outfit.className} font-semibold`}>Save Task</p>
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export function AddNewTaskThisWeek( { path }: { path: string }) {
  const today = new Date();
  const weekEnd = today.getDate() - today.getDay() + 6;
  const lastDay = new Date(new Date().setDate(weekEnd));
  const [selectedDate, setSelectedDate] = useState<Date | null>(today);
  const createWithPath = createTask.bind(null, path);
  const href = `/todo/${path}`;

  return(
    <>
      <div className='flex flex-row justify-between mb-4 '>
        <h2 className={`${outfit.className} text-xl font-semibold`}>
          Task:
        </h2>
        <Link href={href}>
          <XMarkIcon className='w-5 text-gray-500'/>
        </Link>
      </div>
      <form action={createWithPath} className='grow flex flex-col space-y-4 text-sm xl:text-base' >
        {/* Task Title */}
        <input 
          type="text" 
          name='title'
          placeholder='Task Title' 
          className={`${outfit.className} w-full p-2 rounded border bg-gray-100 `}
        />

        {/* Task description */}
        <textarea 
          id='description'
          name="description" 
          cols={30} 
          rows={3} 
          placeholder='Description'
          className={`${outfit.className} align-top resize-none w-full p-2 rounded border bg-gray-100`}
        />
        <div className='space-y-2'>

          {/* Task list category */}
          <div className='grid grid-cols-2 xl:grid-cols-4'>
            <label htmlFor="list" className={`${outfit.className} p-2`}>List</label>
            <div>
              <select 
                id="list" 
                name="listTitle" 
                className='p-2 rounded border bg-gray-100'
                defaultValue="" 
              >
                <option value="" disabled className={`${outfit.className}`}>
                  select list
                </option>
                {lists.map((list) => {
                  const isVisible = list.isVisible;
                  const title = list.title;
                  return(
                    isVisible && (
                    <option 
                      key={title} 
                      value={title}
                      className={`${outfit.className}`}
                    >{title}</option>
                    )
                  )
                })}
              </select>
            </div>
          </div>

          {/* Task due date */}
          <div>
            <div className='grid grid-cols-2 xl:grid-cols-4'>
              <label htmlFor="due_date" className={`${outfit.className} p-2`}>Due Date</label>
              <div>
                <DatePicker 
                  name='task_due_date'
                  // dateFormat={'YYY-MM-dd'}
                  selected={selectedDate}
                  onChange={(date) => date && setSelectedDate(date)}
                  dateFormat={'dd/MM/yyyy'}
                  minDate={today}
                  maxDate={lastDay}
                  className={`${outfit.className} p-2 rounded border bg-gray-100 max-w-[7rem]`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='grow flex flex-col justify-between text-sm xl:text-base'>
          <div />
          <div className='grid grid-cols-2 gap-4'>
            <button 
              type='submit'
              className='flex col-start-2 p-2 justify-center border rounded bg-orange-300'
            >
              <p className={`${outfit.className} font-semibold`}>Save Task</p>
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export function AddNewTaskThisWeekCalendar( { path, date }: { path: string, date: Date }) {
  const today = new Date();

  const taskDate = new Date(date);
  const month = taskDate.getMonth();
  const year = taskDate.getFullYear();
  
  const weekStart = taskDate.getDate() - taskDate.getDay() < 0 ? 1 : taskDate.getDate() - taskDate.getDay();
  const weekEnd = taskDate.getDate() + 6 - taskDate.getDay() > new Date(year, month + 1, 0).getDate() 
  ? new Date(year, month + 1, 0).getDate() : taskDate.getDate() + 6 - taskDate.getDay();

  const currentWeekStart = today.getDate() - today.getDay() < 0 ? 1 : today.getDate() - today.getDay();
  
  const minDate = weekStart === currentWeekStart ? today 
    : weekStart > currentWeekStart ? new Date(year, month, weekStart) : taskDate;
  const maxDate = weekStart === currentWeekStart ? new Date(year, month, weekEnd) 
    : weekStart > currentWeekStart ? new Date(year, month, weekEnd) : taskDate;

  const [selectedDate, setSelectedDate] = useState<Date | null>(today);
  const createWithPath = createTask.bind(null, `${path}?include=${taskDate}`);
  const href = `/todo/${path}?include=${taskDate}`;

  return(
    <>
      <div className='flex flex-row justify-between mb-4 '>
        <h2 className={`${outfit.className} text-xl font-semibold`}>
          Task:
        </h2>
        <Link href={href}>
          <XMarkIcon className='w-5 text-gray-500'/>
        </Link>
      </div>
      <form action={createWithPath} className='grow flex flex-col space-y-4 text-sm xl:text-base' >
        {/* Task Title */}
        <input 
          type="text" 
          name='title'
          placeholder='Task Title' 
          className={`${outfit.className} w-full p-2 rounded border bg-gray-100 `}
        />

        {/* Task description */}
        <textarea 
          id='description'
          name="description" 
          cols={30} 
          rows={3} 
          placeholder='Description'
          className={`${outfit.className} align-top resize-none w-full p-2 rounded border bg-gray-100`}
        />
        <div className='space-y-2'>

          {/* Task list category */}
          <div className='grid grid-cols-2 xl:grid-cols-4'>
            <label htmlFor="list" className={`${outfit.className} p-2`}>List</label>
            <div>
              <select 
                id="list" 
                name="listTitle" 
                className='p-2 rounded border bg-gray-100'
                defaultValue="" 
              >
                <option value="" disabled className={`${outfit.className}`}>
                  select list
                </option>
                {lists.map((list) => {
                  const isVisible = list.isVisible;
                  const title = list.title;
                  return(
                    isVisible && (
                    <option 
                      key={title} 
                      value={title}
                      className={`${outfit.className}`}
                    >{title}</option>
                    )
                  )
                })}
              </select>
            </div>
          </div>

          {/* Task due date */}
          <div>
            <div className='grid grid-cols-2 xl:grid-cols-4'>
              <label htmlFor="due_date" className={`${outfit.className} p-2`}>Due Date</label>
              <div>
                <DatePicker 
                  name='task_due_date'
                  // dateFormat={'YYY-MM-dd'}
                  selected={selectedDate}
                  onChange={(date) => date && setSelectedDate(date)}
                  dateFormat={'dd/MM/yyyy'}
                  minDate={minDate}
                  maxDate={maxDate}
                  className={`${outfit.className} p-2 rounded border bg-gray-100 max-w-[7rem]`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='grow flex flex-col justify-between text-sm xl:text-base'>
          <div />
          <div className='grid grid-cols-2 gap-4'>
            <button 
              type='submit'
              className='flex col-start-2 p-2 justify-center border rounded bg-orange-300'
            >
              <p className={`${outfit.className} font-semibold`}>Save Task</p>
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export function AddNewTaskThisMonth( { path }: { path: string }) {
  const today = new Date();
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(today);
  const createWithPath = createTask.bind(null, path);
  const href = `/todo/${path}`;

  return(
    <>
      <div className='flex flex-row justify-between mb-4 '>
        <h2 className={`${outfit.className} text-xl font-semibold`}>
          Task:
        </h2>
        <Link href={href}>
          <XMarkIcon className='w-5 text-gray-500'/>
        </Link>
      </div>
      <form action={createWithPath} className='grow flex flex-col space-y-4 text-sm xl:text-base' >
        {/* Task Title */}
        <input 
          type="text" 
          name='title'
          placeholder='Task Title' 
          className={`${outfit.className} w-full p-2 rounded border bg-gray-100 `}
        />

        {/* Task description */}
        <textarea 
          id='description'
          name="description" 
          cols={30} 
          rows={3} 
          placeholder='Description'
          className={`${outfit.className} align-top resize-none w-full p-2 rounded border bg-gray-100`}
        />
        <div className='space-y-2'>

          {/* Task list category */}
          <div className='grid grid-cols-2 xl:grid-cols-4'>
            <label htmlFor="list" className={`${outfit.className} p-2`}>List</label>
            <div>
              <select 
                id="list" 
                name="listTitle" 
                className='p-2 rounded border bg-gray-100'
                defaultValue="" 
              >
                <option value="" disabled className={`${outfit.className}`}>
                  select list
                </option>
                {lists.map((list) => {
                  const isVisible = list.isVisible;
                  const title = list.title;
                  return(
                    isVisible && (
                    <option 
                      key={title} 
                      value={title}
                      className={`${outfit.className}`}
                    >{title}</option>
                    )
                  )
                })}
              </select>
            </div>
          </div>

          {/* Task due date */}
          <div>
            <div className='grid grid-cols-2 xl:grid-cols-4'>
              <label htmlFor="due_date" className={`${outfit.className} p-2`}>Due Date</label>
              <div>
                <DatePicker 
                  name='task_due_date'
                  // dateFormat={'YYY-MM-dd'}
                  selected={selectedDate}
                  onChange={(date) => date && setSelectedDate(date)}
                  dateFormat={'dd/MM/yyyy'}
                  minDate={today}
                  maxDate={lastDay}
                  className={`${outfit.className} p-2 rounded border bg-gray-100 max-w-[7rem]`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='grow flex flex-col justify-between text-sm xl:text-base'>
          <div />
          <div className='grid grid-cols-2 gap-4'>
            <button 
              type='submit'
              className='flex col-start-2 p-2 justify-center border rounded bg-orange-300'
            >
              <p className={`${outfit.className} font-semibold`}>Save Task</p>
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export function TaskDetail(
  { 
    task_id,
    title, 
    description, 
    list, 
    date,
    path,
    timestamp,
    done,
  }: {
    task_id: string,
    title: string,
    description: string, 
    list: string, 
    date: string,
    path: string,
    timestamp: string,
    done: boolean,
  }
) {
  const taskDate = new Date(date);
  const [selectedDate, setSelectedDate] = useState<Date | null>(taskDate);
  const updateTaskWithPath = updateTask.bind(null, task_id, timestamp, done, path);
  const deleteTaskWithId = deleteTask.bind(null, task_id, path);
  const href = `/todo/${path}`;
  return(
    <>
      <div className='flex flex-row justify-between mb-4 '>
        <h2 className={`${outfit.className} text-xl font-semibold`}>
          Task:
        </h2>
        <Link href={href}>
          <XMarkIcon className='w-5 text-gray-500'/>
        </Link>
      </div>
      <form className={`${outfit.className} grow flex flex-col space-y-4 text-sm xl:text-base`} >
        {/* Task Title */}
        <input 
          type="text" 
          name='title'
          defaultValue={title}
          className='w-full p-2 rounded border bg-gray-100'
        />

        {/* Task description */}
        <textarea 
          id='description'
          name="description" 
          cols={30} 
          rows={3}
          defaultValue={description}
          className='align-top resize-none w-full p-2 rounded border bg-gray-100'
        />
        <div className='space-y-2'>
          {/* Task list category */}
          <div className='grid grid-cols-2 xl:grid-cols-4'>
            <label htmlFor="list" className='p-2'>List</label>
            <div>
              <select 
                id="list" 
                name="listTitle" 
                defaultValue={list}
                className='p-2 rounded border bg-gray-100'
              >
                {lists.map((list) => {
                  const isVisible = list.isVisible;
                  const title = list.title;
                  return(
                    isVisible && (
                    <option 
                      key={title} 
                      value={title}
                    >{title}</option>
                    )
                  )
                })}
              </select>
            </div>
          </div>

          {/* Task due date */}
          <div>
            <div className='grid grid-cols-2 xl:grid-cols-4'>
              <label htmlFor="due_date" className={` p-2`}>Due Date</label>
              <div>
                <DatePicker 
                  name='task_due_date'
                  dateFormat={'dd/MM/yyyy'}
                  selected={selectedDate}
                  onChange={(date) => date && setSelectedDate(date)}
                  minDate={taskDate}
                  maxDate={taskDate}
                  className='p-2 rounded border bg-gray-100 max-w-[7rem]'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='grow flex flex-col justify-between text-sm xl:text-base'>
          <div />
          <div className='grid grid-cols-2 gap-4'>
            <button 
              type='submit'
              className='flex p-2 justify-center border border-gray-300 rounded bg-gray-100'
              formAction={deleteTaskWithId}
            >
              <p className='font-semibold'>Delete Task</p>
            </button>
            <button 
              type='submit'
              className='flex p-2 justify-center border rounded bg-orange-300'
              formAction={updateTaskWithPath}
            >
              <p className='font-semibold'>Save changes</p>
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export function ThisWeekTaskDetail(
  { 
    task_id,
    title, 
    description, 
    list, 
    date,
    path,
    timestamp,
    done,
  }: {
    task_id: string,
    title: string,
    description: string, 
    list: string, 
    date: string,
    path: string,
    timestamp: string,
    done: boolean,
  }
) {
  const today = new Date();

  const taskDate = new Date(date);
  const month = taskDate.getMonth();
  const year = taskDate.getFullYear();
  
  const weekStart = taskDate.getDate() - taskDate.getDay() < 0 ? 1 : taskDate.getDate() - taskDate.getDay();
  const weekEnd = taskDate.getDate() + 6 - taskDate.getDay() > new Date(year, month + 1, 0).getDate() 
  ? new Date(year, month + 1, 0).getDate() : taskDate.getDate() + 6 - taskDate.getDay();

  const currentWeekStart = today.getDate() - today.getDay() < 0 ? 1 : today.getDate() - today.getDay();
  
  const minDate = weekStart === currentWeekStart ? today 
    : weekStart > currentWeekStart ? new Date(year, month, weekStart) : taskDate;
  const maxDate = weekStart === currentWeekStart ? new Date(year, month, weekEnd) 
    : weekStart > currentWeekStart ? new Date(year, month, weekEnd) : taskDate;
  const [selectedDate, setSelectedDate] = useState<Date | null>(taskDate);
  const updateTaskWithPath = updateTask.bind(null, task_id, timestamp, done, path);
  const deleteTaskWithId = deleteTask.bind(null, task_id, path);
  const href = `/todo/${path}?include=${taskDate}`;
  return(
    <>
      <div className='flex flex-row justify-between mb-4 '>
        <h2 className={`${outfit.className} text-xl font-semibold`}>
          Task:
        </h2>
        <Link href={href}>
          <XMarkIcon className='w-5 text-gray-500'/>
        </Link>
      </div>
      <form className={`${outfit.className} grow flex flex-col space-y-4 text-sm xl:text-base`} >
        {/* Task Title */}
        <input 
          type="text" 
          name='title'
          defaultValue={title}
          className='w-full p-2 rounded border bg-gray-100'
        />

        {/* Task description */}
        <textarea 
          id='description'
          name="description" 
          cols={30} 
          rows={3}
          defaultValue={description}
          className='align-top resize-none w-full p-2 rounded border bg-gray-100'
        />
        <div className='space-y-2'>
          {/* Task list category */}
          <div className='grid grid-cols-2 xl:grid-cols-4'>
            <label htmlFor="list" className='p-2'>List</label>
            <div>
              <select 
                id="list" 
                name="listTitle" 
                defaultValue={list}
                className='p-2 rounded border bg-gray-100'
              >
                {lists.map((list) => {
                  const isVisible = list.isVisible;
                  const title = list.title;
                  return(
                    isVisible && (
                    <option 
                      key={title} 
                      value={title}
                    >{title}</option>
                    )
                  )
                })}
              </select>
            </div>
          </div>

          {/* Task due date */}
          <div>
            <div className='grid grid-cols-2 xl:grid-cols-4'>
              <label htmlFor="due_date" className={` p-2`}>Due Date</label>
              <div>
                <DatePicker 
                  name='task_due_date'
                  dateFormat={'dd/MM/yyyy'}
                  selected={selectedDate}
                  onChange={(date) => date && setSelectedDate(date)}
                  minDate={minDate}
                  maxDate={maxDate}
                  className='p-2 rounded border bg-gray-100 max-w-[7rem]'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='grow flex flex-col justify-between text-sm xl:text-base'>
          <div />
          <div className='grid grid-cols-2 gap-4'>
            <button 
              type='submit'
              className='flex p-2 justify-center border border-gray-300 rounded bg-gray-100'
              formAction={deleteTaskWithId}
            >
              <p className='font-semibold'>Delete Task</p>
            </button>
            <button 
              type='submit'
              className='flex p-2 justify-center border rounded bg-orange-300'
              formAction={updateTaskWithPath}
            >
              <p className='font-semibold'>Save changes</p>
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export function AddNewTaskByList( { path, list }: { path: string, list: string }) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const createWithPath = createTask.bind(null, path);
  const href = `/todo/${path}`;

  return(
    <>
      <div className='flex flex-row justify-between mb-4 '>
        <h2 className={`${outfit.className} text-xl font-semibold`}>
          Task:
        </h2>
        <Link href={href}>
          <XMarkIcon className='w-5 text-gray-500'/>
        </Link>
      </div>
      <form action={createWithPath} className='grow flex flex-col space-y-4 text-sm xl:text-base' >
        {/* Task Title */}
        <input 
          type="text" 
          name='title'
          placeholder='Task Title' 
          className={`${outfit.className} w-full p-2 rounded border bg-gray-100 `}
        />

        {/* Task description */}
        <textarea 
          id='description'
          name="description" 
          cols={30} 
          rows={3} 
          placeholder='Description'
          className={`${outfit.className} align-top resize-none w-full p-2 rounded border bg-gray-100`}
        />
        <div className='space-y-2'>

          {/* Task list category */}
          <div className='grid grid-cols-2 xl:grid-cols-4'>
            <label htmlFor="list" className={`${outfit.className} p-2`}>List</label>
            <div>
              <select 
                id="list" 
                name="listTitle" 
                className='p-2 rounded border bg-gray-100'
                defaultValue="" 
              >
                <option value="" disabled className={`${outfit.className}`}>
                  {list}
                </option>
              </select>
            </div>
          </div>

          {/* Task due date */}
          <div>
            <div className='grid grid-cols-2 xl:grid-cols-4'>
              <label htmlFor="due_date" className={`${outfit.className} p-2`}>Due Date</label>
              <div>
                <DatePicker 
                  name='task_due_date'
                  selected={selectedDate}
                  onChange={(date) => date && setSelectedDate(date)}
                  dateFormat={'dd/MM/yyyy'}
                  minDate={new Date()}
                  className={`${outfit.className} p-2 rounded border bg-gray-100 max-w-[7rem]`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='grow flex flex-col justify-between text-sm xl:text-base'>
          <div />
          <div className='grid grid-cols-2 gap-4'>
            <button 
              type='submit'
              className='flex col-start-2 p-2 justify-center border rounded bg-orange-300'
            >
              <p className={`${outfit.className} font-semibold`}>Save Task</p>
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export function TaskDetailByList(
  { 
    task_id,
    title, 
    description, 
    list, 
    date,
    path,
    timestamp,
    done,
  }: {
    task_id: string,
    title: string,
    description: string, 
    list: string, 
    date: string,
    path: string,
    timestamp: string,
    done: boolean,
  }
) {
  const taskDate = new Date(date);
  const [selectedDate, setSelectedDate] = useState<Date | null>(taskDate);
  const updateTaskWithPath = updateTask.bind(null, task_id, timestamp, done, path);
  const deleteTaskWithId = deleteTask.bind(null, task_id, path);
  const href = `/todo/${path}`;
  return(
    <>
      <div className='flex flex-row justify-between mb-4 '>
        <h2 className={`${outfit.className} text-xl font-semibold`}>
          Task:
        </h2>
        <Link href={href}>
          <XMarkIcon className='w-5 text-gray-500'/>
        </Link>
      </div>
      <form className={`${outfit.className} grow flex flex-col space-y-4 text-sm xl:text-base`} >
        {/* Task Title */}
        <input 
          type="text" 
          name='title'
          defaultValue={title}
          className='w-full p-2 rounded border bg-gray-100'
        />

        {/* Task description */}
        <textarea 
          id='description'
          name="description" 
          cols={30} 
          rows={3}
          defaultValue={description}
          className='align-top resize-none w-full p-2 rounded border bg-gray-100'
        />
        <div className='space-y-2'>
          {/* Task list category */}
          <div className='grid grid-cols-2 xl:grid-cols-4'>
            <label htmlFor="list" className='p-2'>List</label>
            <div>
              <select 
                id="list" 
                name="listTitle" 
                defaultValue={list}
                className='p-2 rounded border bg-gray-100'
              >
                {lists.map((list) => {
                  const isVisible = list.isVisible;
                  const title = list.title;
                  return(
                    isVisible && (
                    <option 
                      key={title} 
                      value={title}
                    >{title}</option>
                    )
                  )
                })}
              </select>
            </div>
          </div>

          {/* Task due date */}
          <div>
            <div className='grid grid-cols-2 xl:grid-cols-4'>
              <label htmlFor="due_date" className={` p-2`}>Due Date</label>
              <div>
                <DatePicker 
                  name='task_due_date'
                  selected={selectedDate}
                  onChange={(date) => date && setSelectedDate(date)}
                  dateFormat={'dd/MM/yyyy'}
                  minDate={new Date()}
                  className={`${outfit.className} p-2 rounded border bg-gray-100 max-w-[7rem]`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='grow flex flex-col justify-between text-sm xl:text-base'>
          <div />
          <div className='grid grid-cols-2 gap-4'>
            <button 
              type='submit'
              className='flex p-2 justify-center border border-gray-300 rounded bg-gray-100'
              formAction={deleteTaskWithId}
            >
              <p className='font-semibold'>Delete Task</p>
            </button>
            <button 
              type='submit'
              className='flex p-2 justify-center border rounded bg-orange-300'
              formAction={updateTaskWithPath}
            >
              <p className='font-semibold'>Save changes</p>
            </button>
          </div>
        </div>
      </form>
    </>
  )
}