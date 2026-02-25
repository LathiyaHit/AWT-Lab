import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Success from "./pages/Success";
import useCart from "./hooks/useCart";
import Failed from "./pages/Failed";

function App() {

  const [user, setUser] = useState(null);
  const [page, setPage] = useState("dashboard");

  const cartData = useCart();

  if (!user) return <Login onLogin={setUser} />;

  if (page === "cart")
    return (
      <Cart
        cartData={cartData}
        goBack={() => setPage("dashboard")}
        goPayment={() => setPage("payment")}
      />
    );

  if (page === "payment")
  return (
    <Payment
      total={cartData.total}
      onSuccess={() => {
        cartData.clearCart();
        setPage("success");
      }}
      onFail={() => setPage("failed")}
    />
  );

  if (page === "failed")
  return (
    <Failed goHome={() => setPage("dashboard")} />
  );

  if (page === "success")
    return (
      <Success
        goHome={() => setPage("dashboard")}
      />
    );

  return (
  <Dashboard
    user={user}
    cartData={cartData}
    openCart={() => setPage("cart")}
    logout={() => setUser(null)}
  />
  );
}

export default App;