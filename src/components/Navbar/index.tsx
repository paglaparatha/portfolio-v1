import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { RootState } from "../../store";
import ExplorerItem from "../ExplorerItem";
import { addFile, removeFile } from "../../store/actions/index";

const Navbar = () => {
  const files = useSelector((state: RootState) => state.files);
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div className="navbar__items">
        {files.map((file) => (
          <div
            className={`navbar__item 
            ${
              ""
              // pathName === file.route && "navbar__item--active"
            }
            `}
            key={file.fileName}
          >
            <Link to={file.route}>
              <ExplorerItem
                fileName={file.fileName}
                fileType={file.fileType}
                gitStatus={file.gitStatus}
              />
            </Link>
            <span
              className="navbar__item--close"
              onClick={() => {
                dispatch(removeFile(file));
              }}
            >
              &times;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
