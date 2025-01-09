"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import "./form.css";

interface FormField {
  id: number;
  inputValue: string;
  selectValue: string;
  inputError?: string;
  selectError?: string; 
}

const Form: React.FC = () => {
  const [formFields, setFormFields] = useState<FormField[]>([
    { id: Date.now(), inputValue: "", selectValue: "", inputError: "", selectError: "" },
  ]);
  const [submittedData, setSubmittedData] = useState<FormField[]>([]);

  const addField = () => {
    setFormFields([
      ...formFields,
      { id: Date.now(), inputValue: "", selectValue: "", inputError: "", selectError: "" },
    ]);
  };

  const removeField = (id: number) => {
    setFormFields(formFields.filter((field) => field.id !== id));
  };

  const onSubmit = () => {
    let hasError = false;

    const updatedFields = formFields.map((field) => {
      const inputError = !field.inputValue ? "Input is required" : "";
      const selectError = !field.selectValue ? "Selection is required" : "";

      if (inputError || selectError) {
        hasError = true;
      }

      return { ...field, inputError, selectError };
    });

    if (hasError) {
      setFormFields(updatedFields);
    } else {
      setFormFields(updatedFields); 
      setSubmittedData(formFields); 
      console.log("Submitted Data:", formFields);
    }
  };

  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        {formFields.map((field, index) => (
          <div key={field.id} className="field-row">
            <div className="input-group">
              <Input
                placeholder="Enter text"
                value={field.inputValue}
                onChange={(e) => {
                  const updatedFields = formFields.map((item) =>
                    item.id === field.id
                      ? { ...item, inputValue: e.target.value, inputError: "" }
                      : item
                  );
                  setFormFields(updatedFields);
                }}
              />
              {field.inputError && (
                <p className="error-message">{field.inputError}</p>
              )}
            </div>
            <div className="select-group">
              <div className="select-box">
                <Select
                  value={field.selectValue}
                  onValueChange={(value) => {
                    const updatedFields = formFields.map((item) =>
                      item.id === field.id
                        ? { ...item, selectValue: value, selectError: "" }
                        : item
                    );
                    setFormFields(updatedFields);
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option-1">Option-1</SelectItem>
                    <SelectItem value="option-2">Option-2</SelectItem>
                    <SelectItem value="option-3">Option-3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {field.selectError && (
                <p className="error-message">{field.selectError}</p>
              )}
            </div>
            <Button
              onClick={() => removeField(field.id)}
              type="button"
              className="delete-button"
            >
              Delete
            </Button>
          </div>
        ))}
        <div className="button-group">
          <Button onClick={addField} type="button" className="add-button">
            + Add Field
          </Button>
          <Button type="submit" className="submit-button">
            Submit
          </Button>
        </div>
      </form>
      <table className="form-state-table">
        <thead>
          <tr>
            <th>Input Value</th>
            <th>Select Value</th>
          </tr>
        </thead>
        <tbody>
          {submittedData.map((field) => (
            <tr key={field.id}>
              <td>{field.inputValue}</td>
              <td>{field.selectValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form;
