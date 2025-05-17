export class Citizen {
  id?: number;
  firstName!: string;
  middleName?: string;
  lastName!: string;
  spouseName?: string;
  dateOfBirth!: string; // Use string if coming as ISO date from backend
  phoneNo!: number;
  fatherName?: string;
  motherName?: string;
  grandfatherName?: string;
  grandmotherName?: string;
  gender!: string;
  nationality!: string;
  district!: string;
  municipality!: string;
  wardNo!: number;
  tole!: string;
  isVerified!: boolean;
  verifiedDate?: string;
  verifiedBy?: number;
  createdAt?: string;
  updatedAt?: string;

  // You can optionally include these if needed in the frontend
  // documents?: CitizenDocument[];
  // birthCertificateRequests?: BirthCertificateRequest[];
  // certificateFiles?: CertificateFile[];


}
