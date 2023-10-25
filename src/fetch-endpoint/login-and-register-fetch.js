import DOMPurify from "dompurify";

export async function registerFormValidationFetch(formData) {
  //   console.log(formData);

  const userName = DOMPurify.sanitize(formData.userName);
  const email = DOMPurify.sanitize(formData.email);
  const password = DOMPurify.sanitize(formData.password);
  const phoneNumber = DOMPurify.sanitize(formData.phoneNumber);
  const bankName = DOMPurify.sanitize(formData.bankName);
  const bankAccountNumber = DOMPurify.sanitize(formData.bankAccountNumber);
  const bankAccountName = DOMPurify.sanitize(formData.bankAccountName);

  //   console.log("username = ", userName);

  if (
    userName.trim() === "" ||
    email.trim() === "" ||
    password.trim() === "" ||
    phoneNumber.trim() === "" ||
    bankName.trim() === "" ||
    bankAccountNumber.trim() === "" ||
    bankAccountName.trim() === ""
  ) {
    return "All fields must be filled.";
  }

  if (password.length < 6) return "Password must be atleast 6 characters";

  try {
    const response = await fetch(
      "https://perfume-backend-tau.vercel.app/register-form-validation",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );

    if (response.ok) {
      const data = await response.json();
      //   console.log(data.response);
      return data.response;
    } else {
      console.error("Server responded with an error:", response.status);
      return "Server Error";
    }
  } catch (error) {
    console.error("Error:", error);
    return "Server Error";
  }
}

export async function loginFormValidationFetch(formData) {
  //   console.log(formData);

  const email = DOMPurify.sanitize(formData.email);
  const password = DOMPurify.sanitize(formData.password);

  if (email.trim() === "" || password.trim() === "") {
    return "All fields must be filled.";
  }

  try {
    const response = await fetch(
      "https://perfume-backend-tau.vercel.app/login-form-validation",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );

    if (response.ok) {
      const data = await response.json();
      //   console.log(data.response);
      return data.response;
    } else {
      console.error("Server responded with an error:", response.status);
      return "Server Error";
    }
  } catch (error) {
    console.error("Error:", error);
    return "Server Error";
  }
}

export async function getAuthenticatedUserFetch() {
  const response = await fetch("https://perfume-backend-tau.vercel.app/get-authenticated-user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const data = await response.json();

    if (data.user !== null) {
    //   console.log(data.user);
      return data.user;
    }

    return null;
  }
}

export async function signOutAuthenticatedUserFetch() {
  await fetch("https://perfume-backend-tau.vercel.app/sign-out", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
