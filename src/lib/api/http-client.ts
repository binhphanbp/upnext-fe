import { publicEnv } from "@/lib/env/public";

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly payload?: unknown,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

type RequestOptions = Omit<RequestInit, "body"> & {
  body?: BodyInit | object | null;
};

function buildUrl(path: string) {
  const baseUrl = publicEnv.NEXT_PUBLIC_API_URL.replace(/\/$/, "");
  const normalizedPath = path.replace(/^\//, "");

  return `${baseUrl}/${normalizedPath}`;
}

export async function apiFetch<TResponse>(
  path: string,
  options: RequestOptions = {},
): Promise<TResponse> {
  const headers = new Headers(options.headers);
  headers.set("Accept", "application/json");

  const body =
    options.body &&
    typeof options.body === "object" &&
    !(options.body instanceof FormData)
      ? JSON.stringify(options.body)
      : options.body;

  if (body && typeof body === "string" && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(buildUrl(path), {
    ...options,
    body,
    headers,
  });

  if (!response.ok) {
    let payload: unknown;

    try {
      payload = await response.json();
    } catch {
      payload = await response.text();
    }

    throw new ApiError(response.statusText, response.status, payload);
  }

  if (response.status === 204) {
    return undefined as TResponse;
  }

  return (await response.json()) as TResponse;
}
