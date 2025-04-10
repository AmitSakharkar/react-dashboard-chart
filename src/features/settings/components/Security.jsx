import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.form`
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
  background: #ef4444;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
`;

const Security = () => {
  const [form, setForm] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (form.newPassword !== form.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Change Password:', form);
    alert('Password updated!');
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <div>
        <Label>Old Password</Label>
        <Input type="password" name="oldPassword" value={form.oldPassword} onChange={handleChange} required />
      </div>
      <div>
        <Label>New Password</Label>
        <Input type="password" name="newPassword" value={form.newPassword} onChange={handleChange} required />
      </div>
      <div>
        <Label>Confirm New Password</Label>
        <Input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
      </div>
      <Button type="submit">Change Password</Button>
    </Wrapper>
  );
};

export default Security;
