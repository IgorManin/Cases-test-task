export interface Case {
  Id: string;
  Image: string;
  Title: string;
  CaseColor: string;
  FeaturesTitle: string | null;
  FriendlyURL: string;
  Filters: Filter[];
}

export interface Filter {
  Id: string;
  Name: string;
}

export interface ApiResponse {
  Error: string | null;
  Data: Case[];
}
