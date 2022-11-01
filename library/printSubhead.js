export function printSubhead(pathname) {
  switch (pathname) {
    case "/":
      return "Dashboard";
    case "/expenses":
      return "Ausgaben";
    case "/expenses/add":
      return "Ausgabe hinzufügen";
    case "/revenues":
      return "Einnahmen";
    case "/profile":
      return "Profil";
  }

  if (pathname.includes("/expenses/details/")) {
    return "Ausgabendetails";
  }

  if (pathname.includes("/expenses/edit/")) {
    return "Ausgabe editieren";
  }

  if (pathname.includes("/revenues/details/")) {
    return "Einnahmendetails";
  }

  if (pathname.includes("/revenues/edit/")) {
    return "Einnahme editieren";
  }
}
