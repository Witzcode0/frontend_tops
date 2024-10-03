import React from "react";
import BlogPost from "./Cnesting";
import Cards from "./Ccomposition";

function Header() {
  return (
    <header>
      <h1>Welcome to React Component Library</h1>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>�� 2023 React Component Library. All rights reserved.</p>
    </footer>
  );
}

function Maincontent() {
  return (
    <main>
      <div>
        <fieldset style={{ border: "2px double orange", backgroundColor:"#ffb380" }}>
          <legend style={{ textAlign: "left", color: "orange" }}>
            Multi components
          </legend>
          <Header />
          <h2>Main Content</h2>
          <p>This is the main content of the React Component Library.</p>
          <fieldset style={{ border: "2px double green", backgroundColor:"#99ff99" }}>
            <legend style={{ textAlign: "left", color: "green" }}>
              Component Nesting
            </legend>
            <BlogPost title="Blog Post 1" author="John Doe" date="2023-01-01" />
            <fieldset style={{ border: "2px double gray", backgroundColor:"#cccccc" }}>
              <legend style={{ textAlign: "left", color: "gray" }}>
                Component Composition
              </legend>
              <Cards />
            </fieldset>
          </fieldset>
          <Footer />
        </fieldset>
      </div>
    </main>
  );
}

export default Maincontent;
