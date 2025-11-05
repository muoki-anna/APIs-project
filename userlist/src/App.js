import React, { useState, useEffect } from 'react';

// UserList Component  
const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setListOfUser(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch users');
        setLoading(false);
      });

    }, []);

  if (loading) return <div className="text-center p-8">Loading...</div>;
  if (error) return <div className="text-center p-8 text-red-600">{error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {listOfUser.map(user => (
        <div key={user.id} className="border p-4 rounded shadow">
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-600">@{user.username}</p>
          <p className="text-sm mt-2">📧 {user.email}</p>
          <p className="text-sm">📞 {user.phone}</p>
          <p className="text-sm">🌐 {user.website}</p>
          <p className="text-sm">🏢 {user.company.name}</p>
          <p className="text-sm">📍 {user.address.city}</p>
        </div>
      ))}
    </div>
  );
};

export default function App() {
  
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-6">
        <h1 className="text-3xl font-bold">User Directory</h1>
      </header>
      <UserList />
    </div>
  );
}