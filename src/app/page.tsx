import { Container, Heading } from "@radix-ui/themes";
import { RepositoryList } from "@/components/repository-list";
import { getRepos } from "@/lib/github";

export default async function Home() {
  const repos = await getRepos();

  return (
    <Container size="4" py="6">
      <Heading size="8" mb="4">
        Watashi no Git
      </Heading>

      <RepositoryList repositories={repos} />
    </Container>
  );
}
