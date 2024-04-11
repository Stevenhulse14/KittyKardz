import { Route, Routes as R } from "react-router-dom";
import Home from "./Home.jsx";
import CreateCardForm from "./CreateCardForm.jsx";

const Routes = () => {
  return (
    <>
      <R>
        <Route path="/" element={<Home />} />
        <Route path="/CreateCard" element={<CreateCardForm />} />
      </R>
    </>
  );
};

export default Routes;
