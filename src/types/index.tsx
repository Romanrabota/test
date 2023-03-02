export interface user {
    id: number;
    full_name: string;
    html_url: string;
    description: string;
    owner: Owner;
    name:string;
  }

  export interface Owner {
    login: string;
    avatar_url: string;
  }