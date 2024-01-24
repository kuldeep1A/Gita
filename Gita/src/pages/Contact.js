import React from "react";
import { EmailLinkD, EmailLinkM } from "../componets/EmailLink";

export default function Contact() {
  return (
    <div className="container">
      <div className="con-wrap">
        <div className="c-si-wrap">
          <div id="content">
            <section id="post-content" role="main">
              <div className="pa-title">Contact</div>
              <div className="fi-items">
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
