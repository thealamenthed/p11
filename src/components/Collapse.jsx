import {useState, useRef} from "react";
import "./Collapse.scss";
import arrowIcon from "../assets/icons/arrow_back_ios-24px 2.svg";

function Collapse({title, children, defaultOpen = false}) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef(null);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <div className={`collapse${open ? " open" : ""}`}>
      <button className="collapse-header" onClick={toggle} aria-expanded={open}>
        <span className="collapse-title">{title}</span>
        <span className={`collapse-arrow${open ? " open" : ""}`}>
          <img src={arrowIcon} alt="" />
        </span>
      </button>
      <div
        className="collapse-content"
        ref={contentRef}
        style={{
          maxHeight: open ? contentRef.current?.scrollHeight + "px" : "0px"
        }}
        aria-hidden={!open}>
        <div className="collapse-inner">{children}</div>
      </div>
    </div>
  );
}

export default Collapse;
