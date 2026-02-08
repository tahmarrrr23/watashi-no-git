import { Link, Table } from "@radix-ui/themes";
import type { getRepos } from "@/lib/github";

export interface RepositoryListProps {
  repositories: Awaited<ReturnType<typeof getRepos>>;
}

export const RepositoryList = ({ repositories }: RepositoryListProps) => {
  return (
    <Table.Root variant="surface" layout="auto" size="3">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Repository Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Created At</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      {repositories.map((repo) => (
        <Table.Row key={repo.id}>
          <Table.Cell>
            <Link
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {repo.full_name}
            </Link>
          </Table.Cell>
          <Table.Cell>
            {repo.created_at
              ? new Date(repo.created_at).toLocaleString("ja-JP", {
                  timeZone: "Asia/Tokyo",
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: false,
                })
              : "-"}
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Root>
  );
};
