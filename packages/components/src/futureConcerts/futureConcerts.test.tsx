import { FutureConcerts, type Props } from "./futureConcerts.js";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import type { Props as ConcertListItemProps } from "../concertListItem/index.js";
import { getFutureConcerts } from "@mono/data";
import { mockConcert } from "./mocks/mockConcerts.js";
import { resolvedComponent } from "@mono/utils";

vi.mock("@mono/data", async () => {
  const originalModule = await vi.importActual<typeof import("@mono/data")>("@mono/data");
  return {
    __esModule: true,
    ...originalModule,
    getFutureConcerts: vi.fn(),
  };
});

vi.mock("../concertListItem/index.js", () => {
  const originalModule = vi.importActual<typeof import("../concertListItem/index.js")>(
    "../concertListItem/index.js",
  );
  return {
    __esModule: true,
    ...originalModule,
    ConcertListItem: ({ data }: ConcertListItemProps) => (
      <div>
        <span>{data.id}</span>
      </div>
    ),
  };
});

const getFutureConcertsMock = vi.mocked(getFutureConcerts);

describe("FutureConcerts component", () => {
  it("shows all the data", async () => {
    vi.useFakeTimers().setSystemTime(new Date("2020-01-01"));

    getFutureConcertsMock.mockResolvedValue({
      data: [mockConcert],
      error: undefined,
    });

    const ResolvedFutureConcerts = await resolvedComponent<Props>(FutureConcerts, {
      skip: 0,
      first: 3,
    });

    const { container } = render(<ResolvedFutureConcerts />);

    expect(container).toMatchSnapshot();
    expect(screen.getByText("mock-id")).toBeInTheDocument();
  });
});
