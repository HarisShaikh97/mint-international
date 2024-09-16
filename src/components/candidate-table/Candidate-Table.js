"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import {
  MagnifyingGlassIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PencilSquareIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

export default function CandidateTable({ data }) {
  const router = useRouter();
  const Data = data?.data;

  const [pageNumber, setPageNumber] = useState(0);
  const [paginationStart, setPaginationStart] = useState(0);
  const [paginationEnd, setPaginationEnd] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array?.length; i += chunkSize) {
      result?.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const paginated_data = chunkArray(Data, itemsPerPage);

  useEffect(() => {
    if (pageNumber >= paginated_data?.length && paginated_data?.length > 0) {
      setPageNumber(paginated_data?.length - 1);
    }
    if (pageNumber === 0) {
      setPaginationStart(pageNumber);
      setPaginationEnd(pageNumber + 4);
    } else if (pageNumber === 1) {
      setPaginationStart(pageNumber - 1);
      setPaginationEnd(pageNumber + 3);
    } else if (pageNumber === paginated_data?.length - 1) {
      setPaginationStart(pageNumber - 4);
      setPaginationEnd(pageNumber);
    } else if (pageNumber === paginated_data?.length - 2) {
      setPaginationStart(pageNumber - 3);
      setPaginationEnd(pageNumber + 1);
    } else {
      setPaginationStart(pageNumber - 2);
      setPaginationEnd(pageNumber + 2);
    }
  }, [pageNumber, paginated_data?.length, data]);
  console.log(paginated_data);

  return (
    <div className="flex-1 w-full border border-gray-400 rounded-xl p-5 flex flex-col justify-between">
      <div className="w-full flex flex-row items-center justify-between">
        <div className="h-10 w-60 border border-primary border-opacity-35 rounded-lg flex flex-row items-center gap-2 px-2">
          <MagnifyingGlassIcon className="h-6 w-6 text-primary" />
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none"
          />
        </div>
        <button
          className="h-12 bg-primary rounded-lg flex flex-row items-center gap-2 px-3"
          onClick={() => {
            router.push("/admin/dashboard/candidates/add");
          }}
        >
          <PlusCircleIcon className="size-7 text-white" />
          <p className="text-white text-sm font-light">Add New Candidate</p>
        </button>
      </div>
      <div className="h-[80%] w-full flex flex-col gap-8">
        <div className="grid grid-cols-7 text-sm text-primary font-semibold">
          <p>Full Name</p>
          <p>Father{"'"}s Name</p>
          <p>Post Applied For</p>
          <p>Phone no.</p>
          <p>DOB</p>
          <p>Referred By</p>
          <p className="w-full text-center">Action</p>
        </div>
        <div className="flex-1 flex flex-col gap-7 overflow-y-auto scrollbar-none">
          {paginated_data[pageNumber]?.map((item, key) => {
            return (
              <div className="grid grid-cols-7 text-xs" key={key}>
                <p className="truncate pr-5">{item?.fullName}</p>
                <p className="truncate pr-5">{item?.fatherName}</p>
                <p className="truncate pr-5">{item?.postAppliedFor}</p>
                <p className="truncate pr-5">
                  {item?.phone1 ||
                    phone2?.map((item, key) => {
                      return key > 0 ? `, ${item}` : item;
                    })}
                </p>
                <p className="truncate pr-5">{item?.dateOfBirth}</p>
                <p className="pr-5">{item?.referredBy}</p>
                <div className="w-full flex flex-row items-center justify-center gap-5">
                  <button>
                    <PencilSquareIcon className="size-5 text-primary" />
                  </button>
                  <button>
                    <EyeIcon className="size-5 text-primary" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-5">
          <p className="text-xs">Showing</p>
          <div className="h-10 w-14 border border-primary border-opacity-35 rounded-lg flex flex-row items-center justify-between px-2">
            <p className="text-xs text-primary">{itemsPerPage}</p>
            <div className="flex flex-col items-center justify-center gap-1">
              <button
                onClick={() => {
                  if (itemsPerPage < 10) {
                    setItemsPerPage(itemsPerPage + 1);
                  }
                }}
              >
                <ChevronUpIcon
                  className={`size-3 transform-gpu ease-in-out duration-500 text-primary ${
                    itemsPerPage < 10 ? "opacity-100" : "opacity-35"
                  }`}
                />
              </button>
              <button
                onClick={() => {
                  if (itemsPerPage > 5) {
                    setItemsPerPage(itemsPerPage - 1);
                  }
                }}
              >
                <ChevronDownIcon
                  className={`size-3 transform-gpu ease-in-out duration-500 text-primary ${
                    itemsPerPage > 5 ? "opacity-100" : "opacity-35"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
        <p className="text-xs">
          Showing{" "}
          {paginated_data?.length > 0 ? pageNumber * itemsPerPage + 1 : 0} to{" "}
          {paginated_data?.length > 0
            ? (pageNumber + 1) * itemsPerPage -
              (itemsPerPage - paginated_data[pageNumber]?.length)
            : 0}{" "}
          out of {data?.length} records
        </p>
        <div className="flex flex-row items-center gap-3">
          <button
            onClick={() => {
              if (pageNumber > 0) {
                setPageNumber(pageNumber - 1);
              }
            }}
          >
            <ChevronLeftIcon
              className={`size-4 transform-gpu ease-in-out duration-500 text-primary ${
                pageNumber > 0 ? "opacity-100" : "opacity-35"
              }`}
            />
          </button>
          <div className="flex flex-row items-center gap-1">
            {paginated_data?.map((_, key) => {
              if (key >= paginationStart && key <= paginationEnd) {
                return (
                  <button
                    key={key}
                    onClick={() => {
                      setPageNumber(key);
                    }}
                    className={`size-7 transform-gpu ease-in-out duration-500 border rounded-lg ${
                      pageNumber === key
                        ? "border-primary text-primary"
                        : "border-transparent"
                    } text-xs flex items-center justify-center`}
                  >
                    {key + 1}
                  </button>
                );
              }
            })}
          </div>
          <button
            onClick={() => {
              if (pageNumber < paginated_data?.length - 1) {
                setPageNumber(pageNumber + 1);
              }
            }}
          >
            <ChevronRightIcon
              className={`size-4 transform-gpu ease-in-out duration-500 text-primary ${
                pageNumber < paginated_data?.length - 1
                  ? "opacity-100"
                  : "opacity-35"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

CandidateTable.propTypes = {
  data: PropTypes.array.isRequired,
};
