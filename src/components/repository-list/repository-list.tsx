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
          <Table.ColumnHeaderCell width="auto">
            Repository
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell
            justify="end"
            style={{ width: "1%", whiteSpace: "nowrap" }}
          >
            Stars
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell
            justify="end"
            style={{ width: "1%", whiteSpace: "nowrap" }}
          >
            Created
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell
            justify="end"
            style={{ width: "1%", whiteSpace: "nowrap" }}
          >
            Updated
          </Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {repositories.map((repo) => (
          <Table.Row key={repo.id} align="center">
            <Table.Cell>
              <Flex align="center" gap="1">
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
                  <Badge color="orange" variant="surface" size="1">
                    Private
                  </Badge>
                )}
                {repo.fork && (
                  <Badge color="gray" variant="surface" size="1">
                    Fork
                  </Badge>
                )}
                {repo.archived && (
                  <Badge color="red" variant="surface" size="1">
                    Archived
                  </Badge>
                )}
              </Flex>
            </Table.Cell>
            <Table.Cell justify="end" style={{ whiteSpace: "nowrap" }}>
              <Text weight="medium">{repo.stargazers_count}</Text>
            </Table.Cell>
            <Table.Cell justify="end" style={{ whiteSpace: "nowrap" }}>
              <Text size="2" color="gray">
                {formatDate(repo.created_at)}
              </Text>
            </Table.Cell>
            <Table.Cell justify="end" style={{ whiteSpace: "nowrap" }}>
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
