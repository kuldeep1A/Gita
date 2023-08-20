import React from "react";
import EmailLink from "./EmailLink";

export default function Contact() {
  return (
    <div className="container">
      <div className="container-wrap">
        <div className="content-sidebar-wrap">
          <div id="content">
            <section id="post-content" role="main">
              <h1 className="page-title">Contact</h1>
              <div className="field-items">
                <p className="size-5">
                  <EmailLink
                    email="kuldeepdhangarkd@gmail.com"
                    subject="Hello, Kuldeep"
                  >
                    Kuldeepdhagnarkd@gmail.com
                  </EmailLink>
                </p>
                <h1>Kuldeep Dhangar</h1>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
