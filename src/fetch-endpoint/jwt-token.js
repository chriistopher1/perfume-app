import Cookies from "js-cookie";

export async function checkJwtToken() {
  const token = Cookies.get("token");

  //   console.log("token = ", token);

  if (!token) return null;

  try {
    const response = await fetch(
      "https://perfume-backend-tau.vercel.app/get-authenticated-user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: token }),
      },
    );

    if (response.ok) {
      const data = await response.json();
        // console.log("data = ", data);
      return data.user.user;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}
