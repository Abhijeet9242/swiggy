import { useNavigate } from "react-router-dom";
import "./Succeess.css";

const Success = () => {
  const navigate = useNavigate();
  const goTohome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="sucmaindiv">
        <div className="success-top">
          <div class="card">
            <div
              style={{
                borderRadius: "200px",
                height: "200px",
                width: "200px",
                background: "#F8FAF5",
                margin: "0 auto",
              }}
            >
              <i class="checkmark">✓</i>
            </div>
            <h1 class="success_h1">Success</h1>
            <p class="success_p">
              We received your purchase request;
              <br /> we'll be in touch shortly!
            </p>
            <div className="gotohome" onClick={goTohome}>
              Go To HOME
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
