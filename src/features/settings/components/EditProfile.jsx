import React, { useState, useRef } from "react";
import {
  Container,
  UploadContainer,
  AvatarWrapper,
  Avatar,
  UploadButton,
  CameraIcon,
  FormGrid,
  InputField,
  Label,
  Input,
  SaveButton
} from "../styles/styles";
import { FiCamera } from "react-icons/fi";

const EditProfile = () => {
  const [form, setForm] = useState({
    name: "Charlene Reed",
    email: "charlenereed@gmail.com",
    username: "Charlene Reed",
    password: "**********",
    presentAddress: "San Jose, California, USA",
    city: "San Jose",
    country: "USA",
    permanentAddress: "San Jose, California, USA",
    postalCode: "45962",
    dob: "1990-01-25",
  });

  const [profileImage, setProfileImage] = useState("https://randomuser.me/api/portraits/women/79.jpg");
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfileImage(url);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container>
      <UploadContainer>
        <AvatarWrapper>
          <Avatar src={profileImage} />
          <UploadButton onClick={() => fileInputRef.current.click()}>
            <CameraIcon>
              <FiCamera />
            </CameraIcon>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </UploadButton>
        </AvatarWrapper>
      </UploadContainer>

      <FormGrid>
        <InputField>
          <Label>Your Name</Label>
          <Input name="name" value={form.name} onChange={handleChange} />
        </InputField>
        <InputField>
          <Label>Email</Label>
          <Input name="email" value={form.email} onChange={handleChange} />
        </InputField>
        <InputField>
          <Label>User Name</Label>
          <Input name="username" value={form.username} onChange={handleChange} />
        </InputField>
        <InputField>
          <Label>Password</Label>
          <Input name="password" value={form.password} onChange={handleChange} />
        </InputField>
        <InputField>
          <Label>Present Address</Label>
          <Input name="presentAddress" value={form.presentAddress} onChange={handleChange} />
        </InputField>
        <InputField>
          <Label>City</Label>
          <Input name="city" value={form.city} onChange={handleChange} />
        </InputField>
        <InputField>
          <Label>Country</Label>
          <Input name="country" value={form.country} onChange={handleChange} />
        </InputField>
        <InputField>
          <Label>Permanent Address</Label>
          <Input name="permanentAddress" value={form.permanentAddress} onChange={handleChange} />
        </InputField>
        <InputField>
          <Label>Postal Code</Label>
          <Input name="postalCode" value={form.postalCode} onChange={handleChange} />
        </InputField>
        <InputField>
          <Label>Date of Birth</Label>
          <Input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
          />
        </InputField>
      </FormGrid>

      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "30px" }}>
        <SaveButton>Save</SaveButton>
      </div>
    </Container>
  );
};

export default EditProfile;
