export function printSubhead(pathname) {
  switch (pathname) {
    case "/":
      return "Dashboard";
    case "/expenses":
      return "Ausgaben";
    case "/expenses/add":
      return "Ausgabe hinzufügen";
    case "/expenses/details/":
      return "Ausgabendetails";
    case "/revenues":
      return "Einnahmen";
    case "/profile":
      return "Profil";
  }

  if (pathname.includes("/expenses/details/")) {
    return "Ausgabendetails";
  }
}
