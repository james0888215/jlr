import { DataGrid } from '@mui/x-data-grid';
import { TABLE_HEADERS } from "../consts";

export default function DataTable(props) {
    const { rows, headers, handleOnCellClick } = props;

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={headers}
                onRowClick={handleOnCellClick}
            />
        </div>
    );
}
