import { FeatureCard } from "./components/FeatureCard";

export const FeatureSection = () => {
  return (
    <section className="relative box-border caret-transparent outline-[3px] pt-12 pb-8 px-4 md:pt-3 md:px-12">
      <div className="absolute inset-0 overflow-x-hidden pointer-events-none z-[-1]">
        <div className="absolute bg-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNTYgNDgwYzEyMy43MSAwIDIyNC0xMDAuMjkgMjI0LTIyNFMzNzkuNzEgMzIgMjU2IDMyIDMyIDEzMi4yOSAzMiAyNTZzMTAwLjI5IDIyNCAyMjQgMjI0em0tMjMuMTUtNjcuMjNjMy4xMi4yIDYuMjYuMzEgOS40Mi4zMS00NS44NiAwLTgzLjIxLTguNTctMTA1LjcyLTIyLjE0QzEyMS45OSAzNzguMDcgMTEyIDM2My40IDExMiAzNDhjMC0zNy42NiA1Ny40Mi03MiAxNDQtNzIgNS42NSAwIDExLjIzLjIgMTYuNjguNTkgMy4wNS4yIDYuMDYuNDUgOS4wMi43M0wxNjAgMzIwbDcyLjg1IDkyLjc3em0xMzAuMi0yNi4yNWMtMTIuMzQgMy45LTI2LjQyIDYuNzYtNDEuNjkgOC40MWwtMzYuNTUtNDYuNSAxMi45OC00OC41N2MxNC4yNS0xLjQ0IDI3Ljg1LTMuODUgNDAuMi03LjA5bDI1LjA2IDkzLjc1ek0yNTYgMTYwYzMwLjkzIDAgNTYgMjUuMDcgNTYgNTZzLTI1LjA3IDU2LTU2IDU2LTU2LTI1LjA3LTU2LTU2IDI1LjA3LTU2IDU2LTU2em0xMDcuMiAxNjIuNTFjMjEuMjYtMTMuMjEgMzYuOC0yOS4yNiAzNi44LTQ2LjUxIDAtMzMuNTktMzguNzQtNjIuMTQtOTYuMTQtNzEuMjhsLTI3LjEzIDEwMS40NiAzNy4wNiA0Ny4xMmMxNy44OC0xMC4xNCAzMy42MS0yMS4xMiA0OS40MS0zMC43OXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==)] bg-no-repeat bg-size-[280%] box-border caret-transparent h-[calc(100%_+_140px)] outline-[3px] w-full bg-[position:50%_top] scale-x-[8.0839] left-0 top-[88px] md:bg-size-[520%] md:h-[calc(100%_+_176px)] md:scale-x-[10.3614] md:top-16"></div>
      </div>
      <div className="items-start box-border caret-transparent gap-x-5 grid grid-cols-[repeat(4,1fr)] justify-items-start max-w-[1584px] outline-[3px] gap-y-12 w-full mx-auto md:grid-cols-[repeat(12,1fr)]">
        <FeatureCard />
      </div>
    </section>
  );
};