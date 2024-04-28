import React from "react";
import Rightside from "../Side/Rightside";
import Navbar from "../Shared/Navbar";
import { useParams } from "react-router-dom";
import Header from "../Shared/Header";

const NewsDetails = () => {
  const { _id } = useParams();
  return (
    <div>
        <Header></Header>
      <Navbar></Navbar>
      <div className="flex justify-end">
        <div>News details</div>
        <p>{_id}</p>
        <div>
          <Rightside></Rightside>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
