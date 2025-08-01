const pushMock = vi.fn();

vi.mock("next/font/google", () => ({
  Nunito_Sans: () => ({ style: {} }),
}));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: pushMock }),
  useParams: () => ({ id: "123" }),
}));

export { pushMock };
