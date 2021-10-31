import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { toggleExplorer, addFile } from "../../store/actions";
import ExplorerItem from "../ExplorerItem";
import { Link } from "react-router-dom";
import files from "../../utils/files";

const Explorer = () => {
  const toggled = useSelector((state: RootState) => state.explorer);
  const dispatch = useDispatch();
  return (
    <div className={`explorer ${toggled && "explorer--expanded"}`}>
      <div className="explorer__header">
        <span className="explorer__header--text">explorer</span>
        <span
          className="explorer__header--close-btn"
          onClick={() => {
            dispatch(toggleExplorer());
          }}
        >
          &times;
        </span>
      </div>

      {files.map((file) => (
        <Link
          to={file.route}
          onClick={() => dispatch(addFile(file))}
          key={file.fileName}
        >
          <div className="explorer__link">
            <ExplorerItem
              fileName={file.fileName}
              fileType={file.fileType}
              gitStatus={file.gitStatus}
            />
          </div>
        </Link>
      ))}

      <Link
        to="/about"
        onClick={() =>
          dispatch(
            addFile({
              fileName: "about",
              fileType: "js",
              gitStatus: "untracked",
              route: "/about",
            })
          )
        }
      >
        <div className="explorer__link">
          <ExplorerItem fileName="about" fileType="js" gitStatus="untracked" />
        </div>
      </Link>
    </div>
  );
};

export default Explorer;
