import axios from "axios";
import Layout from "@/components/Layout";
import ProjectCard, {
  ProjectCardProps,
} from "@/components/project/projectCard";

export default function Project({ projects }: { projects: Project[] }) {
  return (
    <Layout>
      <h1 className="mx-6 px-2 my-3 font-bold text-lg bg-l-lemon rounded-lg w-fit">
        프로젝트
      </h1>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 mx-6">
        {projects.map((el: Project) => {
          return (
            <li key={el.id} className="">
              <ProjectCard {...getProjectCardProps(el)} />
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const options = {
    method: "POST",
    url: `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
    headers: {
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
    },
    data: { page_size: 100 },
  };
  const res = await axios.request(options);
  const projects = res.data.results;
  return {
    props: { projects },
  };
}

function getProjectCardProps(project: Project): ProjectCardProps {
  let cardProps = {
    coverImg:
      project.cover?.type === "file"
        ? project.cover.file.url
        : project.cover?.type === "external"
        ? project.cover.external.url
        : "",
    title: project.properties.Name.title[0].plain_text,
    desc: project.properties.Description.rich_text[0].plain_text,
    tags: project.properties.Tags.multi_select,
    person: project.properties.Person.rich_text[0].plain_text,
    workingPeriod: [
      project.properties.WorkingPeriod.date.start,
      "~",
      project.properties.WorkingPeriod.date.end,
    ],
    link: project.properties.Link.url,
    github: project.properties.Github.url,
  };
  return cardProps;
}

export interface Project {
  object: "page" | string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: {
    object: string;
    id: string;
  };
  last_edited_by: {
    object: string;
    id: string;
  };
  cover:
    | {
        type: "file";
        file: {
          url: string;
          expiry_time: string;
        };
      }
    | {
        type: "external";
        external: {
          url: string;
        };
      }
    | null;
  icon: {
    type: "emoji";
    emoji: string;
  } | null;
  parent: {
    type: string;
    database_id: string;
  };
  archived: boolean;
  properties: {
    Description: {
      id: string;
      type: "rich_text";
      rich_text: [
        {
          type: "text";
          text: {
            content: string;
            link: null | string;
          };
          plain_text: string;
          href: null | string;
          annotations: {
            bold: boolean;
            code: boolean;
            color: string;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
          };
        }
      ];
    };
    Github: {
      id: string;
      type: "url";
      url: string;
    };
    Link: {
      id: string;
      type: "url";
      url: string;
    };
    Name: {
      id: string;
      type: "title";
      title: [
        {
          type: "text";
          text: {
            content: string;
            link: null | string;
          };
          href: null | string;
          plain_text: string;
          annotations: {
            bold: boolean;
            code: boolean;
            color: string;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
          };
        }
      ];
    };
    Person: {
      id: string;
      type: "rich_text";
      rich_text: [
        {
          type: "text";
          text: {
            content: string;
            link: null | string;
          };
          plain_text: string;
          href: null | string;
          annotations: {
            bold: boolean;
            code: boolean;
            color: string;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
          };
        }
      ];
    };
    Tags: {
      id: string;
      type: "multi_select";
      multi_select: {
        id: string;
        name: string;
        color: string;
      }[];
    };
    WorkingPeriod: {
      id: string;
      type: "date";
      date: { start: string; end: string; time_zone: null };
    };
  };
  url: string;
}
