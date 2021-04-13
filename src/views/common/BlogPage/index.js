import React from "react";
import Background from "./BlogBackground/Background";
import BlogBody from "./BlogBody/Blogbody";
import Footer from "./Footer/Footer";
function BlogDashboard() {
  return (
    <div style={{ right: "0", left: "0" }}>
      <Background></Background>
      <BlogBody />
      <Footer />
    </div>
  );
}

export default BlogDashboard;
