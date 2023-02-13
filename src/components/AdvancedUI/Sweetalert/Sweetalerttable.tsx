import React from "react";
import Swal from "sweetalert2";
import { Table } from 'react-bootstrap';

export const Sweettable = () => {
    //Primaryalertbutton
    function Primaryalertbutton() {
        Swal.fire({
            text: "Your message",
            allowOutsideClick: false,
            confirmButtonText: "ok",
            cancelButtonColor: "#38cab3",
        });
    }
    //Secondaryalertbutton
    function Secondaryalertbutton() {
        Swal.fire({
            title: "Your message",
            text: "Your message",
            allowOutsideClick: false,
            confirmButtonText: "ok",
            cancelButtonColor: "#38cab3",
        });
    }
    //Infoalertbutton with images
    function Infoalertbutton() {
        Swal.fire({
            title: "Sweet!",
            text: "Modal with a custom image.",
            imageUrl: require("../../../assets/img/brand/favicon.png"),
            imageWidth: 80,
            imageHeight: 80,
            imageAlt: "Custom image",
        });
    }

    //Warningalertbutton
    function Warningalertbutton() {
        Swal.fire({
            title: "Your message",
            allowOutsideClick: false,
            text: "Your message(close after 2seconds)",
            showConfirmButton: false,
            timer: 2000,
        });
    }

    return (
        <Table className="table card-table border">
            <tbody>
                <tr>
                    <td>
                        <label>Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title text"
                            id="title"
                        />
                    </td>
                </tr>
                <tr>
                    <td className="bd-t-0">
                        <label>Message</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your message"
                            id="message"
                        />
                    </td>
                </tr>
                <tr>
                    <td className="mt-5  bd-t-0">
                        <input
                            type="button"
                            className="btn btn-primary mt-2"
                            value="Simple alert"
                            id="but1"
                            onClick={Primaryalertbutton}
                        />
                        &nbsp;
                        <input
                            type="button"
                            className="btn btn-danger mt-2"
                            value="Alert with title"
                            id="but2"
                            onClick={Secondaryalertbutton}
                        />
                        &nbsp;
                        <input
                            type="button"
                            className="btn btn-info mt-2"
                            value="Alert with image"
                            id="but3"
                            onClick={Infoalertbutton}
                        />
                        &nbsp;
                        <input
                            type="button"
                            className="btn btn-warning mt-2"
                            value="With timer"
                            id="but4"
                            onClick={Warningalertbutton}
                        />
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}