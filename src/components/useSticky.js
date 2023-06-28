import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect, useRef, useState } from "react";

const useSticky = () => {
  const stickyRef = useRef(null);
  const [sticky, setSticky] = useState(false);
  const [parent, setParent] = useState(0);
  const [stickyBottom, setStickyBottom] = useState(false);
  const [stickyOffset, setStickyOffset] = useState(0);
  const [stickyBottomOffset, setStickyBottomOffset] = useState(0);

  const size = useWindowSize();

  useEffect(() => {
    if (!stickyRef.current) {
      return;
    }
    setStickyOffset(stickyRef.current.offsetTop);
    setParent(stickyRef.current.offsetParent?.offsetTop);
    setStickyBottomOffset(
      stickyRef.current.offsetHeight - stickyRef.current.firstChild.clientHeight
    );
  }, [stickyRef, setStickyOffset, setStickyBottomOffset, size]);

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current) {
        return;
      }

      const shouldBeSticky = window.scrollY > stickyOffset + parent;
      const shouldBeAbs =
        window.scrollY > stickyBottomOffset + stickyOffset + parent;

      setSticky(shouldBeSticky);
      setStickyBottom(shouldBeAbs);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setSticky, stickyRef, stickyOffset, setStickyBottom]);
  return { stickyRef, sticky, stickyBottom };
};

export default useSticky;
