import { Button } from "@mui/material";

export const CreateBtn = (props) => {
  return (
    <Button
      onClick={props.onClick}
      style={{
        backgroundColor: "  #5A4A42",
        color: "#fff",
        padding: "6px 22px",
        diplay: "flex",
        alignItems: "center",
      }}
    >
      {props.name}
      {props.icon}
    </Button>
  );
};
