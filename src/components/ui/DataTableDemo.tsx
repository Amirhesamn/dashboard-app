"use client";

import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "email", headerName: "Email", width: 300 },
];

const rows = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

export default function DataTableDemo() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Data Table</h2>
      <div className="h-64">
        <DataGrid rows={rows} columns={columns} pageSizeOptions={[5]} />
      </div>
    </div>
  );
}
