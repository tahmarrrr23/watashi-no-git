import { Box, Container, Heading, Tabs } from "@radix-ui/themes";
import { RepositoryList } from "@/components/repository-list";
import { StarList } from "@/components/star-list";
import { getRepos, getStars } from "@/lib/github";

export default async function Home() {
  const repos = await getRepos();
  const stars = await getStars();

  return (
    <Container size="4" px="8">
      <Heading size="8" my="6">
        Watashi no Git
      </Heading>

      <Tabs.Root defaultValue="repositories">
        <Tabs.List>
          <Tabs.Trigger value="repositories">Repositories</Tabs.Trigger>
          <Tabs.Trigger value="stars">Stars</Tabs.Trigger>
        </Tabs.List>

        <Box mt="6">
          <Tabs.Content value="repositories">
            <RepositoryList repositories={repos} />
          </Tabs.Content>
          <Tabs.Content value="stars">
            <StarList stars={stars} />
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </Container>
  );
}
