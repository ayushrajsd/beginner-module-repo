import { useEffect, useState } from "react";
import { Routes, Route, Link, useParams, Navigate } from "react-router-dom";
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
  console.log(params);
  // https://fakestoreapi.com/users/2
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch(`https://fakestoreapi.com/users/${params.id}`);
      const userData = await resp.json();
      console.log(userData);
      setUser(userData);
    }
    fetchData();
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
    <>
      <h1>Routing Example</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page </Link>
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
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about/*" element={<About></About>}>
          {" "}
        </Route>
        <Route path="/listing" element={<Listing></Listing>}></Route>
        <Route path="/users/:id" element={<Users isAdmin={true}></Users>}>
          {" "}
        </Route>
        <Route path = "/abc" element = {<Navigate to = "/"></Navigate>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}>
          {" "}
        </Route>
        {/* path -> /* -. wild card  */}
      </Routes>
    </>
  );
}
export default Routing;
