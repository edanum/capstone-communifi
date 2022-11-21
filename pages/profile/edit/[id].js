import UserForm from "../../../components/users/userForm";
import Router from "next/router";
import { useState, useEffect, useRef } from "react";
import { getLoadingAnimation } from "../../../library/getLoadingAnimation";
import { getSession } from "next-auth/react";

export default function ProfileEdit({ user }) {
  const [fullUserData, setFullUserData] = useState("");

  //PREPARE LOTTIE ANIMATION (LOADING)
  const container = useRef(null);
  useEffect(() => {
    getLoadingAnimation(container);
  }, []);
  //

  //GET USER-DATA VIA USEEFFECT FETCH
  useEffect(() => {
    fetch(`/api/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setFullUserData(data);
      });
  }, []);
  //

  async function onSubmit(formData) {
    try {
      const response = await fetch(`/api/users/${fullUserData.id}`, {
        method: "PUT",
        body: JSON.stringify(formData),
      });
      await response.json();
      Router.push(`/profile`);
    } catch (error) {
      console.log(error);
    }
  }

  return <UserForm onSubmit={onSubmit} user={fullUserData} />;
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: session,
  };
}
