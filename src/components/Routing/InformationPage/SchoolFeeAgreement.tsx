import { useRef, useState } from "react";
import logo from "../../../assets/logo/BCA.svg"
import { BgOther } from "../../GlobalTextColor/bg";

export default function SchoolFeeAgreement() {
  const [parentName, setParentName] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: any) => {
    setParentName(e.target.value);
  };

  const DownloadPDF = () => {
    const content = contentRef.current;
    if (!content) return;

    const printWindow = window.open("", "_blank", "width=1000,height=800");
    if (!printWindow) return;

    printWindow.document.write(`
    <html>
    <head>
      <title>Download PDF</title>
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          padding: 40px;
          background-color: #F3F4F6;
          color: #111827;
        }
        .container {
          max-width: 480px;
          margin: auto;
          padding: 24px;
          background-color: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }
        img {
          width: 72px;
          height: 72px;
          object-fit: contain;
          display: block;
          margin: 0 auto;
        }
        h1 {
          font-size: 16px;
          font-weight: 600;
          text-align: center;
          margin-top: 12px;
          color: #111827;
        }
        h2 {
          font-size: 14px;
          font-weight: 700;
          text-align: center;
          margin: 24px 0 16px 0;
          color: #111827;
        }
        .info-bar {
          background-color: #1d4ed8;
          color: white;
          font-size: 9px;
          text-align: center;
          padding: 6px;
          margin-top: 6px;
          border-radius: 6px;
        }
        p, li {
          font-size: 10px;
          line-height: 1.6;
          color: #111827;
        }
        ol {
          padding-left: 20px;
          margin-bottom: 16px;
        }
        .signature {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          font-weight: 600;
          margin-top: 32px;
        }
        .signature .bold {
          font-weight: 700;
          padding-top: 8px;
        }
        input {
          border:none;
          padding: 4px 8px;
          font-size: 10px;
          border-radius: 6px;
          width: 150px;
          text-align: right;
          margin-top: 8px;
          outline: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        ${content.innerHTML}
      </div>
    </body>
  </html>
  `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <div className={`flex flex-col items-center py-10 px-4`}>
      <div
        ref={contentRef}
        className={`w-full max-w-[480px] border border-gray-200 ${BgOther} rounded-lg p-6 `}
      >
        <header className="pb-4 flex flex-col items-center">
          <img
            src={logo}
            alt="School logo"
            className="w-18 h-18 object-contain"
            width="72"
            height="72"
          />
          <h1 className="mt-2 text-center text-lg font-semibold text-gray-900">
            Blooming Children Academy
          </h1>
          <div className="mt-1 w-full bg-blue-700 text-white text-[9px] text-center py-1 px-2 font-normal rounded">
            Blooming Children Academy | example.com | 9793893777 , 9452376551 ,
            Manager: Ramesh Chandra Gupta
          </div>
        </header>

        <section>
          <h2 className="mt-6 mb-4 text-center font-bold text-sm text-gray-900">
            School Fee Agreement
          </h2>
          <p className="text-[10px] text-gray-900 leading-tight mb-4">
            This Fee Agreement ("Agreement") is entered into on [Agreement Date]
            between [Your Company Name], located at [Your Company Address]
            ("School"), and our students' families ("Parents/Guardians").
          </p>

          <ol className="list-decimal list-inside text-[10px] text-gray-900 space-y-2 mb-6">
            <li>
              <strong>Fee Details:</strong> The total annual fee for the
              academic year [Period] is 5000; payable in monthly installments of
              1000.
            </li>
            <li>
              <strong>Payment Schedule:</strong> Payments are due on the first
              business day of each month. Late payments will incur a late fee of
              10% per day.
            </li>
            <li>
              <strong>Payment Method:</strong> Payments shall be made via
              electronic transfer, online payment, or cash.
            </li>
            <li>
              <strong>Fee Adjustments:</strong> Fees are subject to change with
              prior notice.
            </li>
            <li>
              <strong>Termination of Agreement:</strong> Can be terminated by
              either party with 30 days' written notice.
            </li>
            <li>
              <strong>Governing Law:</strong> Governed by the laws of Uttar
              Pradesh.
            </li>
          </ol>

          <div className="flex justify-between">
            <div className="text-[10px] font-semibold text-gray-900">
              Manager Signature
              <div className="text-[10px] pt-2 font-bold">
                Ramesh Chandra Gupta
              </div>
            </div>

            <div className="text-[10px] font-semibold text-gray-900 flex flex-col items-end">
              Parent Signature
              <input
                type="text"
                value={parentName}
                onChange={handleChange}
                placeholder={parentName ? parentName : "Sign"}
                className="mt-2 border border-gray-300 px-2 py-1 rounded w-[150px] text-right text-[10px] outline-none"
              />
            </div>
          </div>
        </section>
      </div>

      <button
        className="mt-6 bg-blue-700 text-white text-xs px-4 py-2 rounded hover:bg-blue-800"
        onClick={DownloadPDF}
      >
        Download as PDF
      </button>
    </div>
  );
}
