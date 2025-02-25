"use client";

import Button from "@mui/material/Button";

export default function TestButton() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button variant="contained" className="bg-primary" color="primary">
        MUI + Tailwind
      </Button>
    </div>
  );
}
