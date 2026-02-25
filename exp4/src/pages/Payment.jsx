import { useEffect, useState } from "react";

function Payment({ total, onSuccess, onFail })  {

  const [time, setTime] = useState(20);

  useEffect(() => {
  if (time <= 0) {
    onFail();
    return;
  }
  const t = setTimeout(() => setTime(time - 1), 1000);
  return () => clearTimeout(t);

}, [time]);

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        <h2>💳 Payment Gateway</h2>

        <p style={{marginTop:10}}>
          Amount to pay:
          <strong style={{color:"#3b6bdc"}}> Rs. {total}</strong>
        </p>

        <div style={styles.timer}>
          ⏳ Complete payment in: {time}s
        </div>

        <button style={styles.btn} onClick={onSuccess}>
          DONE PAYMENT
        </button>

      </div>
    </div>
  );
}

const styles={

  page:{
    minHeight:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    background:"linear-gradient(to right,#eef2ff,#f7f9ff)"
  },

  card:{
    background:"white",
    padding:45,
    borderRadius:16,
    width:420,
    textAlign:"center",
    boxShadow:"0 10px 35px rgba(0,0,0,0.1)"
  },

  timer:{
    marginTop:20,
    padding:14,
    background:"#f1f4ff",
    borderRadius:10,
    fontSize:18
  },

  btn:{
    marginTop:30,
    padding:16,
    width:"100%",
    border:"none",
    borderRadius:12,
    background:"linear-gradient(to right,#27ae60,#2ecc71)",
    color:"white",
    fontSize:18,
    cursor:"pointer"
  }
};

export default Payment;