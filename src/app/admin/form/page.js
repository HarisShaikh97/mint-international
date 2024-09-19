import Image from "next/image";

export default function Form() {
  return (
    <main className="min-h-screen w-full bg-gray-400 flex justify-center items-center">
      <form className="w-[50%] h-full mb-10 pb-10 mt-10 bg-white shadow-xl rounded-lg">
        <Image src={"/images/logo.PNG"} width={1000} height={400} />
        <h1 className="font-bold text-center mt-4">FORM-A</h1>
        <div className="w-full h-[200px] flex justify-around items-center ">
          <div className="flex flex-col gap-4">
            <div className="flex items-center  gap-4">
              <p className="font-bold ml-2  w-[150px]">Post Applied For:</p>
              <div className="w-[500px] h-[30px] border-blue-300 border-b-2"></div>
            </div>
            <div className="flex items-center  gap-4">
              <p className="font-bold ml-2  w-[150px]">Referred By:</p>
              <div className="w-[500px] h-[30px] border-blue-300 border-b-2"></div>
            </div>
            <div className="flex items-center  gap-4">
              <p className="font-bold ml-2  w-[150px]">Full Name:</p>
              <div className="w-[500px] h-[30px] border-blue-300 border-b-2"></div>
            </div>
            <div className="flex items-center  gap-4">
              <p className="font-bold ml-2  w-[150px]">Father Name:</p>
              <div className="w-[500px] h-[30px] border-blue-300 border-b-2"></div>
            </div>
          </div>
          <div className="image w-[200px] h-[200px] border-[1px] border-black"></div>
        </div>
        <div className="w-[700px]  h-[130px]  flex flex-col gap-4 items-start ">
          <div className="flex">
            <div className="flex items-center ml-4 gap-4">
              <p className="font-bold ml-4 w-[150px]">Martial Status:</p>
              <div className="w-[240px] h-[30px] border-blue-300 border-b-2"></div>
            </div>
            <div className="flex items-center ml-4 gap-4">
              <p className="font-bold ml-2">Religion:</p>
              <div className="w-[150px] h-[30px] border-blue-300 border-b-2">
                Islam
              </div>
            </div>
          </div>
          <div className="flex gap-12">
            <div className="flex items-center ml-4 gap-4">
              <p className="font-bold ml-4 w-[150px]">Date of Birth:</p>
              <div className="w-[150px] h-[30px] border-blue-300 border-b-2"></div>
            </div>
            <div className="flex items-center ml-4 gap-4">
              <p className="font-bold ml-2">Place of Issue:</p>
              <div className="w-[150px] h-[30px] border-blue-300 border-b-2"></div>
            </div>
          </div>{" "}
          <div className="flex gap-12">
            <div className="flex items-center ml-4 gap-4">
              <p className="font-bold ml-4 w-[150px]">Date of Issue:</p>
              <div className="w-[150px] h-[30px] border-blue-300 border-b-2"></div>
            </div>
            <div className="flex items-center ml-4 gap-4">
              <p className="w-[115px] font-bold ml-2">Date of Expiry:</p>
              <div className="w-[150px] h-[30px] border-blue-300 border-b-2"></div>
            </div>
          </div>{" "}
        </div>
        <div className="flex items-center ml-6 gap-[50px] mt-2">
          <p className="w-[115px] font-bold ml-2">Passport No:</p>
          <div className="w-[150px] h-[30px] border-blue-300 border-b-2"></div>
        </div>
        <div className="flex items-center ml-6 mt-4">
          <p className="w-[200px] font-bold ml-2">Academic Qualifications:</p>
          <div className="w-[470px] h-[30px] border-blue-300 border-b-2"></div>
        </div>
        <div className="flex items-center ml-6 mt-4">
          <p className="w-[200px] font-bold ml-2">Technical Qualifications:</p>
          <div className="w-[470px] h-[30px] border-blue-300 border-b-2"></div>
        </div>
        <div className="flex items-center ml-6 mt-4">
          <p className="w-[200px] font-bold ml-2">Languages Known:</p>
          <div className="w-[470px] h-[30px] border-blue-300 border-b-2"></div>
        </div>
        <h1 className="font-bold text-center mt-6">EXPERIENCE TOTAL (YEARS)</h1>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-[90%] h-[30px] border-blue-300 border-b-2"></div>
          <div className="w-[90%] h-[30px] border-blue-300 border-b-2"></div>
          <div className="w-[90%] h-[30px] border-blue-300 border-b-2"></div>
          <div className="w-[90%] h-[30px] border-blue-300 border-b-2"></div>
        </div>
        <h1 className="font-bold text-center mt-6">EXPERIENCE DETAILS</h1>
        <div className="flex justify-center items-center">
          <table className="border-collapse border border-black w-max mt-4 ">
            <thead>
              <tr>
                <th className="border border-black w-[50px] ">SR.NO</th>
                <th className="border border-black w-[300px]  py-2">COMPANY</th>
                <th className="border border-black  py-2 w-[200px]">
                  PERIOD FROM -UPTO
                </th>
                <th className="border border-black w-[250px] py-2">TRADE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border border-black w-[50px] ">1</th>
                <th className="border border-black w-[300px]  py-2"></th>
                <th className="border border-black  py-2 w-[200px]"></th>
                <th className="border border-black w-[250px] py-2"></th>
              </tr>
              <tr>
                <th className="border border-black w-[50px] ">2</th>
                <th className="border border-black w-[300px]  py-2"></th>
                <th className="border border-black  py-2 w-[200px]"></th>
                <th className="border border-black w-[250px] py-2"></th>
              </tr>
              <tr>
                <th className="border border-black w-[50px] ">3</th>
                <th className="border border-black w-[300px]  py-2"></th>
                <th className="border border-black  py-2 w-[200px]"></th>
                <th className="border border-black w-[250px] py-2"></th>
              </tr>
              <tr>
                <th className="border border-black w-[50px] ">4</th>
                <th className="border border-black w-[300px]  py-2"></th>
                <th className="border border-black  py-2 w-[200px]"></th>
                <th className="border border-black w-[250px] py-2"></th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center ml-6 gap-2 mt-7">
          <p className="w-[100px] font-bold ml-6">Remarks:</p>
          <div className="w-[700px] h-[30px] border-blue-300 border-b-2"></div>
        </div>
        <div className="flex ml-6 gap-20 mt-4">
          <div className="flex items-center ml-4 mt-4">
            <p className="w-[80px] font-bold ml-2">Date:</p>
            <div className="w-[150px] h-[30px] border-blue-300 border-b-2"></div>
          </div>
          <div className="flex items-center ml-6 mt-4">
            <p className="w-[150px] font-bold ml-2">Client Signature:</p>
            <div className="w-[300px] h-[30px] border-blue-300 border-b-2"></div>
          </div>
        </div>
      </form>
    </main>
  );
}
