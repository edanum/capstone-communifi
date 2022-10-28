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
}
