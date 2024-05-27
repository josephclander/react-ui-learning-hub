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

const AddButtonStyle: CSSProperties = {
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

const Solution17 = () => {
  const [showPartner, toggleShowPartner] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [partnerFirstName, setPartnerFirstName] = useState<string>("");
  const [partnerLastName, setPartnerLastName] = useState<string>("");
  const [items, setItems] = useState<ItemProps[]>([]);

  const partnerShowButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    toggleShowPartner((prevState) => !prevState);
  };

  const partnerButtonMessage = showPartner ? "Remove" : "Add";

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  const addItemHandler = () => {
    // unique ID
    const newItem = { id: Date.now() + items.length, value: "" };
    setItems([...items, newItem]);
  };

  const deleteItemHandler =
    (itemId: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault(); // prevent default behavior
      setItems(items.filter((item) => item.id !== itemId));
    };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      partnerData: showPartner ? { partnerFirstName, partnerLastName } : null,
      items: items.map((item) => item.value),
    };

    console.log(formData);
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
              style={inputStyle}
              type="text"
              value={firstName}
              onChange={handleInputChange(setFirstName)}
            />
          </label>
          <label htmlFor="lastName" style={labelStyle}>
            Last Name
            <input
              style={inputStyle}
              type="text"
              value={lastName}
              onChange={handleInputChange(setLastName)}
            />
          </label>
          <h3 style={h3Style}>Partner</h3>
          <button
            type="button"
            onClick={partnerShowButton}
            id="partner"
            aria-label="Add/Remove Partner"
            style={showButtonStyle}
          >
            {partnerButtonMessage}
          </button>
          {showPartner && (
            <>
              <label htmlFor="partnerFirstName" style={labelStyle}>
                First Name
                <input
                  style={inputStyle}
                  type="text"
                  name="partnerFirstName"
                  id="partnerFirstName"
                  value={partnerFirstName}
                  onChange={handleInputChange(setPartnerFirstName)}
                />
              </label>
              <label htmlFor="partnerLastName" style={labelStyle}>
                Last Name
                <input
                  style={inputStyle}
                  type="text"
                  name="partnerLastName"
                  id="partnerLastName"
                  value={partnerLastName}
                  onChange={handleInputChange(setPartnerLastName)}
                />
              </label>
            </>
          )}
          <h3 style={h3Style}>Items to Include</h3>
          {items.map((item, index) => (
            <div key={item.id} style={itemStyle}>
              <input
                style={inputStyle}
                type="text"
                value={item.value}
                onChange={(e) => {
                  const newItems = [...items];
                  newItems[index] = {
                    ...newItems[index],
                    value: e.target.value,
                  };
                  setItems(newItems);
                }}
              />
              <button
                type="button"
                style={deleteButtonStyle}
                onClick={deleteItemHandler(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addItemHandler}
            id="item"
            aria-label="Add Item"
            style={AddButtonStyle}
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

export default Solution17;
