import { Slide } from "react-awesome-reveal";

import React from "react";

const Trustus = () => {
  return (
    <div>
      <h2>Our Features</h2>

      {/* Items slide in one after another */}
      <Slide direction="up" cascade triggerOnce>
        <div className="feature">🚀 Performance</div>
        <div className="feature">💡 Simplicity</div>
        <div className="feature">🎨 Customization</div>
      </Slide>
    </div>
  );
};

export default Trustus;
