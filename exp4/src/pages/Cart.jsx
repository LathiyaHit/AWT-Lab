function Cart({ cartData, goBack, goPayment }) {
  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <h2 style={{marginBottom:20}}>🛒 Your Cart</h2>

        {cartData.cart.length === 0 && (
          <p style={{color:"#777"}}>No items in cart</p>
        )}

        {cartData.cart.map((item, index) => (
          <div key={index} style={styles.row}>
            <div>
              <strong>{item.name}</strong>
              <div style={{color:"#666"}}>Rs. {item.price}</div>
            </div>

            <button
              style={styles.remove}
              onClick={() => cartData.removeFromCart(index)}
            >
              Remove
            </button>
          </div>
        ))}

        <h3 style={{marginTop:25}}>
          Total: <span style={{color:"#3b6bdc"}}>Rs. {cartData.total}</span>
        </h3>

        <div style={styles.btnRow}>
          <button onClick={goBack} style={styles.back}>
            ← Continue Shopping
          </button>

          {cartData.cart.length > 0 && (
            <button onClick={goPayment} style={styles.pay}>
              Proceed to Payment →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {

  page:{
    minHeight:"100vh",
    background:"linear-gradient(to right,#eef2ff,#f7f9ff)",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },

  box:{
    background:"white",
    padding:40,
    borderRadius:14,
    width:520,
    boxShadow:"0 8px 30px rgba(0,0,0,0.08)"
  },

  row:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    background:"#f8f9ff",
    padding:14,
    marginTop:12,
    borderRadius:10
  },

  remove:{
    background:"#e74c3c",
    color:"white",
    border:"none",
    padding:"8px 14px",
    borderRadius:8,
    cursor:"pointer"
  },

  btnRow:{
    marginTop:30,
    display:"flex",
    justifyContent:"space-between"
  },

  back:{
    padding:"12px 18px",
    borderRadius:10,
    border:"none",
    background:"#95a5a6",
    color:"white",
    cursor:"pointer"
  },

  pay:{
    padding:"12px 18px",
    borderRadius:10,
    border:"none",
    background:"linear-gradient(to right,#3b6bdc,#5a8dee)",
    color:"white",
    cursor:"pointer"
  }
};

export default Cart;