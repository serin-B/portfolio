import Image from "next/image";
import Link from "next/link";

export interface ProjectCardProps {
  coverImg: string;
  title: string;
  desc: string;
  tags: { id: string; name: string; color: string }[];
  person: string;
  workingPeriod: string[];
  link: string;
  github: string;
}

export default function ProjectCard({
  coverImg,
  title,
  desc,
  tags,
  person,
  workingPeriod,
  link,
  github,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col border-2 rounded-lg">
      <Link
        href={`/project/${title.toLowerCase().replaceAll(" ", "")}`}
        className="relative w-full h-80"
      >
        <Image
          src={coverImg}
          alt="cover"
          fill
          priority
          className="object-cover rounded-lg"
        />
      </Link>
      <Link href={`/project/${title.toLowerCase().replaceAll(" ", "")}`}>
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="font-light">{desc}</p>
      </Link>
      <ul className="flex flex-wrap gap-1">
        {tags.map((el) => {
          return (
            <li key={el.id} className={`bg-l-yellow text-sm rounded-lg px-2`}>
              {el.name}
            </li>
          );
        })}
      </ul>
      <p className="font-light text-sm">{person}</p>
      <p className="font-light text-sm">{workingPeriod}</p>
      <a href={link} target="_blank">
        배포 {link}
      </a>
      <a href={github} target="_blank">
        깃헙 {github}
      </a>
    </div>
  );
}
