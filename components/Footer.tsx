import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-[#2F4F4F]/30 bg-[#0a0a0a] py-16 px-6 md:px-24">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-md">
          <h4 className="impact-headline text-4xl mb-6">
            THE <span className="text-[#C41E3A]">BLACKLIST</span>
          </h4>
          <p className="mono-body text-sm text-[#708090] mb-8">
            This digital interface is property of the Federal Bureau of
            Investigation Task Force. Unauthorized access will be prosecuted to
            the fullest extent of the law.
          </p>
        </div>

        <div className="">
          <div className="block">
            <h5 className="mono-body font-bold text-xs text-[#F5F5DC]/40 uppercase mb-4 tracking-widest">
              Contact
            </h5>
            <p className="mono-body text-[10px] text-[#708090]">
              STATION: THE POST OFFICE
              <br />
              SECURE LINE: 1-800-RED-LIST
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
