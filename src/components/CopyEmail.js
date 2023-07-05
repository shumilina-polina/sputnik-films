import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { breakpoints } from "styles/variables";

export const CopyEmail = () => {
  const [copied, setCopied] = useState(false);
  const isMobile = useMediaQuery(breakpoints.mobile);

  useEffect(() => {
    setTimeout(() => setCopied(false), 6000);
  }, [copied]);

  return (
    <button>
      <CopyToClipboard
        onCopy={() => setCopied(true)}
        text={"hello@sputnikfilms.ru"}
      >
        <div>
          {isMobile || <span>[</span>}
          {copied ? "скопировано" : "hello@sputnikfilms.ru"}
          {isMobile || <span>]</span>}
        </div>
      </CopyToClipboard>
    </button>
  );
};
