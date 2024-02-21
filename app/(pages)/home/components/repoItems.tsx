import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";


const RepoItem = (props: any) => {
    const repo = props.repo
    const repoLink = repo.demo ? repo.demo : repo.repo
    return (
        <div>
            <Link href={repoLink} rel="noreferrer" target="_blank">
                <div className="flex flex-col h-36 p-4 bg-neutral-800/75 rounded-md border border-neutral-700 hover:border-neutral-600 cursor-pointer">

                    <div className="w-full flex items-center justify-between">
                        <h1 className="font-semibold mb-1 text-slate-50">{repo.name}</h1>
                        <div className="flex gap-2">
                            <Link href={repo.demo} passHref target={'_blank'}><ExternalLink size={15} /></Link>
                            <Link href={repo.repo} passHref target={'_blank'}><FaGithub size={15} /></Link>
                        </div>
                    </div>

                    <p className="text-sm text-gray-100/70">{repo.description}</p>

                    <div className="mt-auto flex flex-row gap-4 text-gray-300 text-sm">

                        <p className="flex flex-row items-center justify-center">
                            <AiOutlineStar className="mr-1 w-4 h-4" /> {repo.stars}
                        </p>
                        <p className="flex flex-row items-center justify-center">
                            <BiGitRepoForked className="mr-1 w-4 h-4" /> {repo.forks}
                        </p>
                        <p className="flex flex-row items-center">
                            <span className="w-3 h-3 rounded-full mr-1" style={{ background: repo.language.color, border: `solid 3px ${repo.language.color}` }} />
                            {repo.language.name}
                        </p>
                    </div>
                </div>
            </Link>
        </div >
    )
}

export default RepoItem
