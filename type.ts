export type BlacklistStatus = "Active" | "Deceased" | "Unknown";
export interface BlacklistMember {
  number: string;
  name: string;
  status: BlacklistStatus;
  episode_revealed: string;
  image: string;
  description: string;
}
