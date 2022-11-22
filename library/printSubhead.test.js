import "@testing-library/jest-dom";
import { printSubhead } from "../library/printSubhead";

test("Test if the right subhead gets printed", async () => {
  const pathname = "/"

  const result = printSubhead(pathname);
  expect(result).toStrictEqual("Dashboard");
});

test("Test if the right subhead gets printed", async () => {
  const pathname = "/expenses";

  const result = printSubhead(pathname);
  expect(result).toStrictEqual("Ausgaben");
});

test("Test if the right subhead gets printed", async () => {
  const pathname = "/expenses/add";

  const result = printSubhead(pathname);
  expect(result).toStrictEqual("Ausgabe hinzufügen");
});

test("Test if the right subhead gets printed", async () => {
  const pathname = "/revenues/add";

  const result = printSubhead(pathname);
  expect(result).toStrictEqual("Einnahme hinzufügen");
});

test("Test if the right subhead gets printed", async () => {
  const pathname = "/revenues";

  const result = printSubhead(pathname);
  expect(result).toStrictEqual("Einnahmen");
});

test("Test if the right subhead gets printed", async () => {
  const pathname = "/profile";

  const result = printSubhead(pathname);
  expect(result).toStrictEqual("Profil");
});

test("Test a pathname including expense details", async () => {
  const pathname = "/expenses/details/87787488";

  const result = printSubhead(pathname);
  expect(result).toStrictEqual("Ausgabendetails");
});

test("Test a pathname including expense edit", async () => {
  const pathname = "/expenses/edit/343287488";

  const result = printSubhead(pathname);
  expect(result).toStrictEqual("Ausgabe editieren");
});


test("Test a pathname including revenue details", async () => {
  const pathname = "/revenues/details/87787488";

  const result = printSubhead(pathname);
  expect(result).toStrictEqual("Einnahmendetails");
});

test("Test a pathname including revenue edit", async () => {
  const pathname = "/revenues/edit/343287488";

  const result = printSubhead(pathname);
  expect(result).toStrictEqual("Einnahme editieren");
});