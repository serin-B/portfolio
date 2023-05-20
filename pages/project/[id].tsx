import Layout from "@/components/Layout";
import { useRouter } from "next/router";
export default function ProjectDetail() {
  const router = useRouter();
  return (
    <Layout>
      <h1>프로젝트이름</h1>
    </Layout>
  );
}
