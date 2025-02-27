"use client";

import { Button } from "@mui/material";

export default function ButtonDemo() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Buttons</h2>
      <Button variant="contained" color="primary">
        Primary Button
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary Button
      </Button>
    </div>
  );
}
