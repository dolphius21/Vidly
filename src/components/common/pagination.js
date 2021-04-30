import Pagination from 'react-bootstrap/Pagination';
import PropTypes from 'prop-types';
import lodash from 'lodash';

const PaginationComp = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const totalPages = Math.ceil(itemsCount / pageSize);
  if (totalPages === 1) return null;
  let pages = lodash.range(1, totalPages + 1);

  return (
    <Pagination>
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

PaginationComp.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default PaginationComp;
