"use client";

import { Search } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="flex">
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          id="search"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
          placeholder="Search..."
          className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
        />
      </div>
    </div>
  );
}
