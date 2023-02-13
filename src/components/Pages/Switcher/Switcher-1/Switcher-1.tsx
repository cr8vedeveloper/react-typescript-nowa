import React, { useEffect } from "react";
import { Breadcrumb, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Switcherdata from "../../../../data/Switcherdata/Switcherdata";

export const Switcher1 = () => {
  useEffect(() => {
    Switcherdata.localStorageBackUp();
  });
  function changePrimaryColor(userColor:any) {
    // var userColor = document.getElementById("colorID").value;
    localStorage.setItem("primaryColor", userColor);
    // to store value as opacity 0.95 we use 95
    localStorage.setItem("primaryHoverColor", userColor + 95);
    localStorage.setItem("primaryBorderColor", userColor);
    localStorage.setItem("primaryTransparent", userColor + 20);

    const dynamicPrimaryLight = document.querySelectorAll(
      "input.color-primary-light"
    );

    Switcherdata.dynamicLightPrimaryColor(dynamicPrimaryLight, userColor);

   let myonoffswitch6:any = document.getElementById("myonoffswitch1") as HTMLInputElement
   myonoffswitch6.checked = true;

    // Adding
    document.querySelector("body")?.classList.add("light-theme");

    // Removing
    document.querySelector("body")?.classList.remove("dark-theme");
    document.querySelector("body")?.classList.remove("transparent-theme");
    document.querySelector("body")?.classList.remove("bg-img1");
    document.querySelector("body")?.classList.remove("bg-img2");
    document.querySelector("body")?.classList.remove("bg-img3");
    document.querySelector("body")?.classList.remove("bg-img4");

    localStorage.removeItem("darkPrimaryColor");
    localStorage.removeItem("transparentPrimaryColor");
    localStorage.removeItem("transparentBgColor");
    localStorage.removeItem("transparent-bgImgPrimaryColor");
    localStorage.removeItem("BgImage");

    Switcherdata.name();
  }
  function darkPrimaryColor(userColor:any) {
    // var userColor = document.getElementById("darkPrimaryColorID").value;

    localStorage.setItem("darkPrimaryColor", userColor);

    const dynamicPrimaryDark = document.querySelectorAll(
      "input.color-primary-dark"
    );

    Switcherdata.dynamicDarkPrimaryColor(dynamicPrimaryDark, userColor);

   let myonoffswitch7:any =document.getElementById("myonoffswitch2") as HTMLInputElement
   myonoffswitch7.checked = true;

    // Adding
    document.querySelector("body")?.classList.add("dark-theme");
    document.querySelector("body")?.classList.add("dark-theme");

    // Removing
    document.querySelector("body")?.classList.remove("light-theme");
    document.querySelector("body")?.classList.remove("transparent-theme");
    document.querySelector("body")?.classList.remove("bg-img1");
    document.querySelector("body")?.classList.remove("bg-img2");
    document.querySelector("body")?.classList.remove("bg-img3");
    document.querySelector("body")?.classList.remove("bg-img4");

    localStorage.removeItem("primaryColor");
    localStorage.removeItem("primaryHoverColor");
    localStorage.removeItem("primaryBorderColor");
    localStorage.removeItem("primaryTransparent");
    localStorage.removeItem("transparentPrimaryColor");
    localStorage.removeItem("transparentBgColor");
    localStorage.removeItem("transparent-bgImgPrimaryColor");
    localStorage.removeItem("BgImage");

    Switcherdata.name();
  }
  function transparentPrimaryColor(userColor:any) {
    // var userColor = document.getElementById("transparentPrimaryColorID").value;

    localStorage.setItem("transparentPrimaryColor", userColor);

    const PrimaryTransparent = document.querySelectorAll(
      "input.color-primary-transparent"
    );

    Switcherdata.dynamicTransparentPrimaryColor(PrimaryTransparent, userColor);

    let myonoffswitchTransparent:any = document.getElementById("myonoffswitchTransparent") as HTMLInputElement
  myonoffswitchTransparent.checked = true;

    // Adding
    document.querySelector("body")?.classList.add("transparent-theme");

    // Removing
    document.querySelector("body")?.classList.remove("light-theme");
    document.querySelector("body")?.classList.remove("dark-theme");
    document.querySelector("body")?.classList.remove("bg-img1");
    document.querySelector("body")?.classList.remove("bg-img2");
    document.querySelector("body")?.classList.remove("bg-img3");
    document.querySelector("body")?.classList.remove("bg-img4");

    localStorage.removeItem("primaryColor");
    localStorage.removeItem("primaryHoverColor");
    localStorage.removeItem("primaryBorderColor");
    localStorage.removeItem("primaryTransparent");
    localStorage.removeItem("darkPrimaryColor");
    localStorage.removeItem("transparent-bgImgPrimaryColor");
    localStorage.removeItem("BgImage");

    Switcherdata.name();
  }
  function BgTransparentBackground(userColor:any) {
    // var userColor = document.getElementById("transparentBgColorID").value;

    localStorage.setItem("transparentBgColor", userColor);

    const dynamicBackgroundColor = document.querySelectorAll(
      "input.color-bg-transparent"
    );

    Switcherdata.dynamicBgTransparentBackground(
      dynamicBackgroundColor,
      userColor
    );

    let myonoffswitchTransparent:any = document.getElementById("myonoffswitchTransparent") as HTMLInputElement
    myonoffswitchTransparent.checked = true;

    // Adding
    document.querySelector("body")?.classList.add("transparent-theme");

    // Removing
    document.querySelector("body")?.classList.remove("light-theme");
    document.querySelector("body")?.classList.remove("dark-theme");
    document.querySelector("body")?.classList.remove("bg-img1");
    document.querySelector("body")?.classList.remove("bg-img2");
    document.querySelector("body")?.classList.remove("bg-img3");
    document.querySelector("body")?.classList.remove("bg-img4");
    document.querySelector("body")?.classList.remove("light-header");
    document.querySelector("body")?.classList.remove("color-header");
    document.querySelector("body")?.classList.remove("dark-header");
    document.querySelector("body")?.classList.remove("gradient-header");
    document.querySelector("body")?.classList.remove("light-menu");
    document.querySelector("body")?.classList.remove("color-menu");
    document.querySelector("body")?.classList.remove("dark-menu");
    document.querySelector("body")?.classList.remove("gradient-menu");

    localStorage.removeItem("primaryColor");
    localStorage.removeItem("primaryHoverColor");
    localStorage.removeItem("primaryBorderColor");
    localStorage.removeItem("primaryTransparent");
    localStorage.removeItem("darkPrimaryColor");
    localStorage.removeItem("transparent-bgImgPrimaryColor");
    localStorage.removeItem("BgImage");

    Switcherdata.name();
  }
  function BgImgTransparentPrimaryColor(userColor:any) {
      
    // var userColor = document.getElementById(
    //   "transparentBgImgPrimaryColorID"
    // ).value;

    localStorage.setItem("nowatransparent-bgImgPrimaryColor", userColor);

    const dynamicPrimaryImgTransparent = document.querySelectorAll(
      "input.color-primary-transparent"
    );

    Switcherdata.dynamicBgImgTransparentPrimaryColor(
      dynamicPrimaryImgTransparent,
      userColor
    );
// console.log(dynamicPrimaryImgTransparent);
  let myonoffswitchTransparent:any = document.getElementById("myonoffswitchTransparent") as HTMLInputElement
  myonoffswitchTransparent.checked = true;

    // Adding
    document.querySelector("body")?.classList.add("transparent-theme");

    // Removing
    document.querySelector("body")?.classList.remove("light-theme");
    document.querySelector("body")?.classList.remove("dark-theme");
    document.querySelector("body")?.classList.remove("light-header");
    document.querySelector("body")?.classList.remove("color-header");
    document.querySelector("body")?.classList.remove("dark-header");
    document.querySelector("body")?.classList.remove("gradient-header");
    document.querySelector("body")?.classList.remove("light-menu");
    document.querySelector("body")?.classList.remove("color-menu");
    document.querySelector("body")?.classList.remove("dark-menu");
    document.querySelector("body")?.classList.remove("gradient-menu");
    localStorage.removeItem("nowaPrimaryColor");
    localStorage.removeItem("nowaprimaryHoverColor");
    localStorage.removeItem("nowaprimaryBorderColor");
    localStorage.removeItem("nowaprimaryTransparent");
    localStorage.removeItem("nowadarkPrimaryColor");
    localStorage.removeItem("nowatransparentPrimaryColor");
    localStorage.removeItem("nowatransparentBgColor");

   let html:any = document.querySelector("html")
   html.style.removeProperty("--transparent-body");

    if (
      document.querySelector("body")?.classList.contains("bg-img1") ===
        false &&
      document.querySelector("body")?.classList.contains("bg-img2") ===
        false &&
      document.querySelector("body")?.classList.contains("bg-img3") ===
        false &&
      document.querySelector("body")?.classList.contains("bg-img4") === false
    ) {
      document.querySelector("body")?.classList.add("bg-img1");
      localStorage.setItem("nowaBgImage", "bg-img1");
    }
    Switcherdata.name();
  }
  return (
    <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">
           SWITCHER PAGE
          </span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
              Pages
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item "
              active
              aria-current="page"
            >
              Switcher Page
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- row --> */}
      <div className="container p-0 p-sm-5">
        <Row>
          <Col sm={12} md={12} lg={3}></Col>
          <Col sm={12} md={12} lg={6}>
            {/* <!-- Switcher --> */}
            <div className="switcher-wrapper">
              <div className="bg-white">
                <div className="form_holder sidebar-right1">
                  <Row>
                    <div className="p-3 p-sm-5">
                      <div className="swichermainleft mb-3">
                        <h6 className="ms-3">LTR AND RTL VERSIONS</h6>
                        <div className="skin-body">
                          <div className="switch_section">
                            <div className="switch-toggle d-flex mt-2">
                              <span className="me-auto">LTR</span>
                              <p className="onoffswitch2 my-0">
                                <input
                                  type="radio"
                                  name="onoffswitch25"
                                  id="myonoffswitch54"
                                  onClick={() => Switcherdata.RtltoLtr()}
                                  className="onoffswitch2-checkbox "
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
                                  onClick={() => Switcherdata.LtrtoRtl()}
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
                      <div className="swichermainleft mb-3">
                        <h6 className="ms-3">Navigation Style</h6>
                        <div className="skin-body">
                          <div className="switch_section">
                            <div className="switch-toggle d-flex">
                              <span className="me-auto">Vertical Menu</span>
                              <p className="onoffswitch2 my-0">
                                <input
                                  type="radio"
                                  name="onoffswitch15"
                                  id="myonoffswitch34"
                                  onClick={() => Switcherdata.VerticalMenu()}
                                  className="onoffswitch2-checkbox"
                                  defaultChecked
                                />
                                <label
                                  htmlFor="myonoffswitch34"
                                  className="onoffswitch2-label"
                                ></label>
                              </p>
                            </div>
                            <div className="switch-toggle d-flex mt-2">
                              <span className="me-auto">
                                Horizantal Click Menu
                              </span>
                              <p className="onoffswitch2 my-0">
                                <input
                                  type="radio"
                                  name="onoffswitch15"
                                  id="myonoffswitch35"
                                  onClick={() => Switcherdata.horizontal()}
                                  className="onoffswitch2-checkbox"
                                />
                                <label
                                  htmlFor="myonoffswitch35"
                                  className="onoffswitch2-label"
                                ></label>
                              </p>
                            </div>
                            <div className="switch-toggle d-flex mt-2">
                              <span className="me-auto">
                                Horizantal Hover Menu
                              </span>
                              <p className="onoffswitch2 my-0">
                                <input
                                  type="radio"
                                  name="onoffswitch15"
                                  id="myonoffswitch111"
                                  onClick={() =>
                                    Switcherdata.HorizontalHoverMenu()
                                  }
                                  className="onoffswitch2-checkbox"
                                />
                                <label
                                  htmlFor="myonoffswitch111"
                                  className="onoffswitch2-label"
                                ></label>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swichermainleft mb-3">
                        <h6 className="ms-3">Theme Style</h6>
                        <div className="skin-body">
                          <div className="switch_section">
                            <div className="switch-toggle d-flex">
                              <span className="me-auto">Light Theme</span>
                              <p className="onoffswitch2 my-0">
                                <input
                                  type="radio"
                                  name="onoffswitch1"
                                  id="myonoffswitch1"
                                  onClick={() => Switcherdata.LightTheme()}
                                  className="onoffswitch2-checkbox"
                                  defaultChecked
                                />
                                <label
                                  htmlFor="myonoffswitch1"
                                  className="onoffswitch2-label"
                                ></label>
                              </p>
                            </div>
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
                          </div>
                        </div>
                      </div>
                      <div className="swichermainleft mb-3">
                        <h6 className="ms-3">Primary Theme Style</h6>
                        <div className="skin-body">
                          <div className="switch_section">
                            <div className="switch-toggle d-flex mt-2">
                              <span className="me-auto">Dark Theme</span>
                              <p className="onoffswitch2 my-0">
                                <input
                                  type="radio"
                                  name="onoffswitch1"
                                  onClick={() => Switcherdata.dark()}
                                  id="myonoffswitch2"
                                  className="onoffswitch2-checkbox"
                                />
                                <label
                                  htmlFor="myonoffswitch2"
                                  className="onoffswitch2-label"
                                ></label>
                              </p>
                            </div>
                            <div className="switch-toggle d-flex mt-2">
                              <span className="me-auto">Dark Primary</span>
                              <div className="">
                                <input
                                  className="wd-25 ht-25 input-dark-color-picker color-primary-dark"
                                  defaultValue="#38cab3"
                                  id="darkPrimaryColorID"
                                  onChange={(e) => darkPrimaryColor(e.target.value)}
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
                      <div className="swichermainleft mb-3">
                        <h6 className="ms-3">Transparent Style</h6>
                        <div className="skin-body">
                          <div className="switch_section">
                            <div className="switch-toggle d-flex mt-2">
                              <span className="me-auto">Transparent Theme</span>
                              <p className="onoffswitch2 my-0">
                                <input
                                  type="radio"
                                  name="onoffswitch1"
                                  onClick={() => Switcherdata.transparent()}
                                  id="myonoffswitchTransparent"
                                  className="onoffswitch2-checkbox"
                                />
                                <label
                                  htmlFor="myonoffswitchTransparent"
                                  className="onoffswitch2-label"
                                ></label>
                              </p>
                            </div>
                            <div className="switch-toggle d-flex">
                              <span className="me-auto">
                                Transparent Primary
                              </span>
                              <div className="">
                                <input
                                  className="wd-30 ht-30 input-transparent-color-picker color-primary-transparent"
                                  defaultValue="#38cab3"
                                  id="transparentPrimaryColorID"
                                  onChange={(e) => transparentPrimaryColor(e.target.value)}
                                  type="color"
                                  data-id="bg-color"
                                  data-id1="bg-hover"
                                  data-id2="bg-border"
                                  data-id3="primary"
                                  data-id4="primary"
                                  data-id9="transparentcolor"
                                  name="tranparentPrimary"
                                />
                              </div>
                            </div>
                            <div className="switch-toggle d-flex mt-2">
                              <span className="me-auto">
                                Transparent Background
                              </span>
                              <div className="">
                                <input
                                  className="wd-30 ht-30 input-transparent-color-picker color-bg-transparent"
                                  defaultValue="#38cab3"
                                  id="transparentBgColorID"
                                  onChange={(e) => BgTransparentBackground(e.target.value)}
                                  type="color"
                                  data-id5="body"
                                  data-id6="theme"
                                  data-id9="transparentcolor"
                                  name="transparentBackground"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swichermainleft mb-3">
                        <h6 className="ms-3">Transparent Bg-Image Style</h6>
                        <div className="skin-body">
                          <div className="switch_section">
                            <div className="switch-toggle d-flex">
                              <span className="me-auto">BG-Image Primary</span>
                              <div className="">
                                <input
                                  className="wd-30 ht-30 input-transparent-color-picker color-primary-transparent"
                                  defaultValue="#38cab3"
                                  id="transparentBgImgPrimaryColorID"
                                  onChange={(e) => BgImgTransparentPrimaryColor(e.target.value)}
                                  type="color"
                                  data-id="bg-color"
                                  data-id1="bg-hover"
                                  data-id2="bg-border"
                                  data-id3="primary"
                                  data-id4="primary"
                                  data-id9="transparentcolor"
                                  name="tranparentPrimary"
                                />
                              </div>
                            </div>
                            <div className="switch-toggle">
                              <Link
                                to="#"
                                className="bg-img1"
                                onClick={() => Switcherdata.bgimage1()}
                              >
                                <img
                                  src={require("../../../../assets/img/media/bg-img1.jpg")}
                                  id="bgimage1"
                                  alt="switch-img"
                                  className="br-5 me-2 mb-2"
                                />
                              </Link>
                              <Link
                                to="#"
                                className="bg-img2"
                                onClick={() => Switcherdata.bgimage2()}
                              >
                                <img
                                  src={require("../../../../assets/img/media/bg-img2.jpg")}
                                  id="bgimage2"
                                  alt="switch-img"
                                  className="br-5 me-2 mb-2"
                                />
                              </Link>
                              <Link
                                to="#"
                                className="bg-img3"
                                onClick={() => Switcherdata.bgimage3()}
                              >
                                <img
                                  src={require("../../../../assets/img/media/bg-img3.jpg")}
                                  id="bgimage3"
                                  alt="switch-img"
                                  className="br-5 me-2 mb-2"
                                />
                              </Link>
                              <Link
                                to="#"
                                className="bg-img4"
                                onClick={() => Switcherdata.bgimage4()}
                              >
                                <img
                                  src={require("../../../../assets/img/media/bg-img4.jpg")}
                                  id="bgimage4"
                                  alt="switch-img"
                                  className="br-5 me-2 mb-2"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swichermainleft mb-3 leftmenu-styles">
                        <h6 className="ms-3">Leftmenu Styles</h6>
                        <div className="skin-body">
                          <div className="switch_section">
                            <div className="switch-toggle d-flex">
                              <span className="me-auto">Light Menu</span>
                              <p className="onoffswitch2 my-0">
                                <input
                                  type="radio"
                                  name="onoffswitch2"
                                  id="myonoffswitch3"
                                    onClick={() => Switcherdata.LightMenu()}
                                  className="onoffswitch2-checkbox"
                                  defaultChecked
                                />
                                <label
                                  htmlFor="myonoffswitch3"
                                  className="onoffswitch2-label"
                                ></label>
                              </p>
                            </div>
                            <div className="switch-toggle d-flex mt-2">
                              <span className="me-auto">Color Menu</span>
                              <p className="onoffswitch2 my-0">
                                <input
                                  type="radio"
                                  name="onoffswitch2"
                                  id="myonoffswitch4"
                                    onClick={() => Switcherdata.ColorMenu()}
                                  className="onoffswitch2-checkbox"
                                />
                                <label
                                  htmlFor="myonoffswitch4"
                                  className="onoffswitch2-label"
                                ></label>
                              </p>
                            </div>
                            <div className="switch-toggle d-flex mt-2">
                              <span className="me-auto">Dark Menu</span>
                              <p className="onoffswitch2 my-0">
                                <input
                                  type="radio"
                                  name="onoffswitch2"
                                  id="myonoffswitch5"
                                    onClick={() => Switcherdata.DarkMenu()}
                                  className="onoffswitch2-checkbox"
                                />
                                <label
                                  htmlFor="myonoffswitch5"
                                  className="onoffswitch2-label"
                                ></label>
                              </p>
                            </div>
                            <div className="switch-toggle d-flex mt-2">
                              <span className="me-auto">Gradient Menu</span>
                              <p className="onoffswitch2 my-0">
                                <input
                                  type="radio"
                                  name="onoffswitch2"
                                  id="myonoffswitch25"
                                    onClick={() => Switcherdata.GradientMenu()}
                                  className="onoffswitch2-checkbox"
                                />
                                <label
                                  htmlFor="myonoffswitch25"
                                  className="onoffswitch2-label"
                                ></label>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swichermainleft mb-3 header-styles">
                        <h6 className="ms-3">Header Styles</h6>
                        <div className="skin-body">
                          <div className="switch_section">
                            <div className="switch-toggle d-flex">
                              <span className="me-auto">Light Header</span>
                              <p className="onoffswitch2 my-0">
                                <input
                                  type="radio"
                                  name="onoffswitch3"
                                  id="myonoffswitch6"
                                    onClick={() => Switcherdata.Lightheader()}
                                  className="onoffswitch2-checkbox"
                                  defaultChecked
                                />
                                <label
                                  htmlFor="myonoffswitch6"
                                  className="onoffswitch2-label"
                                ></label>
                              </p>
                            </div>
                            <div className="switch-toggle d-flex mt-2">
                              <span className="me-auto">Color Header</span>
                              <p className="onoffswitch2 my-0">
                                <input
                                  type="radio"
                                  name="onoffswitch3"
                                  id="myonoffswitch7"
                                  onClick={() => Switcherdata.Colorheader()}
                                  className="onoffswitch2-checkbox"
                                />
                                <label
                                  htmlFor="myonoffswitch7"
                                  className="onoffswitch2-label"
                                ></label>
                              </p>
                            </div>
                            <div className="switch-toggle d-flex mt-2">
                              <span className="me-auto">Dark Header</span>
                              <p className="onoffswitch2 my-0">
                                <input
                                  type="radio"
                                  name="onoffswitch3"
                                  id="myonoffswitch8"
                                  onClick={() => Switcherdata.Darkheader()}
                                  className="onoffswitch2-checkbox"
                                />
                                <label
                                  htmlFor="myonoffswitch8"
                                  className="onoffswitch2-label"
                                ></label>
                              </p>
                            </div>
                            <div className="switch-toggle d-flex mt-2">
                              <span className="me-auto">Gradient Header</span>
                              <p className="onoffswitch2 my-0">
                                <input
                                  type="radio"
                                  name="onoffswitch3"
                                  id="myonoffswitch26"
                                  onClick={() => Switcherdata.gradientheader()}
                                  className="onoffswitch2-checkbox"
                                />
                                <label
                                  htmlFor="myonoffswitch26"
                                  className="onoffswitch2-label"
                                ></label>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swichermainleft mb-3">
                        <h6 className="ms-3">Layout Width Styles</h6>
                        <div className="skin-body">
                          <div className="switch_section">
                            <div className="switch-toggle d-flex">
                              <span className="me-auto">Full Width</span>
                              <p className="onoffswitch2 my-0">
                                <input
                                  type="radio"
                                  name="onoffswitch4"
                                  id="myonoffswitch9"
                                  onClick={() => Switcherdata.FullWidth()}
                                  className="onoffswitch2-checkbox"
                                  defaultChecked
                                />
                                <label
                                  htmlFor="myonoffswitch9"
                                  className="onoffswitch2-label"
                                ></label>
                              </p>
                            </div>
                            <div className="switch-toggle d-flex mt-2">
                              <span className="me-auto">Boxed</span>
                              <p className="onoffswitch2 my-0">
                                <input
                                  type="radio"
                                  name="onoffswitch4"
                                  id="myonoffswitch10"
                                  onClick={() => Switcherdata.Boxed()}
                                  className="onoffswitch2-checkbox"
                                />
                                <label
                                  htmlFor="myonoffswitch10"
                                  className="onoffswitch2-label"
                                ></label>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swichermainleft mb-3">
                        <h6 className="ms-3">Layout Positions</h6>
                        <div className="skin-body">
                          <div className="switch_section">
                            <div className="switch-toggle d-flex">
                              <span className="me-auto">Fixed</span>
                              <p className="onoffswitch2 my-0">
                                <input
                                  type="radio"
                                  name="onoffswitch5"
                                  id="myonoffswitch11"
                                  onClick={() => Switcherdata.Fixed()}
                                  className="onoffswitch2-checkbox"
                                  defaultChecked
                                />
                                <label
                                  htmlFor="myonoffswitch11"
                                  className="onoffswitch2-label"
                                ></label>
                              </p>
                            </div>
                            <div className="switch-toggle d-flex mt-2">
                              <span className="me-auto">Scrollable</span>
                              <p className="onoffswitch2 my-0">
                                <input
                                  type="radio"
                                  name="onoffswitch5"
                                  id="myonoffswitch12"
                                  onClick={() => Switcherdata.Scrollable()}
                                  className="onoffswitch2-checkbox"
                                />
                                <label
                                  htmlFor="myonoffswitch12"
                                  className="onoffswitch2-label"
                                ></label>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swichermainleft p-0">
                        <div className="skin-body">
                          <div className="switch_section my-4">
                            <Button
                              variant=""
                              className="btn btn-danger btn-block"
                              onClick={() => {
                                localStorage.clear();
                               let html:any = document.querySelector("html")
                                html.style = "";
                                Switcherdata.name();
                                Switcherdata.resetData();
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
            {/* <!-- End Switcher --> */}
          </Col>
          <Col sm={12} md={12} lg={3}></Col>
        </Row>
      </div>
      {/* <!-- row closed --> */}
    </div>
  );
};

Switcher1.propTypes = {};

Switcher1.defaultProps = {};

export default Switcher1;
