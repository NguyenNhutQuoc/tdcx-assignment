// src/components/SearchFilter.tsx
import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { debounce } from "lodash";
import { Search } from "lucide-react";
import { SearchFilterProps, Item } from "../types";

const SearchFilter: React.FC<SearchFilterProps> = ({
  items = [],
  searchKeys = ["name"],
  debounceMs = 300,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize search term from URL params
  const [searchTerm, setSearchTerm] = useState<string>(
    searchParams.get("q") || ""
  );
  const [filteredItems, setFilteredItems] = useState<Item[]>(items);

  // Create a memoized debounced search function
  const debouncedSearch = useMemo(
    () =>
      debounce((searchValue: string) => {
        // Update URL with search term
        if (searchValue) {
          setSearchParams({ q: searchValue });
        } else {
          setSearchParams({});
        }

        const lowercasedSearch = searchValue.toLowerCase();

        const filtered = items.filter((item) =>
          searchKeys.some((key) => {
            const value = item[key];
            return (
              value && value.toString().toLowerCase().includes(lowercasedSearch)
            );
          })
        );

        setFilteredItems(filtered);
      }, debounceMs),
    [items, searchKeys, debounceMs, setSearchParams]
  );

  // Initial filter on mount and when URL params change
  useEffect(() => {
    const queryParam = searchParams.get("q");
    if (queryParam !== null) {
      setSearchTerm(queryParam);
      debouncedSearch(queryParam);
    }
  }, []);

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  // Handle input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      {/* Search Input */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          autoFocus
        />
      </div>

      {/* Results List */}
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {searchKeys.map((key) => (
              <div key={key} className="text-sm">
                <span className="font-medium capitalize">{key}: </span>
                {item[key]}
              </div>
            ))}
          </div>
        ))}

        {/* No results message */}
        {filteredItems.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            No results found for "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
