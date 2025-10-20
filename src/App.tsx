import React from "react";
import UsersList from "./components/UsersList";

const App = () => {
  return (
    <div>
      <h1 className="text-5xl text-center pt-4 text-green-500 font-bold">
        Data is being fetched from the api!
      </h1>
      <UsersList />
    </div>
  );
};

export default App;
