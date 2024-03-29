const styles = {
  global: {
    "html, body": {
      backgroundColor: "gray.100",
      color: "gray.500",
    },
    ".examTable": {
      margin: "20px",
      display: "flex",
      justifyContent: "center", //For horizontal centering
    },
    ".examTable tr, .examTable td, .examTable th": {
      borderBottom:"1px solid #D3D3D3",
    },
    "td img": {
      display: "block",
      margin: "auto",
    },  
    "a": {
      color: "#1D76DB"
    },
    svg: {
      cursor: "pointer",
    },
    ".table": {
      border: "1px solid #D3D3D3",
    },
    ".tr": {
      display: "flex",
      width: "fit-content",
    },
    ".th, .td": { boxShadow: "inset 0 0 0 1px #424242" },
    ".th": {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "gray.400",
      padding: "0.5rem",
      fontWeight: "bold",
      fontSize: "xs",
      textTransform: "uppercase",
      textAlign: "center",
    },
    ".td > input": {
      m: "1",
      padding: "0.2rem",
      bg: "transparent",
      maxW: "100%",
    },
    ".date-wrapper": {
      display: "flex",
      alignItems: "center",
      w: "100%",
      h: "100%",
    },
    ".resizer": {
      position: "absolute",
      opacity: 0,
      top: 0,
      right: 0,
      h: "100%",
      w: "5px",
      bg: "#27bbff",
      cursor: "col-resize",
      userSelect: "none",
      touchAction: "none",
      borderRadius: "6px",
    },
    ".resizer.isResizing": {
      bg: "#2eff31",
      opacity: 1,
    },
    "*:hover > .resizer": {
      opacity: 1,
    },
  },
};

export default styles;
