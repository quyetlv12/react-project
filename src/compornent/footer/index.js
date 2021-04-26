import React, { Component } from 'react'
import "./style.css"
export default class Footer extends Component {
    render() {
        return (
            <footer className="">
                <div className="footer__body">
                    <p>@copyright to quyet <u>2021</u></p>
                </div>
                <div className="d-flex justify-content-center">
                <div className="fs-1 p-2 text-primary"><a href="https://www.facebook.com/LvQ12fox/"><i class="fab fa-facebook-square"></i></a></div>
                <div className="fs-1 p-2"><i class="fab fa-github"></i></div>
                <div className="fs-1 p-2"><i class="fab fa-instagram"></i></div>
                </div>
            </footer>
        )
    }
}
