import * as React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

export default function SearchInput({ onSearch, formRef }) {
  return (
    <form ref={formRef} onSubmit={onSearch}>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          console.log(e.target.value);
        }}
        name="query"  
        label="Search"
        variant="outlined"
        placeholder="Search..."
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton type="submit" aria-label="search">
                <Search style={{ fill: "blue" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
}
