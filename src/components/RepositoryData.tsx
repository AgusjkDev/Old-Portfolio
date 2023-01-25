import { useState, useEffect } from "react";

import { getRepositoryData } from "services";
import { footerAnchors } from "data";

export default function RepositoryData() {
    const [repositoryData, setRepositoryData] = useState<RepositoryData>({ stars: 0, forks: 0 });

    useEffect(() => {
        getRepositoryData().then(setRepositoryData);
    }, []);

    return (
        <div className="flex w-full justify-center gap-4">
            {footerAnchors.map(({ key, ariaLabel, title, href, svg }) => (
                <a
                    key={key}
                    arial-label={ariaLabel}
                    title={title}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1.5 transition-colors duration-300 hover:text-sky-400"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox={svg.viewBox}
                        className="h-4 w-4 fill-slate-400 transition-colors duration-300 group-hover:fill-sky-400"
                    >
                        <path d={svg.path} />
                    </svg>

                    {repositoryData[key].toLocaleString("en-US")}
                </a>
            ))}
        </div>
    );
}
