import products from "../data/products";

function Dashboard({ user, cartData, openCart, logout }){
  return (
    <div>
      {/* top bar */}
      <div style={styles.top}>
        <h3>Hello, {user}</h3>

        <div>
          <button onClick={openCart} style={styles.cartBtn}>
            Cart ({cartData.cart.length})
          </button>

          <button onClick={logout} style={styles.logout}>
            Logout
          </button>
        </div>
      </div>

      {/* product grid */}
      <div style={styles.grid}>
        {products.map((p) => (
          <div key={p.id} style={styles.card}>
            <h3>{p.name}</h3>
            <p>Rs. {p.price}</p>
            <button
                style={styles.btn}
                onClick={() => cartData.addToCart(p)}
            >
            Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  logout: {
    padding: "8px 14px",
    borderRadius: 8,
    border: "none",
    background: "#e74c3c",
    color: "white",
    cursor: "pointer",
    marginLeft: 10
  },
  cartBtn: {
    padding: "8px 14px",
    borderRadius: 8,
    border: "none",
    background: "black",
    color: "white",
    cursor: "pointer"
  },
  top: {
    padding: 20,
    background: "#2c3e50",
    color: "white",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  grid: {
    display: "flex",
    gap: 30,
    padding: 40,
    flexWrap: "wrap",
    justifyContent: "center"
  },
  card: {
    background: "white",
    padding: 25,
    borderRadius: 12,
    width: 220,
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  },
  btn: {
    marginTop: 10,
    padding: 10,
    border: "none",
    borderRadius: 8,
    background: "#3b6bdc",
    color: "white",
    cursor: "pointer",
    width: "100%"
  }
  
};

export default Dashboard;