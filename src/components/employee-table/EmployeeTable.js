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
  TrashIcon,
} from "@heroicons/react/24/solid";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import toast from "react-hot-toast";

export default function EmployeeTable() {
  const router = useRouter();
  const [pageNumber, setPageNumber] = useState(0);
  const [paginationStart, setPaginationStart] = useState(0);
  const [paginationEnd, setPaginationEnd] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [editId, setEditId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [Data, setData] = useState([]);
  const [items, setItems] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone1: "",
    role: "",
    password: "",
  });
  const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    axios
      .get(`${API_URL}/employee/get`)
      .then((res) => {
        setData(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array?.length; i += chunkSize) {
      result?.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const search_data = Data?.filter((item) =>
    (item?.firstName.toLowerCase() + item?.lastName.toLowerCase()).includes(
      searchQuery.toLowerCase()
    )
  );

  const paginated_data = chunkArray(search_data, itemsPerPage);

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
  }, [pageNumber, paginated_data?.length, search_data]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setItems({
      ...items,
      [name]: value,
    });
  };

  const handleDelete = async (id) => {
    if (id) {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this user?"
      );
      if (confirmDelete) {
        try {
          const response = await axios.delete(
            `${API_URL}/employee/delete/${id}`
          );
          toast.success(response.data.message || "User Deleted Successfully");
          window.location.reload(false);
        } catch (err) {
          toast.error(err.message || "An Error Occurred");
        }
      }
    } else {
      toast.error("Error Occurred. Try Again");
    }
  };

  const handleEdit = async (id) => {
    if (id) {
      axios
        .put(` ${API_URL}/employee/update/${id}`, items)
        .then((response) => {
          toast.success(
            response.data.message || "Employee Updated SuccessFully"
          );
          window.location.reload(false);

          setItems({
            firstName: "",
            lastName: "",
            email: "",
            phone1: "",
            role: "",
            password: "",
          });
        })
        .catch((err) => {
          toast.error(err.message || "An Error Occurred ");
        });
    }
  };

  return (
    <div className="flex-1  w-full border border-gray-400 rounded-xl p-5 flex flex-col justify-between">
      <div className="w-full flex flex-row items-center justify-between">
        <div className="h-10 w-60 border border-primary border-opacity-35 rounded-lg flex flex-row items-center gap-2 px-2">
          <MagnifyingGlassIcon className="h-6 w-6 text-primary" />
          <input
            type="text"
            name="searchQuery"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            placeholder="Search"
            className="w-full outline-none"
          />
        </div>
        <button
          className="h-12 bg-primary rounded-lg flex flex-row items-center gap-2 px-3"
          onClick={() => {
            router.push("/admin/dashboard/employees/add");
          }}
        >
          <PlusCircleIcon className="size-7 text-white" />
          <p className="text-white text-sm font-light">Add New Employee</p>
        </button>
      </div>
      <div className="h-[80%] w-full flex flex-col gap-8">
        <div className="grid grid-cols-7 text-sm text-primary font-semibold">
          <p>First Name</p>
          <p>Last Name</p>
          <p>Email</p>
          <p>Phone no.</p>
          <p>Designation</p>
          <p>Password</p>
          <p className="w-full text-center">Action</p>
        </div>

        <div className="flex-1 flex flex-col gap-7 overflow-y-auto scrollbar-none">
          {paginated_data[pageNumber]?.map((item, key) => {
            return (
              <div className="grid grid-cols-7 text-xs" key={key}>
                <p className="truncate pr-5">
                  {editId == key ? (
                    <input
                      type="text"
                      className="border-[2px] border-primary"
                      value={items.firstName}
                      name="firstName"
                      onChange={handleInputChange}
                    />
                  ) : (
                    item?.firstName
                  )}
                </p>{" "}
                <p className="truncate pr-5">
                  {editId == key ? (
                    <input
                      type="text"
                      value={items.lastName}
                      name="lastName"
                      onChange={handleInputChange}
                      className="border-[2px] border-primary"
                    />
                  ) : (
                    item?.lastName
                  )}
                </p>
                <p className="truncate pr-5">
                  {editId == key ? (
                    <input
                      type="text"
                      value={items.email}
                      name="email"
                      onChange={handleInputChange}
                      className="border-[2px] border-primary"
                    />
                  ) : (
                    item?.email
                  )}
                </p>
                <p className="truncate pr-5">
                  {editId == key ? (
                    <input
                      type="number"
                      className="border-[2px] border-primary"
                      value={items.phone1}
                      name="phone1"
                      onChange={handleInputChange}
                    />
                  ) : (
                    item?.phone
                  )}
                </p>
                <p className="truncate pr-5">
                  {editId == key ? (
                    <select
                      type="text"
                      value={items.role}
                      name="role"
                      onChange={handleInputChange}
                      className="border-[2px] border-primary"
                    >
                      <option>Select A Role</option>
                      <option value={"processAgent"}>Process Agent</option>
                      <option value={"accountant"}>Accountant</option>
                      <option value={"receptionist"}>Receptionist</option>
                    </select>
                  ) : (
                    item?.role
                  )}
                </p>
                <p className="truncate pr-5">
                  {editId == key ? (
                    <input
                      type="password"
                      className="border-[2px] border-primary"
                      value={items.password}
                      name="password"
                      onChange={handleInputChange}
                    />
                  ) : (
                    item?.password
                  )}
                </p>
                <div className="w-full flex flex-row items-center justify-center gap-5">
                  <button
                    onClick={() => {
                      if (editId === key) {
                        setEditId(null);
                      } else {
                        setEditId(key);
                      }
                    }}
                  >
                    {editId === key ? (
                      <button
                        className="text-primary font-bold"
                        onClick={() => {
                          handleEdit(item._id);
                        }}
                      >
                        Save
                      </button>
                    ) : (
                      <PencilSquareIcon className="size-5 text-primary" />
                    )}
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(item._id);
                    }}
                  >
                    <TrashIcon className="size-5 text-primary" />
                  </button>
                  <button>
                    <EyeIcon
                      className="size-5 text-primary"
                      onClick={() => {
                        router.push(`/admin/dashboard/employees/${item._id}`);
                      }}
                    />
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
          out of {Data?.length} records
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

EmployeeTable.propTypes = {
  data: PropTypes.array.isRequired,
};
