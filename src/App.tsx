import React, { useState } from "react";
import UsersList from "./components/UsersList";

const App = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div>
      <h1 className="text-5xl text-center pt-4 text-green-500 font-bold">
        Data is fetched from the api!
      </h1>
      <UsersList key={refreshKey} />
      <button
        onClick={() => setRefreshKey((k) => k + 1)}
        className="fixed bottom-8 right-8 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 cursor-pointer"
      >
        Refresh
      </button>
    </div>
  );
};

export default App;
