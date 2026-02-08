import { format } from "date-fns";

export function formatDate(dateString: string | null) {
  if (!dateString) return "-";
  return format(new Date(dateString), "yyyy-MM-dd HH:mm");
}
