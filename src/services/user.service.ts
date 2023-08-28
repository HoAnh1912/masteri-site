import { account } from 'types/user.interface';
import api from './api';

const signUp = (data: any) => {
  return api.post(`/v1/auth/signup`, data);
};

const signIn = (data: any) => {
  return api.post(`/v1/auth/login`, data);
};

const getApplicant = () => {
  return api.get(`/v1/applicant`);
};

const validateId = (data: any) => {
  return api.post(`/v1/auth/validate-id`, data);
};

const getCertifications = (data: any) => {
  return api.post(`/v1/auth/certifications`, data);
};

const UserService = {
  signUp,
  signIn,
  getApplicant,
  validateId,
  getCertifications
};

export default UserService;
