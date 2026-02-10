import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Flex, Link, Table, Text } from "@radix-ui/themes";
import type { getStars } from "@/lib/github";
import { formatDate } from "@/lib/time";

export interface StarListProps {
  stars: Awaited<ReturnType<typeof getStars>>;
}

export const StarList = ({ stars }: StarListProps) => {
  const sortedStars = [...stars].sort(
    (a, b) =>
      new Date(b.created_at ?? 0).getTime() -
      new Date(a.created_at ?? 0).getTime(),
  );

  return (
    <Table.Root variant="surface" size="2" layout="auto">
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
        {sortedStars.map((repo) => (
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
              </Flex>
            </Table.Cell>
            <Table.Cell justify="end" style={{ whiteSpace: "nowrap" }}>
              <Flex align="center" gap="1" justify="end">
                <Text weight="medium">{repo.stargazers_count}</Text>
              </Flex>
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
