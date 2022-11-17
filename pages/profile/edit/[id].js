import UserForm from "../../../components/users/userForm";
import Router from "next/router";
import { useState, useEffect, useRef } from "react";
import { getLoadingAnimation } from "../../../library/getLoadingAnimation";
import { useSession } from "next-auth/react";

export default function ProfileEdit() {
  const [user, setUser] = useState();

  //PREPARE LOTTIE ANIMATION (LOADING)
  const container = useRef(null);
  useEffect(() => {
    getLoadingAnimation(container);
  }, []);
  //

  //PROTECT PAGE
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      Router.push("/login");
    },
  });
  //

  //GET USER-DATA VIA USEEFFECT FETCH
  useEffect(() => {
    if (session) {
      fetch(`/api/users/${session.user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        });
    }
  }, []);
    
    
  // BREAKPOINT FOR PROTECTION
  if (status === "loading") {
    return null;
  }
  //

  async function onSubmit(formData) {
    try {
      const response = await fetch(`/api/users/${user.id}`, {
        method: "PUT",
        body: JSON.stringify(formData),
      });
      await response.json();
      Router.push(`/profile`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UserForm
      onSubmit={onSubmit}
      user={user}
    />
  );
}
