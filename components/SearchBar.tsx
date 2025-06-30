import React, { useState, FormEvent, ChangeEvent } from 'react';
import { FiSearch } from 'react-icons/fi';

interface SearchBarProps {
    onSearch: (city: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }: SearchBarProps) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query.trim());
        }
    };

    return (
        <form onSubmit={handleSearch} className="relative w-full">
            <input
                type="text"
                value={query}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                placeholder="Search for a city..."
                className="w-full pl-14 pr-20 py-4 text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-custom-blue transition-all duration-300 shadow-md focus:shadow-xl"
                aria-label="Search for a city"
            />
            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
            <button
                type="submit"
                aria-label="Search"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-custom-blue text-white rounded-full p-2 hover:bg-custom-blue-dark focus:outline-none focus:ring-2 focus:ring-custom-blue transition-all duration-200"
            >
                <FiSearch size={22} />
            </button>
        </form>
    );
};
