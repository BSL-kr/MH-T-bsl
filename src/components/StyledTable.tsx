import styled from 'styled-components';

const TableContainer = styled.div`
  width: 100%;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  tr {
    height: 44px;
  }

  tr td {
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
  }

  td {
    text-align: center;
    vertical-align: middle;
    font-size: 16px;

    font-family: Gothic A1;
    font-size: 16px;
  }

  td:nth-child(odd) {
    width: 84px;
    background-color: #f8f8f8;
    font-weight: 600;
  }

  td:nth-child(even) {
    width: 83px;
    font-weight: 500;
  }
`;

const data = [
  ['CAS No.', '00-00-0', 'KE No.', '-'],
  ['물질성상', '-', '분자량', '-'],
  ['끓는점', '-', '녹는점', '-'],
  ['인화점', '-', '주요용도', '-']
];

function StyledTable() {
  return (
    <TableContainer>
      <table>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
}

export default StyledTable;
