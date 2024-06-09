import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { url } from "../url";
import { Container, Alert } from "react-bootstrap";
import { setUserTypeAction } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import SellerBookDetailsContainer from "./MyComponent/SellerBookDetailsContainer";
import Loading from "./MyComponent/Loading";

const Collection = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const [loading,setLoading]=useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  dispatch(setUserTypeAction("seller"));
  const isSellerAuthenticated = useSelector(
    (state) => state.sellerauth.isAuthenticated
  );
  var x = 0;
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url + "/collection", {
          params: {
            userType: "seller",
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("sellertoken")}`,
          },
        })
        .then((response) => {
          setBooks(response.data.books);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching profile:", error);
          setError(error.response.data.message);
        })
      
    };
    x = x + 1;
    if (x === 1) {
      if (isSellerAuthenticated) {
        fetchData();
      } else {
        navigate("/seller");
      }
    }
  }, [isSellerAuthenticated]);

  return (
    <Container>
      {error ? (
        <Alert variant="danger">{error}</Alert>
      ) : loading ? <Loading/> : (
        <SellerBookDetailsContainer books={books} />
      )}
    </Container>
  );
};

export default Collection;
