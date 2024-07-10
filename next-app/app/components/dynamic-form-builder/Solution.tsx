"use client";

import { CSSProperties, ChangeEvent, useState } from "react";

const formStyle: CSSProperties = {
  minHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "10px 0",
};

const labelStyle: CSSProperties = {
  display: "block",
};

const inputStyle: CSSProperties = {
  margin: "5px 0",
  display: "block",
  padding: "5px",
};

const showButtonStyle: CSSProperties = {
  width: "fit-content",
  padding: "5px",
  margin: "10px 0",
};

const addButtonStyle: CSSProperties = {
  width: "fit-content",
  padding: "5px",
  margin: "10px 0",
};

const itemStyle = {
  display: "flex",
  gap: "5px",
};

const deleteButtonStyle: CSSProperties = {
  width: "fit-content",
  padding: "5px",
  margin: "10px 0",
};

const containerStyle: CSSProperties = {
  border: "1px solid black",
  padding: "15px",
};

const h3Style: CSSProperties = {
  margin: "30px 0 10px",
};

const submitButtonStyle: CSSProperties = {
  padding: "5px",
  marginTop: "10px",
};

type ItemProps = {
  id: number;
  value: string;
};

type FormState = {
  showPartner: boolean;
  firstName: string;
  lastName: string;
  partnerFirstName: string;
  partnerLastName: string;
  items: ItemProps[];
};

const Solution = () => {
  const [formState, setFormState] = useState<FormState>({
    showPartner: false,
    firstName: "",
    lastName: "",
    partnerFirstName: "",
    partnerLastName: "",
    items: [],
  });

  const handleInputChange =
    (field: keyof FormState) => (event: ChangeEvent<HTMLInputElement>) => {
      setFormState((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const toggleShowPartner = () => {
    setFormState((prev) => ({ ...prev, showPartner: !prev.showPartner }));
  };

  const addItemHandler = () => {
    const newItem = { id: Date.now() + formState.items.length, value: "" };
    setFormState((prev) => ({ ...prev, items: [...prev.items, newItem] }));
  };

  const deleteItemHandler = (itemId: number) => {
    setFormState((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== itemId),
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <>
      <h2>Please enter your details for Insurance</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={containerStyle}>
          <h3 style={h3Style}>Personal</h3>
          <label htmlFor="firstName" style={labelStyle}>
            First Name
            <input
              required
              style={inputStyle}
              type="text"
              value={formState.firstName}
              onChange={handleInputChange("firstName")}
            />
          </label>
          <label htmlFor="lastName" style={labelStyle}>
            Last Name
            <input
              required
              style={inputStyle}
              type="text"
              value={formState.lastName}
              onChange={handleInputChange("lastName")}
            />
          </label>
          <h3 style={h3Style}>Partner</h3>
          <button
            type="button"
            onClick={toggleShowPartner}
            style={showButtonStyle}
          >
            {formState.showPartner ? "Remove" : "Add"} Partner
          </button>
          {formState.showPartner && (
            <>
              <label htmlFor="partnerFirstName" style={labelStyle}>
                First Name
                <input
                  required
                  style={inputStyle}
                  type="text"
                  value={formState.partnerFirstName}
                  onChange={handleInputChange("partnerFirstName")}
                />
              </label>
              <label htmlFor="partnerLastName" style={labelStyle}>
                Last Name
                <input
                  required
                  style={inputStyle}
                  type="text"
                  value={formState.partnerLastName}
                  onChange={handleInputChange("partnerLastName")}
                />
              </label>
            </>
          )}
          <h3 style={h3Style}>Items to Include</h3>
          {formState.items.map((item, index) => (
            <div key={item.id} style={itemStyle}>
              <input
                required
                type="text"
                style={inputStyle}
                value={item.value}
                onChange={(e) => {
                  const newItems = [...formState.items];
                  newItems[index] = {
                    ...newItems[index],
                    value: e.target.value,
                  };
                  setFormState((prev) => ({ ...prev, items: newItems }));
                }}
              />
              <button
                type="button"
                style={deleteButtonStyle}
                onClick={() => deleteItemHandler(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addItemHandler}
            style={addButtonStyle}
            aria-label="Add Item"
          >
            Add Item
          </button>
        </div>
        <button style={submitButtonStyle} type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Solution;
