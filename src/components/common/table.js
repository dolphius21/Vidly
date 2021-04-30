import TableHeader from './tableHeader';
import TableBody from './tableBody';
import Table from 'react-bootstrap/Table';

const TableComp = ({ columns, sortColumn, onSort, data }) => {
  return (
    <Table responsive>
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={data} columns={columns} />
    </Table>
  );
};

export default TableComp;
