"use client";

import { ChangeEvent, useState } from "react";
import styles from "./Solution.module.css";

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
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.container}>
          <h3 className={styles.h3}>Personal</h3>
          <label htmlFor="firstName" className={styles.label}>
            First Name
            <input
              required
              className={styles.input}
              type="text"
              value={formState.firstName}
              onChange={handleInputChange("firstName")}
            />
          </label>
          <label htmlFor="lastName" className={styles.label}>
            Last Name
            <input
              required
              className={styles.input}
              type="text"
              value={formState.lastName}
              onChange={handleInputChange("lastName")}
            />
          </label>
          <h3 className={styles.h3}>Partner</h3>
          <button
            type="button"
            onClick={toggleShowPartner}
            className={styles.showButton}
          >
            {formState.showPartner ? "Remove" : "Add"} Partner
          </button>
          {formState.showPartner && (
            <>
              <label htmlFor="partnerFirstName" className={styles.label}>
                First Name
                <input
                  required
                  className={styles.input}
                  type="text"
                  value={formState.partnerFirstName}
                  onChange={handleInputChange("partnerFirstName")}
                />
              </label>
              <label htmlFor="partnerLastName" className={styles.label}>
                Last Name
                <input
                  required
                  className={styles.input}
                  type="text"
                  value={formState.partnerLastName}
                  onChange={handleInputChange("partnerLastName")}
                />
              </label>
            </>
          )}
          <h3 className={styles.h3}>Items to Include</h3>
          {formState.items.map((item, index) => (
            <div key={item.id} className={styles.item}>
              <input
                required
                type="text"
                className={styles.input}
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
                className={styles.deleteButton}
                onClick={() => deleteItemHandler(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addItemHandler}
            className={styles.addButton}
            aria-label="Add Item"
          >
            Add Item
          </button>
        </div>
        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Solution;
