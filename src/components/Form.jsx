"use client";
import Image from "next/image";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Form({ id }) {
  const formRef = useRef(null);
  const [data, setData] = useState("");
  const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const downloadPDF = () => {
    const input = formRef.current;
    if (input) {
      html2canvas(input, {
        backgroundColor: "#fff",
        scale: 1.5, // Increase scale for better resolution
        useCORS: true, // Enable CORS if images are loaded from external sources
        logging: true,
        width: input.offsetWidth,
        height: input.offsetHeight, // Log issues in the console for troubleshooting
      }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("form.pdf");
      });
    }
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/applicant/get/${id}`)
      .then((res) => {
        setData(res?.data?.data);
      })
      .catch((err) => {
        toast.error(err?.message || "Candidate Data Not Found");
      });
  }, []);

  const profileImage = data?.profileImage;
  const modifiedImage = profileImage?.replace("public/", "");
  const encodedUrl = modifiedImage?.replace(/ /g, "%20");
  const image = `http://192.168.50.17:8000/${encodedUrl}`;
  console.log(image);

  return (
    <>
      <main className="min-h-screen w-full mt-4 bg-white flex justify-center items-center">
        <form
          ref={formRef}
          className="w-[870px]  h-full mb-10 pb-4 overflow-x-auto bg-white shadow-xl rounded-lg"
        >
          <div className="w-full h-full flex justify-center items-center gap-2">
            <Image
              src={"/images/m1.PNG"}
              alt="m1.png"
              width={300}
              height={200}
            />
            <Image
              src={"/images/m2.PNG"}
              alt="m1.png"
              width={200}
              height={200}
            />
            <Image
              src={"/images/m3.PNG"}
              alt="m1.png"
              width={300}
              height={200}
            />
          </div>
          <h1 className="font-bold text-center mt-4">FORM-A</h1>
          <div className="w-full h-[150px] flex justify-around items-center ">
            <div className="flex flex-col gap-2">
              <div className="flex items-center  gap-2">
                <p className="font-bold ml-2  w-[150px]">Post Applied For:</p>
                <div className="w-[500px] h-[30px] border-blue-300 border-b-2">
                  {data?.postAppliedFor}
                </div>
              </div>
              <div className="flex items-center  gap-2">
                <p className="font-bold ml-2  w-[150px]">Referred By:</p>
                <div className="w-[500px] h-[30px] border-blue-300 border-b-2">
                  {data?.referredBy}
                </div>
              </div>
              <div className="flex items-center  gap-2">
                <p className="font-bold ml-2  w-[150px]">Full Name:</p>
                <div className="w-[500px] h-[30px] border-blue-300 border-b-2">
                  {data?.fullName}
                </div>
              </div>
              <div className="flex items-center  gap-2">
                <p className="font-bold ml-2  w-[150px]">Father Name:</p>
                <div className="w-[500px] h-[30px] border-blue-300 border-b-2">
                  {data?.fatherName}
                </div>
              </div>
            </div>
            <div
              className="relative w-[200px] h-[200px] border-[1px] border-black bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          </div>
          <div className="w-[700px]  h-[105px]  flex flex-col  gap-3 items-start ">
            <div className="flex">
              <div className="flex items-center  gap-2">
                <p className="font-bold ml-2 w-[150px]">Martial Status:</p>
                <div className="w-[240px] h-[30px] border-blue-300 border-b-2">
                  {data?.maritalStatus}
                </div>
              </div>
              <div className="flex items-center  gap-2">
                <p className="font-bold ml-2">Religion:</p>
                <div className="w-[150px] h-[30px] border-blue-300 border-b-2">
                  {data?.religion}
                </div>
              </div>
            </div>
            <div className="flex gap-12">
              <div className="flex items-center  gap-2">
                <p className="font-bold ml-2 w-[150px]">Date of Birth:</p>
                <div className="w-[150px] h-[30px] border-blue-300 border-b-2">
                  {data?.dateOfBirth?.slice(0, 10)}
                </div>
              </div>
              <div className="flex items-center ml-4 gap-2">
                <p className="font-bold ml-2">Place of Issue:</p>
                <div className="w-[150px] h-[30px] border-blue-300 border-b-2">
                  {data?.placeOfIssue?.slice(0, 10)}
                </div>
              </div>
            </div>{" "}
            <div className="flex gap-12">
              <div className="flex items-center  gap-2">
                <p className="font-bold ml-2 w-[150px]">Date of Issue:</p>
                <div className="w-[150px] h-[30px] border-blue-300 border-b-2">
                  {data?.dateOfIssue?.slice(0, 10)}
                </div>
              </div>
              <div className="flex items-center ml-4 gap-2">
                <p className="w-[115px] font-bold ml-2">Date of Expiry:</p>
                <div className="w-[150px] h-[30px] border-blue-300 border-b-2">
                  {data?.dateOfExpiry?.slice(0, 10)}
                </div>
              </div>
            </div>{" "}
          </div>

          <div className="flex items-center  gap-[42px] mt-6">
            <p className="w-[115px] font-bold ml-2">Passport No:</p>
            <div className="w-[150px] h-[30px] border-blue-300 border-b-2">
              <p className="text-sm"> {data?.passportNo}</p>
            </div>
          </div>
          <div className="flex items-center  mt-2">
            <p className="w-[200px] font-bold ml-2">Academic Qualifications:</p>
            <div className="w-[470px] h-[30px] border-blue-300 border-b-2">
              {data?.academicQualifications}
            </div>
          </div>
          <div className="flex items-center  mt-2">
            <p className="w-[200px] font-bold ml-2">
              Technical Qualifications:
            </p>
            <div className="w-[470px] h-[30px] border-blue-300 border-b-2">
              {data?.technicalQualifications}
            </div>
          </div>
          <div className="flex items-center  mt-2">
            <p className="w-[200px] font-bold ml-2">Languages Known:</p>
            <div className="w-[470px] h-[30px] border-blue-300 border-b-2">
              {data?.languagesKnown?.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <h1 className="font-bold text-center mt-4">
            EXPERIENCE TOTAL (YEARS)
          </h1>
          <div className="flex flex-col items-center  gap-2">
            <div className="w-[90%] h-[30px] border-blue-300 border-b-2">
              {data?.experienceTotal}
            </div>
            <div className="w-[90%] h-[20px] border-blue-300 border-b-2"></div>
            <div className="w-[90%] h-[20px] border-blue-300 border-b-2"></div>
            <div className="w-[90%] h-[20px] border-blue-300 border-b-2"></div>
          </div>
          <h1 className="font-bold text-center mt-6">EXPERIENCE DETAILS</h1>
          <div className="flex justify-center items-center">
            <table className="border-collapse border border-black w-max mt-4 ">
              <thead>
                <tr>
                  <th className="border border-black w-[50px] ">SR.NO</th>
                  <th className="border border-black w-[300px]  py-2">
                    COMPANY
                  </th>
                  <th className="border border-black  py-2 w-[200px]">
                    PERIOD FROM -UPTO
                  </th>
                  <th className="border border-black w-[250px] py-2">TRADE</th>
                </tr>
              </thead>
              <tbody>
                {data?.experienceDetails?.map((items, index) => (
                  <tr key={items?._id}>
                    <th className="border border-black w-[50px] ">
                      {index + 1}
                    </th>
                    <th className="border border-black w-[300px]  py-2">
                      {items?.companyName}
                    </th>
                    <th className="border border-black  py-2 w-[200px]">
                      {items?.duration}
                    </th>
                    <th className="border border-black w-[250px] py-2">
                      {items?.trade}
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center ml-6 gap-2 mt-2">
            <p className="w-[100px] font-bold ml-6">Remarks:</p>
            <div className="w-[700px] h-[30px] border-blue-300 border-b-2">
              {data?.remarks}
            </div>
          </div>
          <div className="flex ml-6 gap-20 mt-4">
            <div className="flex items-center ml-4 mt-4">
              <p className="w-[80px] font-bold ml-2">Date:</p>
              <div className="w-[150px] h-[30px] border-blue-300 border-b-2">
                {data?.createdAt?.slice(0, 10)}
              </div>
            </div>
            <div className="flex items-center ml-6 mt-4">
              <p className="w-[150px] font-bold ml-2">Client Signature:</p>
              <div className="w-[300px] h-[30px] border-blue-300 border-b-2"></div>
            </div>
          </div>
        </form>
      </main>
      <button
        onClick={downloadPDF}
        className="mt-4 px-4 py-2 ml-[50%]  bg-blue-500 text-white rounded"
      >
        Download PDF
      </button>
    </>
  );
}
