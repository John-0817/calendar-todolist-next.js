'use client'

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation'

export function PaginationByList({totalPages, currentPage}: {totalPages: number[], currentPage: number}) {
  const lastPage = totalPages[totalPages.length -1];
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return(
    <div className='flex justify-center'>
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= lastPage}
      />
    </div>
  )
}

function PaginationArrow({href, direction, isDisabled}: {href: string, direction: 'left' | 'right', isDisabled: boolean}) {
  const className = clsx(
    'flex h-10 w-10 items-center justify-center rounded border',
    {
      'mr-2': direction === 'left',
      'ml-2': direction === 'right',
    },
  );
  
  const icon =
    direction === 'left' ? (
      <ArrowLeftIcon className="w-4" />
    ) : (
      <ArrowRightIcon className="w-4" />
    );
  
  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  );
}