import React from "react";

import styles from "./Counsellor.module.scss";

//MUI
import { Delete, Edit } from "@mui/icons-material";

export default function CounsellorCard() {
  return (
    <>
      <div className={"col-5 " + styles.counsellorCard}>
        <img
          src="https://i.pinimg.com/236x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg"
          alt=""
        />
        <br />
        <h4 className="mb-1 text-white">Terry Crews</h4>
        <p className="small mb-2 text-light">Counsellor</p>
        <p className="small text-light">+91 9632587410</p>
        <p className="m-2 text-white small">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          praesentium deserunt quis laudantium, excepturi repellat? Quos
          consequuntur nostrum laudantium...
        </p>
        <div>
          <button className="btn btn-danger mx-2">
            <Delete />
          </button>
          <button className="btn btn-primary mx-2">
            <Edit />
          </button>
        </div>
      </div>

      <div className={"col-5 " + styles.counsellorCard}>
        <img
          src="https://i.pinimg.com/236x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg"
          alt=""
        />
        <br />
        <h4 className="mb-1 text-white">Terry Crews</h4>
        <p className="small mb-2 text-light">Counsellor</p>
        <p className="small text-light">+91 9632587410</p>
        <p className="m-2 text-white small">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          praesentium deserunt quis laudantium, excepturi repellat? Quos
          consequuntur nostrum laudantium...
        </p>
        <div>
          <button className="btn btn-danger mx-2">
            <Delete />
          </button>
          <button className="btn btn-primary mx-2">
            <Edit />
          </button>
        </div>
      </div>
    </>
  );
}
