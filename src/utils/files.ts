import { FilePreview } from '../models/file-preview';

const files: (FilePreview & { route: string, tooltip: string, icon: string, showBadge: boolean })[] = [
    {
        fileName: "home",
        fileType: "html",
        gitStatus: "tracked",
        route: "/home",
        tooltip: "Home",
        icon: "fa-home",
        showBadge: false
    },
    {
        fileName: "skills",
        fileType: "scss",
        gitStatus: "untracked",
        route: "/skills",
        tooltip: "Skills",
        icon: "fa-code",
        showBadge: false
    },
    {
        fileName: "experience",
        fileType: "tsx",
        gitStatus: "modified",
        route: "/experience",
        tooltip: "Experience",
        icon: "fa-hand-peace-o",
        showBadge: false
    },
    {
        fileName: "awards-and-certificates",
        fileType: "py",
        gitStatus: "modified",
        route: "/awards",
        tooltip: "Certificates &amp; Awards",
        icon: "fa-trophy",
        showBadge: true
    },
    {
        fileName: "my-resume",
        fileType: "vue",
        gitStatus: "tracked",
        route: "/resume",
        tooltip: "My Resume",
        icon: "fa-file-text-o",
        showBadge: false
    },
];

export default files;