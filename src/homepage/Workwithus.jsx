import React from "react";
import Footer from "./Footer";

const Workwithus = () => {
  return (
    <div className="bg-black pt-25">
      <div className="flex flex-col min-h-screen">
        <div className="relative w-full h-[90vh]">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            className="absolute w-full h-full object-cover z-0"
          >
            <source src="/videos/file_3.mp4" type="video/mp4" />
            <p className="text-white">Video not supported</p>
          </video>

          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

          <div className="absolute inset-0 z-10 flex flex-col justify-center h-full">
            <div className="w-full px-4 md:px-18">
              <div className="max-w-7xl mx-auto text-white">
                {/* Start Project Box */}
                <div className="bg-opacity-60 w-fit p-0 rounded-lg mb-10">
                  <h1 className="text-3xl font-bold mb-4">Start Your Project</h1>
                  <p className="text-gray-300 mb-2">
                    Want your ideas to look real before they’re built?<br />
                    Let us visualise your concept with cinematic precision and photorealistic impact.
                  </p>
                  <p className="font-bold hover:underline mb-4">
                    sales@techunreal.in
                  </p>
                  <p className="text-gray-300 mb-4">Fill out form →</p>
                </div>

                {/* Contact Grid */}
                <h1 className="text-3xl font-bold pl-0 mb-3">Connect with us</h1>
                <div className="grid md:grid-cols-3 gap-4 text-white text-sm bg-opacity-50 p-0 rounded-lg w-fit">
                  <div className="max-w-[250px]">
                    <hr className="border-gray-400 w-8 mb-2" />
                    <h3 className="mb-2 font-bold">General Enquiries</h3>
                    <p className="text-gray-300 mb-1">
                      For any enquiries or feedback, don’t hesitate to contact us.
                    </p>
                    <p className="font-semibold hover:underline">
                      info@techunreal.in
                    </p>
                  </div>
                  <div className="max-w-[300px]">
                    <hr className="border-gray-400 w-8 mb-2" />
                    <h3 className="mb-2 font-bold">Collaborations</h3>
                    <p className="text-gray-300 mb-1">
                      Looking to collaborate? Get in touch — we’re always open to meaningful partnerships.
                    </p>
                    <p className="font-semibold hover:underline">
                      press@techunreal.in
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer remains unchanged */}
        <Footer />
      </div>
    </div>
  );
};

export default Workwithus;
