import { Routes, Route, Link, useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

function About() {
  return <h2>About Page</h2>;
}
function Home() {
  return <h3>I am Home Page</h3>;
}
function Listing() {
  return <h3>I am Listing Page</h3>;
}
function PageNotFound() {
  return <h3>Page Not found</h3>;
}
function Users(props) {
  // console.log(props.isAdmin);
  let params = useParams();
  let [user, setUser] = useState(null);
  console.log("46", params);
  // https://fakestoreapi.com/users/2
  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${params.id}`)
      .then((resp) => resp.json())
      .then((userData) => {
        console.log(userData);
        setUser(userData);
      });
  }, []);
  return (
    <>
      {user == null ? (
        <h3>...loading</h3>
      ) : (
        <>
          <h4>User Name: {user.username}</h4>
          <h3> Name: {user.name.firstname + " " + user.name.lastname}</h3>
          <h4> Phone: {user.phone}</h4>
        </>
      )}
    </>
  );
}
function Routing() {
  return (
    <div style = {{
      textAlign: 'center',
      marginLeft: "50vw"
  }}>
    <h2>Routing example</h2>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home Page </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/listing">Listing</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/home/" element={<Home></Home>}></Route>
        <Route path="/about/*" element={<About></About>}>
          {" "}
        </Route>
        <Route path="/listing" element={<Listing></Listing>}></Route>
        <Route path = "/abc" element = {<Navigate to="/home" replace></Navigate>}></Route>
        <Route path="/users/:id" element={<Users isAdmin={true}></Users>}>
          {" "}
        </Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default Routing;
