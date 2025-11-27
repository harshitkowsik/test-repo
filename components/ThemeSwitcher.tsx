import React, { useState, useEffect, useRef } from 'react';
import { Theme } from '../types';

interface ThemeSwitcherProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const themeOptions: { value: Theme; label: string; icon: string }[] = [
    { value: 'light', label: 'Light', icon: 'fa-sun' },
    { value: 'dark', label: 'Dark', icon: 'fa-moon' },
  ];

  const currentIcon = theme === 'dark' ? 'fa-moon' : 'fa-sun';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
        aria-label="Toggle theme"
      >
        <i className={`fas ${currentIcon}`}></i>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 py-1">
          {themeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setTheme(option.value);
                setIsOpen(false);
              }}
              className={`w-full flex items-center px-4 py-2 text-sm text-left ${
                theme === option.value
                  ? 'bg-gray-100 dark:bg-gray-700 text-green-600 dark:text-green-400'
                  : 'text-gray-700 dark:text-gray-300'
              } hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200`}
            >
              <i className={`fas ${option.icon} w-5 mr-2`}></i>
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;