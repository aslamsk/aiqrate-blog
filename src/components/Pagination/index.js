import React from 'react';
import propTypes from 'prop-types';
import LocalizedLink from '../LocalizedLink';
import useTranslations from '../useTranslations';

import * as S from './styled';
import { Link } from 'gatsby';

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => {
  const { next, prev, of } = useTranslations();

  return (
    <S.PaginationWrapper>
      <li>
        {!isFirst && (
          <LocalizedLink to={prevPage}>← {prev}</LocalizedLink>
        )}
      </li>
      <p>
         <Link to='/'>
         {currentPage}
         </Link> 
          {of} 
         <Link to='/'>
         {numPages}
         </Link>
      </p>

      {/* <div className="pagination-number">
        {pages.map(page =>
          isNumber(page) ? (
            <Link
              key={`pagination-number${page}`}
              to={`${subpath}${page === 1 ? '' : `/${page}`}`}
              activeClassName="active"
            >
              {page}
            </Link>
          ) : (
            <span key="ellipsis">{page}</span>
          ),
        )}
      </div> */}



      <li>
        {!isLast && (
          <LocalizedLink to={nextPage}>{next} →</LocalizedLink>
        )}
      </li>
    </S.PaginationWrapper>
  );
};

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
};

export default Pagination;
