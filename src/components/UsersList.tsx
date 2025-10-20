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
      <ul>
        {users.map((user: any) => (
          <li
            key={user.id}
            className={`mb-2 border-b-2 p-6 ${
              user.id % 3 === 0 ? "bg-blue-300" : "bg-green-300"
            }`}
          >
            <b> User's ID: </b> {user.id} <br />
            <b> Title: </b> {user.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
