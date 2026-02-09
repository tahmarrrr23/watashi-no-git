import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Flex, Link, Table, Text } from "@radix-ui/themes";
import type { getStars } from "@/lib/github";
import { formatDate } from "@/lib/time";

export interface StarListProps {
  stars: Awaited<ReturnType<typeof getStars>>;
}

export const StarList = ({ stars }: StarListProps) => {
  return (
    <Table.Root variant="surface" size="2" layout="auto">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Repository</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell justify="end">Stars</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell justify="end">Created</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell justify="end">Updated</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {stars.map((repo) => (
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
            <Table.Cell justify="end">
              <Flex align="center" gap="1" justify="end">
                <Text weight="medium">{repo.stargazers_count}</Text>
              </Flex>
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
