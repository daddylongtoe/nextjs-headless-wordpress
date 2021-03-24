import Nav from "./nav";
import { isEmpty } from "lodash";

export default function Header({ header, headerMenus }) {
  if (isEmpty(headerMenus)) return;

  return (
    <header>
      <Nav header={header} headerMenus={headerMenus} />
    </header>
  );
}
