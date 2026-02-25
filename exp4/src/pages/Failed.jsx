function Failed({ goHome }) {
  return (
    <div style={{textAlign:"center",padding:60}}>
      <h1 style={{color:"#e74c3c"}}>❌ Payment Unsuccessful</h1>
      <p>Payment time expired. Please try again.</p>

      <button
        onClick={goHome}
        style={{
          marginTop:20,
          padding:12,
          background:"#333",
          color:"white",
          border:"none",
          borderRadius:8,
          cursor:"pointer"
        }}
      >
        Back to Shopping
      </button>
    </div>
  );
}

export default Failed;