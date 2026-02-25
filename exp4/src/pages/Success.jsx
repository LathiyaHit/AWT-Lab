function Success({ goHome }) {
  return (
    <div style={{ textAlign: "center", padding: 60 }}>
      <h1>✅ Order Placed Successfully!</h1>
      <p>Your items will be delivered soon.</p>

      <button
        style={{
          padding: 12,
          marginTop: 20,
          background: "black",
          color: "white",
          border: "none",
          borderRadius: 8
        }}
        onClick={goHome}
      >
        Back to Shop
      </button>
    </div>
  );
}

export default Success;