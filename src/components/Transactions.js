import React, { useState } from "react";
import ChartMap from "./ChartMap";

const Transactions = ({ apiData, profile }) => {
  const selectedProfile = apiData[profile];
  const [currentPageReceivable, setCurrentPageReceivable] = useState(1);
  const [currentPagePayable, setCurrentPagePayable] = useState(1);
  const totalPages = 5;

  function InvoicesTable({ invoices, currentPage }) {
    const entriesPerPage = 2;
    const startIndex = (currentPage - 1) * entriesPerPage;
    const selectedInvoices = invoices.slice(
      startIndex,
      startIndex + entriesPerPage
    );

    return (
      <table className="w-full table">
        <thead className="border">
          <tr>
            <th className="tableTheadTH">Invoice#</th>
            <th className="tableTheadTH">Created</th>
            <th className="tableTheadTH">Status</th>
            <th className="tableTheadTH">Customer</th>
            <th className="tableTheadTH">Due</th>
            <th className="tableTheadTH">Service</th>
            <th className="tableTheadTH">Total</th>
          </tr>
        </thead>
        <tbody>
          {selectedInvoices.map((invoice) => (
            <tr key={invoice["invoiceNo."]}>
              <td className="tableTbodyTd">{invoice["invoiceNo."]}</td>
              <td className="tableTbodyTd !text-[#ABAFB3]">
                {invoice.createdDate}
              </td>
              <td className="tableTbodyTd">{invoice.status}</td>
              <td className="tableTbodyTd">{invoice.customer}</td>
              <td className="tableTbodyTd !text-[#ABAFB3]">
                {invoice.DueDate}
              </td>
              <td className="tableTbodyTd">{invoice.Service}</td>
              <td className="tableTbodyTd">
                ${invoice.TotalAmount.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  function Pagination({ pages, currentPage, onPageChange }) {
    const pageNumbers = Array.from({ length: pages }, (_, index) => index + 1);
    // console.log({
    //   line: 100,
    //   pageNumbers,
    //   pageNumbersLength: pageNumbers.length,
    // });
    return (
      <div className="flex gap-6 justify-center sm:justify-end text-[12px] leading-[54px] ">
        <span
          disabled={currentPage === 1}
          onClick={() =>
            onPageChange(currentPage !== 1 ? currentPage - 1 : currentPage)
          }
          className="cursor-pointer"
        >
          Prev
        </span>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            disabled={number === currentPage}
            className={`${number === currentPage ? "text-[#2B7FFC]" : ""}`}
          >
            0{number}
          </button>
        ))}
        <span
          disabled={currentPage === pageNumbers.length}
          onClick={() =>
            onPageChange(
              currentPage !== pageNumbers.length ? currentPage + 1 : currentPage
            )
          }
          className="cursor-pointer"
        >
          Next
        </span>
      </div>
    );
  }

  const handlePageChangeReceivable = (pageNumber) => {
    setCurrentPageReceivable(pageNumber);
  };

  const handlePageChangePayable = (pageNumber) => {
    setCurrentPagePayable(pageNumber);
  };
  return (
    <div className="flex flex-col gap-4">
      {/* Visual Section */}
      <div className="sm:p-[12px] flex flex-col sm:flex-row justify-around">
        <div className="w-full sm:w-1/2 max-w-full sm:max-w-[356px] bg-custom-gradient rounded-[12px] p-[20px] flex flex-col gap-[25px]">
          <div className="flex justify-between">
            <div className="flex flex-col text-[#555454] ">
              <span className="font-[700] text-[16px]">Total Cash Balance</span>
              <span className="text-[#8E8E8E] text-[10px] font-[700]">
                As of: 08/08/2023
              </span>
            </div>
            <button
              type="submit"
              className="bg-[#3A6FF8] text-[#fff] text-[14px] font-[700] flex items-center rounded-[10px] px-[14px] py-2"
            >
              + Add Bank
            </button>
          </div>
          <span className="text-[22px] sm:text-[25px] font-[600]">
            ${apiData[profile].totalCashBalance}
          </span>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-[#555454] text-[12px] sm:text-[16px] font-[400]">
                Operating Cash
              </span>
              <span className="text-[#555454] text-[12px] sm:text-[16px] font-[400]">
                ${apiData[profile].operatingCash}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#555454] text-[12px] sm:text-[16px] font-[400]">
                Investments & Other
              </span>
              <span className="text-[#555454] text-[12px] sm:text-[16px] font-[400]">
                ${apiData[profile].investments}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[400px]">
          <ChartMap apiData={apiData} profile={profile} />
        </div>
      </div>

      {/* Recievable Section */}
      <div className="w-full">
        <div className="text-[#555454] text-[16px] font-[700] pb-[10px]">
          Accounts Receivable
        </div>
        <div className="w-full overflow-x-scroll sm:overflow-hidden">
          <InvoicesTable
            invoices={selectedProfile.recievable}
            currentPage={currentPageReceivable}
          />
        </div>
        <Pagination
          pages={totalPages}
          currentPage={currentPageReceivable}
          onPageChange={handlePageChangeReceivable}
        />
      </div>

      {/* Payable Section */}
      <div className="w-full">
        <div className="text-[#555454] text-[16px] font-[700] pb-[10px]">
          Accounts Payable
        </div>
        <div className="w-full overflow-x-scroll sm:overflow-hidden">
          <InvoicesTable
            invoices={selectedProfile.payable}
            currentPage={currentPagePayable}
          />
        </div>
        <Pagination
          pages={totalPages}
          currentPage={currentPagePayable}
          onPageChange={handlePageChangePayable}
        />
      </div>
    </div>
  );
};

export default Transactions;
