import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

export const CopyEmail = () => {
  const [copied, setCopied] = useState(false);

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
          <span>[</span>
          {copied ? "скопировано" : "hello@sputnikfilms.ru"}
          <span>]</span>
        </div>
      </CopyToClipboard>
    </button>
  );
};
