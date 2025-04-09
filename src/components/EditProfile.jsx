import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  display: grid;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.75rem;
`;

const Label = styled.label`
  font-weight: 600;
`;

const Button = styled.button`
  background: #4f46e5;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
`;

const EditProfile = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Updated Profile:', form);
    alert('Profile updated!');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Label>Full Name</Label>
        <Input name="fullName" value={form.fullName} onChange={handleChange} required />
      </div>
      <div>
        <Label>Email</Label>
        <Input type="email" name="email" value={form.email} onChange={handleChange} required />
      </div>
      <div>
        <Label>Phone</Label>
        <Input type="tel" name="phone" value={form.phone} onChange={handleChange} />
      </div>
      <div>
        <Label>Address</Label>
        <Input name="address" value={form.address} onChange={handleChange} />
      </div>
      <Button type="submit">Save Changes</Button>
    </Form>
  );
};

export default EditProfile;
