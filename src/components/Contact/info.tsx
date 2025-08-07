import { getBranchDetail } from "@/src/graphql/queries/auth";
import React from "react";

const Info = async () => {
  const { branchDetail } = await getBranchDetail();
  const { email, phoneNumber, address, coordinate } = branchDetail || {};
  return (
    <div className="mx-auto max-w-md p-6">
      <div className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Email</h2>
          <p className="mt-2 text-gray-600">
            Send us an email and we will get back to you within 72 hours.
          </p>
          <p className=" mt-4 text-gray-800 font-medium">
            {email || "support@apudairy.mn"}
          </p>
          <hr className="mt-6 border-gray-200" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Phone number</h2>
          <p className="mt-2 text-gray-600">
            Mon - Fri, 09:00 am - 5:00 pm (UTC/GMT + 8:00)
          </p>
          <p className="mt-4 text-gray-800 font-medium">
            {phoneNumber || "+976 7213 1842"}
          </p>
          {/* <p className="mt-2 text-gray-800 font-medium">{phoneNumber || "+976 7215 2362"}</p> */}
          <p className="mt-2 text-gray-800 font-medium">+976 7215 2362</p>
          <hr className="mt-6 border-gray-200" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Ulaanbaatar, Mongolia
          </h2>
          <p className="mt-2 text-gray-600">
            Visit our office Mon - Fri, 09:00 AM - 05:00 PM
          </p>
          <p className="mt-4 text-gray-600">
            {coordinate ||
              "Khan-Uul district, 3 khoroo, Uildver street, Ulaanbaatar, Mongolia"}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Info;
