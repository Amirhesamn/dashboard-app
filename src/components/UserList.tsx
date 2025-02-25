"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/lib/api/fetchUsers";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";

export default function UserList() {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-32">
        <CircularProgress color="primary" />
      </div>
    );

  if (error)
    return (
      <Alert severity="error" className="mt-4">
        Error fetching users
      </Alert>
    );

  return (
    <div className="p-6">
      <Typography variant="h5" className="text-center mb-4 font-bold">
        User List
      </Typography>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-white">
        {users?.map((user) => (
          <Card
            key={user.id}
            sx={{
              boxShadow: 3,
              borderRadius: 2,
              padding: 2,
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.05)" },
            }}
            className="hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <CardContent>
              <Typography variant="h6" className="text-red-500">
                {user.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {user.email}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
