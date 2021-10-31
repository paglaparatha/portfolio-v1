import { GitStatus } from "./git-status";

export interface FilePreview {
    fileName: string;
    fileType: string;
    gitStatus: GitStatus;
}