"use client";

import { useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";

export default function ModalDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Modal</h2>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          className="absolute top-1/2 left-1/2 bg-white p-6 rounded-md shadow-lg"
          sx={{ transform: "translate(-50%, -50%)", minWidth: 300 }}
        >
          <Typography variant="h6">This is a Modal for Amirhesam</Typography>
          <Button
            variant="contained"
            color="error"
            onClick={() => setOpen(false)}
            className="mt-4"
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
