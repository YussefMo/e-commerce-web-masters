import clsx from 'clsx';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

import { Link } from 'react-router-dom';

function Pagination({ currentPage, totalPages }) {
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
      'border text-sm flex items-center justify-center w-8 h-8 rounded-full',
      active
        ? 'bg-primaryColor text-white border-primaryColor'
        : 'border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-white'
    );

  return (
    <section className="mt-10 flex justify-center pt-4 pb-10">
      <div className="flex items-center gap-5">
        <Link
          to={currentPage > 1 ? `?page=${currentPage - 1}` : '#'}
          className={clsx(
            'border-primaryColor text-primaryColor flex h-10 w-10 items-center justify-center rounded-md border',
            currentPage > 1
              ? 'hover:bg-primaryColor hover:text-white'
              : 'cursor-not-allowed opacity-50'
          )}
          aria-disabled={currentPage === 1}
        >
          <BiChevronLeft className="h-5 w-5" />
        </Link>

        <div className="flex gap-5">
          {getPageNumbers().map((page, index) => (
            <span key={index}>
              {page === '...' ? (
                <span className="text-muted-foreground px-2">...</span>
              ) : (
                <Link
                  to={`?page=${page}`}
                  className={linkClass(currentPage === page)}
                >
                  {page}
                </Link>
              )}
            </span>
          ))}
        </div>

        <Link
          to={currentPage < totalPages ? `?page=${currentPage + 1}` : '#'}
          className={clsx(
            'border-primaryColor text-primaryColor flex h-10 w-10 items-center justify-center rounded-md border',
            currentPage < totalPages
              ? 'hover:bg-primaryColor hover:text-white'
              : 'cursor-not-allowed opacity-50'
          )}
          aria-disabled={currentPage === totalPages}
        >
          <BiChevronRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}

export default Pagination;
