import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div>
        <button>
          <Link to={"/dashboard/add"}>Add New Product</Link>
        </button>
        <button>See All Product</button>

        <button>Order Product Status</button>

        <button>Delivered Product</button>
      </div>
    </div>
  );
};

export default Dashboard;
