import React from "react";
import { EmailLinkD, EmailLinkM } from "../componets/EmailLink";

export default function Contact() {
  return (
    <div className="container">
      <div className="container-wrap">
        <div className="content-sidebar-wrap">
          <div id="content">
            <section id="post-content" role="main">
              <div className="page-title">Contact</div>
              <div className="field-items">
                <p className="size-5">
                  {window.innerWidth < 680 ? (
                    <EmailLinkM
                      email="kuldeepdhangarkd@gmail.com"
                      subject="Hello, Kuldeep"
                    >
                      Kuldeepdhagnarkd@gmail.com
                    </EmailLinkM>
                  ) : (
                    <EmailLinkD
                      email="kuldeepdhangarkd@gmail.com"
                      subject="Hello, Kuldeep"
                    >
                      Kuldeepdhagnarkd@gmail.com
                    </EmailLinkD>
                  )}
                </p>
                <div>Kuldeep Dhangar</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
