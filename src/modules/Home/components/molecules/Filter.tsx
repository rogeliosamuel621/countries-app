import { useFilterContext } from '@contexts/Filter.context'
import { Menu, Transition } from '@headlessui/react'
import { getFilterText } from '@modules/Home/helpers/filter.helper'
import { TFilters } from '@modules/Home/interface/filter.interface'
import { Fragment, useState } from 'react'

export const Filter = () => {
  const { filter, setFilter } = useFilterContext()
  const filterText = getFilterText(filter)

  return (
    <Menu as="div" className="bg-light-1 dark:bg-dark-1 rounded w-fit transition">
      <Menu.Button className="h-12 pl-4 w-52 text-xs text-black dark:text-white text-left transition">
        {filterText}
      </Menu.Button>
      <div className="fixed z-10">
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="flex flex-col bg-light-1 dark:bg-dark-1 mt-1 rounded shadow-lg">
            <Menu.Item as="article">
              {({ active }) => (
                <button
                  onClick={() => setFilter('region')}
                  className={`text-start text-xs text-black dark:text-white pl-4 w-52 py-3 transition ${
                    active && 'bg-[#3A4B5B]'
                  }`}
                >
                  {getFilterText('region')}
                </button>
              )}
            </Menu.Item>
            <Menu.Item as="article">
              {({ active }) => (
                <button
                  onClick={() => setFilter('africa')}
                  className={`text-start text-xs text-black dark:text-white pl-4 w-52 py-3 transition ${
                    active && 'bg-[#3A4B5B]'
                  }`}
                >
                  {getFilterText('africa')}
                </button>
              )}
            </Menu.Item>
            <Menu.Item as="article">
              {({ active }) => (
                <button
                  onClick={() => setFilter('americas')}
                  className={`text-start text-xs text-black dark:text-white pl-4 w-52 py-3 transition ${
                    active && 'bg-[#3A4B5B]'
                  }`}
                >
                  {getFilterText('americas')}
                </button>
              )}
            </Menu.Item>
            <Menu.Item as="article">
              {({ active }) => (
                <button
                  onClick={() => setFilter('asia')}
                  className={`text-start text-xs text-black dark:text-white pl-4 w-52 py-3 transition ${
                    active && 'bg-[#3A4B5B]'
                  }`}
                >
                  {getFilterText('asia')}
                </button>
              )}
            </Menu.Item>
            <Menu.Item as="article">
              {({ active }) => (
                <button
                  onClick={() => setFilter('europe')}
                  className={`text-start text-xs text-black dark:text-white pl-4 w-52 py-3 transition ${
                    active && 'bg-[#3A4B5B]'
                  }`}
                >
                  {getFilterText('europe')}
                </button>
              )}
            </Menu.Item>
            <Menu.Item as="article">
              {({ active }) => (
                <button
                  onClick={() => setFilter('oceania')}
                  className={`text-start text-xs text-black dark:text-white pl-4 w-52 py-3 transition ${
                    active && 'bg-[#3A4B5B]'
                  }`}
                >
                  {getFilterText('oceania')}
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  )
}
