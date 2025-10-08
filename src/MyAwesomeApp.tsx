// export function MyAwesomeApp() {
//   return (
//     <>
//       <h1>César</h1>
//       <h3>Carrasco</h3>
//     </>
//   );
// }

import type { CSSProperties } from "react";

const firstName = "César";
const lastName = "Carrasco";
const favoriteGames = ["Call of Duty", "Battlefield", "Delta Force"];
const isActive = true;
const address = {
  zipCode: "ABC-123",
  country: "Chile",
};

const myStyle: CSSProperties = {
  backgroundColor: "#fafafa",
  padding: 10,
  borderRadius: 10,
  marginTop: 10,
};
// Tambien se puede resolver con una funcion tipo flecha
export const MyAwesomeApp = () => {
  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>

      <p>{favoriteGames.join(", ")}</p>

      <h1>{isActive ? "Esta activo" : "No esta activo"}</h1>

      <p style={myStyle}>{JSON.stringify(address)}</p>
    </>
  );
};
