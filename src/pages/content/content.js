import { useState, useEffect } from "react";

import {
  getAuthenticatedUserFetch,
  signOutAuthenticatedUserFetch,
} from "../../fetch-endpoint/login-and-register-fetch";

function Content() {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  useEffect(() => {
    const fetchAuthenticatedUser = async () => {
      try {
        const user = await getAuthenticatedUserFetch();
        if (user !== null) {
          setAuthenticatedUser(user);
          // console.log(authenticatedUser);
        }
      } catch (error) {
        console.error("Error fetching authenticated user:", error);
      }
    };

    fetchAuthenticatedUser();
  }, []);
  return (
    <div>
      <div className="text-xl font-semibold mb-4">MAIN CONTENT</div>
      {authenticatedUser === null ? (
        <a className="bg-white p-2 text-black mt-4" href="/login">
          <span className="font-bold">LOGIN</span>
        </a>
      ) : (
        <div className="mt-4">
          <div className="mb-5">Welcome {authenticatedUser.email}</div>
          <a
            className=" bg-white p-2 text-black"
            href="/content"
            onClick={async () => {
              signOutAuthenticatedUserFetch();
            }}
          >
            <span className="font-bold" >SIGNOUT</span>
          </a>
        </div>
      )}
    </div>
  );
}

export default Content;
