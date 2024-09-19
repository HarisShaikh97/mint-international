"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function AddCandidate() {
  const router = useRouter();
  const [experienceDetails, setExperienceDetails] = useState([
    { companyName: "", duration: "", trade: "" },
  ]);
  const [formData, setFormData] = useState({
    postAppliedFor: "",
    referredBy: "",
    religion: "",
    maritalStatus: "",
    fatherName: "",
    fullName: "",
    dateOfBirth: "",
    placeOfIssue: "",
    dateOfIssue: "",
    dateOfExpiry: "",
    passportNo: "",
    academicQualifications: "",
    technicalQualifications: "",
    languagesKnown: "",
    phone1: "",
    phone2: "",
    experienceTotal: "",
    experienceDetails: experienceDetails,
    remarks: "",
    cnic: "",
    profileImage: "",
  });

  const handleAddRow = () => {
    setExperienceDetails([
      ...experienceDetails,
      { companyName: "", duration: "", trade: "" },
    ]);
  };

  const handleRemoveRow = (index) => {
    if (index !== 0) {
      const newExperiences = [...experienceDetails];
      newExperiences?.splice(index, 1);
      setExperienceDetails(newExperiences);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log("intput", formData);
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    // Append all text fields
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "experienceDetails" && key !== "profileImage") {
        data.append(key, value);
      }
    });

    // Append profile image (if any)
    if (formData.profileImage) {
      data.append("profileImage", formData.profileImage);
    }

    // Append experience details
    experienceDetails.forEach((item, index) => {
      data.append(`experienceDetails[${index}][companyName]`, item.companyName);
      data.append(`experienceDetails[${index}][duration]`, item.duration);
      data.append(`experienceDetails[${index}][trade]`, item.trade);
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 flex flex-col gap-16 p-10 overflow-y-auto scrollbar-none"
    >
      <p className="text-3xl font-semibold text-primary">Add New Candidate</p>
      <div className="flex flex-col w-full gap-5">
        <div className="w-full flex flex-row gap-5 items-center">
          <div className="w-full flex flex-col gap-2">
            <p className="font-semibold">Full Name</p>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="h-10 w-full border border-gray-300 rounded-md px-2"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="font-semibold">Father{"'"}s Name</p>
            <input
              type="text"
              onChange={handleInputChange}
              value={formData.fatherName}
              name="fatherName"
              className="h-10 w-full border border-gray-300 rounded-md px-2"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="font-semibold">Post Applied For</p>
            <input
              type="text"
              name="postAppliedFor"
              onChange={handleInputChange}
              value={formData.postAppliedFor}
              className="h-10 w-full border border-gray-300 rounded-md px-2"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="font-semibold">Referred By</p>
            <input
              type="text"
              name="referredBy"
              onChange={handleInputChange}
              value={formData.referredBy}
              className="h-10 w-full border border-gray-300 rounded-md px-2"
            />
          </div>
        </div>
        <div className="w-full flex flex-row gap-5 items-center">
          <div className="w-full flex flex-col gap-2">
            <p className="font-semibold">Mobile No (1)</p>
            <input
              type="text"
              value={formData.phone1}
              onChange={handleInputChange}
              name="phone1"
              className="h-10 w-full border border-gray-300 rounded-md px-2"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="font-semibold">Mobile No (2)</p>
            <input
              type="text"
              value={formData.phone2}
              name="phone2"
              onChange={handleInputChange}
              className="h-10 w-full border border-gray-300 rounded-md px-2"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="font-semibold">Marital Status</p>
            <input
              type="text"
              value={formData.maritalStatus}
              name="maritalStatus"
              onChange={handleInputChange}
              className="h-10 w-full border border-gray-300 rounded-md px-2"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="font-semibold">Religion</p>
            <input
              type="text"
              value={formData.religion}
              name="religion"
              onChange={handleInputChange}
              className="h-10 w-full border border-gray-300 rounded-md px-2"
            />
          </div>
        </div>
        <div className="w-full flex flex-row gap-5 items-center">
          <div className="w-full flex flex-col gap-2">
            <p className="font-semibold">Academic Qualifications</p>
            <input
              type="text"
              value={formData.academicQualifications}
              name="academicQualifications"
              onChange={handleInputChange}
              className="h-10 w-full border border-gray-300 rounded-md px-2"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="font-semibold">Technical Qualifications</p>
            <input
              type="text"
              value={formData.technicalQualifications}
              onChange={handleInputChange}
              name="technicalQualifications"
              className="h-10 w-full border border-gray-300 rounded-md px-2"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="font-semibold">Languages Known</p>
            <input
              type="text"
              value={formData.languagesKnown}
              onChange={handleInputChange}
              name="languagesKnown"
              className="h-10 w-full border border-gray-300 rounded-md px-2"
            />
          </div>
        </div>
        <div className="w-full flex flex-row gap-5 items-center">
          <div className="w-full flex flex-col gap-2">
            <p className="font-semibold">Passport No</p>
            <input
              type="text"
              value={formData.passportNo}
              onChange={handleInputChange}
              name="passportNo"
              className="h-10 w-full border border-gray-300 rounded-md px-2"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="font-semibold">Cnic </p>
            <input
              type="text"
              value={formData.cnic}
              name="cnic"
              onChange={handleInputChange}
              className="h-10 w-full border border-gray-300 rounded-md px-2"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="font-semibold">Date of Issue</p>
            <input
              type="date"
              name="dateOfIssue"
              value={formData.dateOfIssue}
              onChange={handleInputChange}
              className="h-10 w-full border border-gray-300 rounded-md px-2"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="font-semibold">Date of Birth</p>
            <input
              type="date"
              value={formData.dateOfBirth}
              name="dateOfBirth"
              onChange={handleInputChange}
              className="h-10 w-full border border-gray-300 rounded-md px-2"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="font-semibold">Date of Expiry</p>
            <input
              type="date"
              value={formData.dateOfExpiry}
              name="dateOfExpiry"
              onChange={handleInputChange}
              className="h-10 w-full border border-gray-300 rounded-md px-2"
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <p className="font-semibold">Total Experience (Years)</p>
            <input
              type="text"
              onChange={handleInputChange}
              value={formData.experienceTotal}
              name="experienceTotal"
              className="h-10 w-full border border-gray-300 rounded-md px-2"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="font-semibold">Place of Issue</p>
          <input
            type="text"
            value={formData.placeOfIssue}
            name="placeOfIssue"
            onChange={handleInputChange}
            className="h-10 w-full border border-gray-300 rounded-md px-2"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="font-semibold">Profile Image</p>
          <input
            type="file"
            onChange={handleFileChange}
            name="profileImage"
            className="h-10 w-full border border-gray-300 rounded-md px-2"
          />
        </div>
        <div className="w-full flex flex-row items-center justify-between my-5">
          <p className="font-semibold text-lg">Experience Details</p>
          <button
            className="h-10 w-40 items-center justify-center bg-primary rounded-lg text-lg text-white font-semibold"
            onClick={handleAddRow}
          >
            Add row
          </button>
        </div>

        {experienceDetails?.map((item, key) => {
          return (
            <div className="w-full flex flex-row gap-5 items-center" key={key}>
              <div className="w-full flex flex-col gap-2">
                <p className="font-semibold">Company</p>
                <input
                  type="text"
                  name="experienceDetails"
                  className="h-10 w-full border border-gray-300 rounded-md px-2"
                  value={item?.companyName}
                  onChange={(e) => {
                    const newExperienceDetails = [...experienceDetails];
                    newExperienceDetails[key].companyName = e.target.value;
                    setExperienceDetails(newExperienceDetails);
                  }}
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <p className="font-semibold">Period From - Upto</p>
                <input
                  type="text"
                  className="h-10 w-full border border-gray-300 rounded-md px-2"
                  value={item?.duration}
                  onChange={(e) => {
                    const newExperienceDetails = [...experienceDetails];
                    newExperienceDetails[key].duration = e.target.value;
                    setExperienceDetails(newExperienceDetails);
                  }}
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <p className="font-semibold">Trade</p>
                <input
                  type="text"
                  className="h-10 w-full border border-gray-300 rounded-md px-2"
                  value={item?.trade}
                  onChange={(e) => {
                    const newExperienceDetails = [...experienceDetails];
                    newExperienceDetails[key].trade = e.target.value;
                    setExperienceDetails(newExperienceDetails);
                  }}
                />
              </div>
              <button
                className="self-start min-w-10"
                onClick={() => {
                  handleRemoveRow(key);
                }}
              >
                {key > 0 && <XMarkIcon className="size-7 text-primary" />}
              </button>
            </div>
          );
        })}
        <div className="w-full flex flex-col gap-2">
          <p className="font-semibold">Remarks</p>
          <textarea className="h-40 w-full border border-gray-300 rounded-md p-2" />
        </div>
      </div>
      <div className="flex flex-row items-center gap-5 self-end">
        <button className="h-12 w-40 rounded-lg flex items-center justify-center text-lg font-semibold bg-primary text-white">
          Save
        </button>
        <button
          className="h-12 w-40 rounded-lg border-2 border-primary flex items-center justify-center text-lg font-semibold text-primary"
          onClick={() => {
            router?.back();
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
