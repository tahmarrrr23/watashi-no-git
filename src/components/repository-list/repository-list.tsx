import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Badge, Flex, Link, Table, Text } from "@radix-ui/themes";
import type { getRepos } from "@/lib/github";
import { formatDate } from "@/lib/time";

export interface RepositoryListProps {
  repositories: Awaited<ReturnType<typeof getRepos>>;
}

export const RepositoryList = ({ repositories }: RepositoryListProps) => {
  return (
    <Table.Root variant="surface" size="2">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Repository</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell justify="end">Stars</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell justify="end">Created</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell justify="end">Updated</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {repositories.map((repo) => (
          <Table.Row key={repo.id}>
            <Table.Cell>
              <Flex direction="column" gap="1">
                <Flex align="center" gap="2">
                  <GitHubLogoIcon />
                  <Link
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    weight="bold"
                  >
                    {repo.full_name}
                  </Link>
                  {repo.private && (
                    <Badge color="orange" variant="soft" size="1">
                      Private
                    </Badge>
                  )}
                  {repo.fork && (
                    <Badge color="gray" variant="soft" size="1">
                      Fork
                    </Badge>
                  )}
                  {repo.archived && (
                    <Badge color="red" variant="soft" size="1">
                      Archived
                    </Badge>
                  )}
                </Flex>
                {repo.description && (
                  <Text size="1" color="gray">
                    {repo.description}
                  </Text>
                )}
              </Flex>
            </Table.Cell>
            <Table.Cell justify="end">
              <Text weight="medium">{repo.stargazers_count}</Text>
            </Table.Cell>
            <Table.Cell justify="end">
              <Text size="2" color="gray">
                {formatDate(repo.created_at)}
              </Text>
            </Table.Cell>
            <Table.Cell justify="end">
              <Text size="2" color="gray">
                {formatDate(repo.updated_at)}
              </Text>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};
