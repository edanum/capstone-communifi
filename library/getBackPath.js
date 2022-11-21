import Router from "next/router";


export function getBackPath(pathname) {
  if (pathname.includes("/expenses/add")) {
    Router.push("/expenses");
  }

  if (pathname.includes("/expenses/details/")) {
    Router.push("/expenses");
  }

  if (pathname.includes("/expenses/edit/")) {
    const pathArray = window.location.pathname.split("/");
    const id = pathArray[3];
    Router.push("/expenses/details/" + id);
  }

  if (pathname.includes("/revenues/add")) {
    Router.push("/revenues");
  }

  if (pathname.includes("/revenues/details/")) {
    Router.push("/revenues");
  }

  if (pathname.includes("/revenues/edit/")) {
    const pathArray = window.location.pathname.split("/");
    const id = pathArray[3];
    Router.push("/revenues/details/" + id);
  }

  if (pathname.includes("/profile/edit/")) {
    Router.push("/profile/");
  }

  if (pathname.includes("/profile/details/")) {
    
    Router.back();
  }
}
