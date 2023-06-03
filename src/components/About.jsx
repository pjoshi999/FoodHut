import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import ProfileFunctional from "./ProfileFunctional";
import ProfileClass from "./ProfileClass";
import UserContext from "../utils/UserContext";
import Profile from "../assets/img/Profile.jpg";

export class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent - constructor");
  }

  componentDidMount() {
    // Best place to make API call
    console.log("Parent - componentDidMount");
  }

  render() {
    // console.log("Parent - render");
    return (
      <div className="bg-[url(https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg)] text-white flex px-52 py-[3.5rem] items-center">
        <img
          src={Profile}
          alt="Profile Photo"
          className="rounded-full h-80"
          style={{ shapeOutside: "circle(50%)" }}
        />
        <div className="flex flex-col p-28">
          <div className="flex">
            <span className="text-5xl first-letter:text-[#ed4e4e] first-letter:text-6xl pr-4">
              Priyanshu
            </span>
            <span className="text-5xl first-letter:text-[#ed4e4e] first-letter:text-6xl">
              Joshi
            </span>
          </div>
          <h2 className="text-2xl py-4">Full Stack Developer</h2>
          <p>
            I am Priyanshu Joshi, a Pre-final year IT Undergraduate. I am always
            inclined towards learning with a positive mindset. I am passionate
            about using my skills to build high-quality, innovative software
            solutions. I am always seeking new opportunities to learn and grow
            as a developer.
          </p>
          <div className="flex py-5">
            <span className="pr-5">
              <a href="mailto:joshi.priyanshu999@gmail.com">
                <i
                  className="fa fa-google fa-lg border border-gray-50 rounded-full p-3"
                  style={{ color: "#FDCE77" }}
                ></i>
              </a>
            </span>
            <span className="pr-5">
              <a
                href="https://www.linkedin.com/in/priyanshujoshi98/"
                target="_blank"
              >
                <i
                  className="fa fa-linkedin fa-lg border border-gray-50 rounded-full p-3"
                  style={{ color: "#FDCE77" }}
                ></i>
              </a>
            </span>
            <span className="pr-5">
              <a href="https://github.com/pjoshi999" target="_black">
                <i
                  className="fa fa-github fa-lg border border-gray-50 rounded-full p-3"
                  style={{ color: "#FDCE77" }}
                ></i>
              </a>
            </span>
            <span className="pr-5">
              <a href="https://www.instagram.com/_p.joshi98_/" target="_black">
                <i
                  className="fa fa-instagram fa-lg border border-gray-50 rounded-full p-3"
                  style={{ color: "#FDCE77" }}
                ></i>
              </a>
            </span>
          </div>
        </div>
      </div>

      // <div className="">
      //   <h1>About Page</h1>
      //   <p>This is the About page</p>
      //   <UserContext.Consumer>
      //     {({user}) => <h1>{user.name} - {user.email}</h1>}
      //   </UserContext.Consumer>

      //   {/* <ProfileClass name="First" /> */}
      //   {/* <ProfileClass name="Second" /> */}
      //   <ProfileFunctional name="Priyanshu" />
      // </div>
    );
  }
}

export default About;

/**
 * React Lifecycle is executed in two phases:
 *  1. Rendering phase - first it will render all the components of the page and then
 *  2. Commit Phase - now in the commit phase, DOM is updated.
 *
 * Check this link for React Lifecycle Diagram:
 * https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 */

/**
 * Parent constructor
 * Parent rendor
 *   - Child constructor 1
 *   - Child rendor 1
 *   - Child constructor 2
 *   - Child rendor 2
 *   - Child componentDidMount 1
 *   - Child componentDidMount 2
 * Parent componentDidMount
 */
