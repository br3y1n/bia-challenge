interface ApiClient {
  get<Response>(url: string, config?: unknown): Promise<Response>;
}

export type { ApiClient };
