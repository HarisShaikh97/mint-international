import CandidateTable from "@/components/candidate-table/Candidate-Table"

export default function Candidates() {
	const candidates = [
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		},
		{
			fullName: "John Doe",
			fatherName: "Alex Doe",
			postApplied: "MERN Stack Developer",
			referredBy: "Lorem Ipsum",
			maritalStatus: "Single",
			religion: "Islam",
			dob: "28-4-1992",
			phoneNumber: ["+923351234567", "+923357654321"],
			passportNumber: "123-456-1234",
			dateOfIssue: "16-7-2023",
			placeOfIssue: "Karachi",
			dateOfExpiry: "31-12-2028",
			academicQualification: "Graduate",
			technicalQualification: "Diploma IT",
			languagesKnown: "English, Spanish, French",
			totalExperience: 5,
			experienceDetails: [
				{
					companyName: "Tech Hunt",
					duration: "3-1-2023 to 31-10-2025",
					trade: "IT"
				},
				{
					companyName: "Tech Hunt",
					duration: "31-10-2025 to 31-10-2026",
					trade: "IT"
				}
			],
			remarks: "Lorem ipsum dolor sit amet"
		}
	]

	return (
		<main className="flex-1 flex flex-col gap-5 p-10">
			<p className="text-3xl font-semibold text-primary">Candidates</p>
			<CandidateTable data={candidates} />
		</main>
	)
}
