import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Explorer from "../Explorer";

import { toggleExplorer } from "../../store/actions";
import { RootState } from "../../store/index";
import files from "../../utils/files";

const SideBar = () => {
  const dispatch = useDispatch();
  const toggled = useSelector((state: RootState) => state.explorer);

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar__icons">
          <div
            className={`sidebar__icon ${toggled && "sidebar--active"}`}
            onClick={() => {
              dispatch(toggleExplorer());
            }}
          >
            <i className="fa fa-files-o" aria-hidden="true"></i>
            <div className="sidebar__icon--tooltip">Expand</div>
          </div>

          {files.map((file) => (
            <Link className="sidebar__icon" to={file.route} key={file.fileName}>
              <i className={`fa ${file.icon}`} aria-hidden="true"></i>
              <div className="sidebar__icon--tooltip">{file.tooltip}</div>

              {file.showBadge && (
                <span className="sidebar__icon--badge">9+</span>
              )}
            </Link>
          ))}

          <a
            className="sidebar__icon"
            href="mailto:ritambalco@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <div className="sidebar__icon--tooltip">Email</div>
          </a>

          <a
            className="sidebar__icon"
            href="https://www.linkedin.com/in/ritam-b/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <div className="sidebar__icon--tooltip">LinkedIn</div>
          </a>

          <a
            className="sidebar__icon"
            href="https://github.com/paglaparatha"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github" aria-hidden="true"></i>
            <div className="sidebar__icon--tooltip">Github</div>
          </a>

          <a
            className="sidebar__icon"
            href="https://www.instagram.com/ritam.js/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <div className="sidebar__icon--tooltip">Instagram</div>
          </a>
        </div>

        <div className="sidebar__icons">
          <Link className="sidebar__icon" to="/about">
            <i className="fa fa-user-circle-o"></i>
            <div className="sidebar__icon--tooltip">About</div>
          </Link>

          <div className="sidebar__icon">
            <i className="fa fa-cog" aria-hidden="true"></i>
            <div className="sidebar__icon--tooltip">Setting</div>
          </div>
        </div>
      </div>

      <Explorer />
    </div>
  );
};

export default SideBar;
