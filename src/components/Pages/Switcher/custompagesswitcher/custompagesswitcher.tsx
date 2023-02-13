import React, { useEffect } from "react";
import { Button, Row } from 'react-bootstrap'
import * as Switcherdatacustam from "../../../../data/Switcherdata/Switcherdatacustam";
export default function Custompagesswitcher() {
  useEffect(() => {
    Switcherdatacustam.localStorageBackUp();
  });

  function changePrimaryColor(userColor:any) {
    // var userColor:any = document.getElementById("colorID")
    // userColor.value;
    localStorage.setItem("nowaPrimaryColor", userColor);
    // to store value as opacity 0.95 we use 95
    localStorage.setItem("nowaprimaryHoverColor", userColor + 95);
    localStorage.setItem("nowaprimaryBorderColor", userColor);
    localStorage.setItem("nowaprimaryTransparent", userColor + 20);

    const dynamicPrimaryLight = document.querySelectorAll(
      "input.color-primary-light"
    );

    Switcherdatacustam.dynamicLightPrimaryColor(dynamicPrimaryLight, userColor);


    let myonoffswitch1 = document.getElementById("myonoffswitch1") as HTMLInputElement;
    myonoffswitch1.checked = true;
    // Adding
    document.querySelector("body")?.classList.add("light-theme");

 

    Switcherdatacustam.name();
    console.log(userColor)
  }
  function darkPrimaryColor(userColor:any ) {
    // var userColor:any = document.getElementById("darkPrimaryColorID")
    // userColor.value;

    localStorage.setItem("darkPrimaryColor", userColor);

    const dynamicPrimaryDark = document.querySelectorAll(
      "input.color-primary-dark"
    );

    Switcherdatacustam.dynamicDarkPrimaryColor(dynamicPrimaryDark, userColor);

   let myonoffswitch2:any = document.getElementById("myonoffswitch2") as HTMLInputElement
   myonoffswitch2.checked = true;

    // Adding
    document.querySelector("body")?.classList.add("dark-theme");
    document.querySelector("body")?.classList.add("dark-theme");

    // Removing
    document.querySelector("body")?.classList.remove("light-theme");
    localStorage.removeItem("primaryColor");
    localStorage.removeItem("primaryHoverColor");
    localStorage.removeItem("primaryBorderColor");

    Switcherdatacustam.name();
  }
  return (

    <div className="switcher-wrapper">
      <div className="demo_changer">
        <div className="form_holder sidebar-right1">
          <Row>
            <div className="predefined_styles">
              <div className="swichermainleft text-center">
                <div className="p-3 d-grid gap-2">
                  <a target="blank" href="https://react.spruko.com/nowa-ts/"
                    className="btn ripple btn-primary mt-0"
                  >
                    View Demo
                  </a>
                  <a target="blank" href="https://themeforest.net/item/nowa-react-js-admin-dashboard-template/39360388"
                    className="btn ripple btn-info"
                  >
                    Buy Now
                  </a>
                  <a target="blank" href="https://themeforest.net/user/spruko/portfolio"
                    className="btn ripple btn-danger"
                  >
                    Our Portfolio
                  </a>
                </div>
              </div>
              <div className="swichermainleft text-center">
                <h4>LTR AND RTL VERSIONS</h4>
                <div className="skin-body">
                  <div className="switch_section">
                    <div className="switch-toggle d-flex mt-2">
                      <span className="me-auto">LTR</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch25"
                          id="myonoffswitch54"
                          onClick={() => Switcherdatacustam.RtltoLtr()}
                          className="onoffswitch2-checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="myonoffswitch54"
                          className="onoffswitch2-label"
                        ></label>
                      </p>
                    </div>
                    <div className="switch-toggle d-flex mt-2">
                      <span className="me-auto">RTL</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch25"
                          id="myonoffswitch55"
                          onClick={() => Switcherdatacustam.LtrtoRtl()}
                          className="onoffswitch2-checkbox"
                        />
                        <label
                          htmlFor="myonoffswitch55"
                          className="onoffswitch2-label"
                        ></label>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swichermainleft">
                <h4>Light Theme Style</h4>
                <div className="skin-body">
                  <div className="switch_section">
                    <div className="switch-toggle d-flex">
                      <span className="me-auto">Light Theme</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch1"
                          id="myonoffswitch1"
                          onClick={() => Switcherdatacustam.LightTheme()}
                          className="onoffswitch2-checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="myonoffswitch1"
                          className="onoffswitch2-label"
                        ></label>
                      </p>
                    </div>
                    <div className="switch-toggle d-flex mt-2">
                      <span className="me-auto">Dark Theme</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch1"
                          id="myonoffswitch2"
                          onClick={() => Switcherdatacustam.dark()}
                          className="onoffswitch2-checkbox"
                        />
                        <label
                          htmlFor="myonoffswitch2"
                          className="onoffswitch2-label"
                        ></label>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swichermainleft">
                <h4>Dark Theme Style</h4>
                <div className="skin-body">
                  <div className="switch_section">
                    <div className="switch-toggle d-flex">
                      <span className="me-auto">Light Primary</span>
                      <div className="">
                        <input
                          className="wd-25 ht-25 input-color-picker color-primary-light"
                          defaultValue="#38cab3"
                          id="colorID"
                          onChange={(e) => changePrimaryColor(e.target.value)}
                          type="color"
                          data-id="bg-color"
                          data-id1="bg-hover"
                          data-id2="bg-border"
                          data-id7="transparentcolor"
                          name="lightPrimary"
                        />
                      </div>
                    </div>
                    <div className="switch-toggle d-flex mt-2">
                      <span className="me-auto">Dark Primary</span>
                      <div className="">
                        <input
                          className="wd-25 ht-25 input-dark-color-picker color-primary-dark"
                          defaultValue="#38cab3"
                          id="darkPrimaryColorID"
                          onChange={(e) =>  darkPrimaryColor(e.target.value)}
                          type="color"
                          data-id="bg-color"
                          data-id1="bg-hover"
                          data-id2="bg-border"
                          data-id3="primary"
                          data-id8="transparentcolor"
                          name="darkPrimary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swichermainleft">
                <h4>Reset All Styles</h4>
                <div className="skin-body">
                  <div className="switch_section my-4">
                    <Button
                      variant=""
                      className="btn btn-danger btn-block"
                      onClick={() => {
                        localStorage.clear();
                       let html:any = document.querySelector("html")
                       html.style = "";
                        Switcherdatacustam.name();
                        Switcherdatacustam.resetData();
                      }}
                      type="button"
                    >
                      Reset All
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </div>
    </div>
  );
}
