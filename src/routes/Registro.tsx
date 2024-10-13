import { useNavigate } from "react-router-dom";
import Fireapp from "../FireBase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
const firestore = getFirestore(Fireapp);
const auth = getAuth(Fireapp);

const Registro = () => {
  const Navegacion = useNavigate();
  const [error, setError] = useState<string | null>(null);

  function handleRegister(event) {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    RegistrarUser(email, password);
  }

  async function RegistrarUser(email: string, password: string) {
    try {
      const infoUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const docuRef = doc(firestore, `usuarios/${infoUser.user.uid}`);
      await setDoc(docuRef, { email, password });
      Navegacion("/Init");
    } catch (err: unknown) {
      setError("Ocurrió un error inesperado.");
    }
  }
  const handleRegresar = () => {
    Navegacion("/");
  };

  return (
    <>
      <div className=" p-5 text-center">
        <h2>Registrate</h2>
        <form onSubmit={handleRegister}>
          <div className="d-flex align-items-center flex-column ">
            <div className="w-25 p-1">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="E-mail"
                required
              />
            </div>
            <div className="w-25 p-1">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                required
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button type="submit" className="btn btn-dark ">
            {" "}
            Registrase{" "}
          </button>
          <button onClick={handleRegresar} className="btn btn-info m-1 ">
            {" "}
            Regresar{" "}
          </button>
        </form>
      </div>
    </>
  );
};

export default Registro;
