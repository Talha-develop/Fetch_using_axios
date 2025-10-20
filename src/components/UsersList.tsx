import React, { useEffect } from "react";
import api from "../api/axiosInstance";

const UsersList = () => {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      try {
        const response = await api.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setUsers(response.data);
      } catch (error) {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div>
      <h1 className="text-3xl text-gray-700 text-center pt-6 pb-4">
        users List
      </h1>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">User ID</th>
            <th className="border p-2">Title</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr
              key={user.id}
              className={`${
                user.id % 3 === 0 ? "bg-blue-300" : "bg-green-300"
              }`}
            >
              <td className="border p-2">{user.id}</td>
              <td className="border p-2">{user.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
