import React from "react";
import { FilePreview } from "../../models/file-preview";

const ExplorerItem: React.FC<FilePreview> = ({
  fileName,
  fileType,
  gitStatus,
}) => {
  return (
    <div className={`explorer-item git-status git-status--${gitStatus}`}>
      <span className={`explorer-item__icon ${fileType}-icon`}></span>

      <span className="explorer-item__file-name">
        {fileName}.{fileType}
      </span>
    </div>
  );
};

export default ExplorerItem;
