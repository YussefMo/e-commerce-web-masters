'use client';

import clsx from 'clsx';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';



function Pagination({ currentPage, totalPages }) {


  // Prefetch the next and prev page when component mounts or currentPage changes
  // Prefetch the next and prev page when component mounts or currentPage changes


  const getPageNumbers = () => {
    const pages = [1];

    if (currentPage > 3) {
      pages.push('...');
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      if (i > 1 && i < totalPages) {
        pages.push(i);
      }
    }

    if (currentPage < totalPages - 2) {
      pages.push('...');
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const linkClass = (active) =>
    clsx(
      'border text-sm flex items-center justify-center w-8 h-8',
      active
        ? 'bg-primary-identity text-white border-primary-identity'
        : 'bg-primary-foreground hover:bg-muted border-input text-muted-foreground'
    );

  return (
    <section className="mt-40 flex justify-center pt-4">
      <div className="flex items-center gap-5">
        <Link
          href={currentPage > 1 ? `?page=${currentPage - 1}` : '#'}
          className={`${currentPage !== 1 ? 'bg-primary-foreground border-primary-identity border-1' : 'bg-primary-foreground hover:bg-muted border-input text-muted-foreground'} ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''} flex h-10 w-10 items-center justify-center rounded-md`}
          aria-disabled={currentPage === 1}
        >
          <ChevronLeft className="text-primary-identity h-5 w-5" />
        </Link>

        <div className="flex gap-5">
          {getPageNumbers().map((page, index) => (
            <span key={index}>
              {page === '...' ? (
                <span className="text-muted-foreground px-2">...</span>
              ) : (
                <Link
                  href={`?page=${page}`}
                  className={`${linkClass(currentPage === page)} rounded-full`}
                >
                  {page}
                </Link>
              )}
            </span>
          ))}
        </div>

        <Link
          href={currentPage < totalPages ? `?page=${currentPage + 1}` : '#'}
          className={`${currentPage !== totalPages ? 'bg-primary-foreground border-primary-identity border-1' : 'bg-primary-foreground hover:bg-muted border-input text-muted-foreground'} ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''} flex h-10 w-10 items-center justify-center rounded-md`}
          aria-disabled={currentPage === totalPages}
        >
          <ChevronRight className="text-primary-identity h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}

export default Pagination;
