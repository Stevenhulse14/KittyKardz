import { Route, Routes as R } from "react-router-dom";

import { Home, CreateCardForm, SingleCardView } from ".";
const Routes = () => {
  return (
    <>
      <R>
        <Route path="/" element={<Home />} />
        <Route path="/CreateCard" element={<CreateCardForm />} />
        <Route path="/card/:id" element={<SingleCardView />} />
      </R>
    </>
  );
};

export default Routes;
