import { Box, Container, Heading, Tabs } from "@radix-ui/themes";
import { RepositoryList } from "@/components/repository-list";
import { getRepos } from "@/lib/github";

export default async function Home() {
  const repos = await getRepos();

  return (
    <Container size="4" px="8">
      <Heading size="8" my="6">
        Watashi no Git
      </Heading>

      <Tabs.Root defaultValue="repositories">
        <Tabs.List>
          <Tabs.Trigger value="repositories">Repositories</Tabs.Trigger>
        </Tabs.List>

        <Box mt="6">
          <Tabs.Content value="repositories">
            <RepositoryList repositories={repos} />
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </Container>
  );
}
