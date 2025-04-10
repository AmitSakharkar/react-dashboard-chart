import React, { useState } from "react";
import {
  Container,
  FormGrid,
  InputField,
  Label,
  Input,
  SaveButton,
} from "../styles/styles";

const Security = () => {
  const [form, setForm] = useState({
    password: "**********",
    retypePassword: "**********",
    confirmPassword: "**********",
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container>
      <FormGrid>
        <InputField>
          <Label>Password</Label>
          <Input name="password" value={form.password} onChange={handleChange} />
        </InputField>
        <InputField>
          <Label>Retype Password</Label>
          <Input name="password" value={form.password} onChange={handleChange} />
        </InputField>
        <InputField>
          <Label>Confirm Password</Label>
          <Input name="password" value={form.password} onChange={handleChange} />
        </InputField>
      </FormGrid>
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "30px" }}>
              <SaveButton>Save</SaveButton>
            </div>
    </Container>
  );
};

export default Security;
