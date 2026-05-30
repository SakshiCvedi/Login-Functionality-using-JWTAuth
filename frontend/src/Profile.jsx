import { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] =
    useState(null);

  useEffect(() => {
    async function getProfile() {
      const token =
        localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:3000/profile",
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

      const data =
        await response.json();

      if (response.ok) {
        setUser(data.user);
      } else {
        alert(data.message);
      }
    }

    getProfile();
  }, []);

  return (
    <>
      <h1>Profile Page</h1>

      {user && (
        <h2>
          Welcome {user.username}
        </h2>
      )}
    </>
  );
}

export default Profile;