import * as React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./Create.scss";
import patek from "../../../../db/resource";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { IoImageOutline } from "react-icons/io5";
const Create = () => {
  interface ProductType {
    inputValue?: string;
    title: string;
    model_code?: string;
  }
  const filter = createFilterOptions<ProductType>();
  const [value, setValue] =useState<ProductType | null>(null);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  // Function to handle image selection
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const imagesArray: string[] = [];
    // Ensure files are present
    if (files) {
      // Iterate through each selected file
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        // Ensure file is an image
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = () => {
            if (typeof reader.result === 'string') {
              imagesArray.push(reader.result); // Add selected image URL to array
              // If all images are processed, update state
              if (imagesArray.length === files.length) {
                setSelectedImages(imagesArray);
              }
            }
          };
          reader.readAsDataURL(file); // Read file as data URL
        }
      }
    }
  };
  return (
   <div className="create_form">
     <FormControl className="main_form">
      <FormLabel className="form_label">Create New Product</FormLabel>
      <TextField
        id="outlined-basic"
        label="Select a title"
       variant="outlined"
        
      />
      <Autocomplete
        fullWidth
        style={{ width: "100%" }}
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setValue({
              title: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
              title: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some(
            (option) => inputValue === option.title
          );
          if (inputValue !== "" && !isExisting) {
            filtered.push({
              inputValue,
              title: `Add "${inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={patek}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.title;
        }}
        renderOption={(props, option) => <li {...props}>{option.title}</li>}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField fullWidth {...params} label="Select Category" />
        )}
      />
      <Autocomplete
        fullWidth
        style={{ width: "100%" }}
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setValue({
              model_code: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
              model_code: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some(
            (option) => inputValue === option.model_code
          );
          if (inputValue !== "" && !isExisting) {
            filtered.push({
              inputValue,
              model_code: `Add "${inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={patek}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.model_code;
        }}
        renderOption={(props, option) => <li {...props}>{option.model_code}</li>}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField fullWidth {...params} label="Select Model" />
        )}
      />
         <TextField
         fullWidth
          id="outlined-textarea"
          label="Description"
          placeholder="Type a description"
          multiline
          variant="outlined"
        />
        <FormGroup className="checkboxes">
      <FormControlLabel control={<Checkbox />} label="Featured" />
      <FormControlLabel control={<Checkbox />} label="Visible in store" />
    </FormGroup>
    </FormControl>
     <FormControl className="variant_form">
      <div className="variant_form_title">
      <FormLabel className="variant_label">Add a variant</FormLabel>
      <Button variant="contained" color="success" startIcon={<AddIcon />}>
        Add variants
      </Button>
      </div>
      <TextField
        id="outlined-basic"
        label="Variant name"
       variant="outlined"
        style={{ width: "22%" }}
      />
      <Autocomplete
        style={{ width: "22%" }}
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setValue({
              title: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
              title: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some(
            (option) => inputValue === option.title
          );
          if (inputValue !== "" && !isExisting) {
            filtered.push({
              inputValue,
              title: `Add "${inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={patek}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.title;
        }}
        renderOption={(props, option) => <li {...props}>{option.title}</li>}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField fullWidth {...params} label="Variant Category" />
        )}
      />
      <Autocomplete
        style={{ width: "22%" }}
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setValue({
              model_code: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
              model_code: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some(
            (option) => inputValue === option.model_code
          );
          if (inputValue !== "" && !isExisting) {
            filtered.push({
              inputValue,
              model_code: `Add "${inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={patek}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.model_code;
        }}
        renderOption={(props, option) => <li {...props}>{option.model_code}</li>}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField fullWidth {...params} label="Variant Model" />
        )}
      />
         <TextField
        style={{ width: "22%" }}
          id="outlined-textarea"
          label="Description"
          placeholder="Type a description"
          multiline
          variant="outlined"
        />
          <IconButton aria-label="delete" color="error">
        <DeleteIcon />
      </IconButton>
    </FormControl>
    <div className="image-input-container">
      {/* Invisible file input */}
      <input
        type="file"
        className="file_input"
        accept="image/*" // Accept only image files
        onChange={handleImageChange}
        multiple // Allow multiple file selection
      />
      {/* Styled wrapper for file input */}
      <div className="file-input-wrapper">
        <span><IoImageOutline size={50} /> </span>
        <span>Choose Images</span>
      </div>
      {/* Display selected images */}
      {selectedImages.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Selected ${index}`} style={{ maxWidth: '100%' }} />
        </div>
      ))}
    </div>
    <button className="form_submit_button" type="submit">
       Create a new product
    </button>
    </div>
  );
};
export default Create;


