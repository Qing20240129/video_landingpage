export interface OptionsProps {
  key: string;
  label: string;
}

export interface InputFieldProps {
  key: string;
  label: string;
  required: boolean;
  placeholder?: string;
  fieldType: string;
  type?: string;
  options?: OptionsProps[];
}

export const videoTypeOptions: OptionsProps[] = [
  {
    key: "personalizedWelcomeVideoMessage",
    label: "Personalized Welcome Video Message",
  },
  {
    key: "abandonedCartRecoveryVideo",
    label: "Abandoned Cart Recovery Video",
  },
  {
    key: "getCustomerReviewVideo",
    label: "Get Customer Review Video",
  },
  {
    key: "postPurchaseThankVideo",
    label: "Post-Purchase Thank Video",
  },
  {
    key: "videoAds",
    label: "Video Ads",
  },
  {
    key: "socialMediaVideos",
    label: "Social Media Videos",
  },
  {
    key: "other",
    label: "Other",
  },
];

export const sourceOptions: OptionsProps[] = [
  {
    key: "wati",
    label: "WATI",
  },
  {
    key: "searchEngine",
    label: "Search Engine",
  },
  {
    key: "socialMedia",
    label: "Social Media",
  },
  {
    key: "blogPosts",
    label: "Blog Posts",
  },
  {
    key: "other",
    label: "Other",
  },
];

export const inputFields: InputFieldProps[] = [
  {
    key: "name",
    label: "Your Name",
    required: true,
    placeholder: "Enter Your Name",
    fieldType: "input",
    type: "text",
  },
  {
    key: "email",
    label: "Your Business Email",
    required: true,
    placeholder: "Enter Your Business Email",
    fieldType: "input",
    type: "email",
  },
  {
    key: "whatsapp",
    label: "Your WhatsApp Number (If Have)",
    required: false,
    placeholder: "Enter Your WhatsApp Number with country code",
    fieldType: "input",
    type: "tel",
  },
  {
    key: "videoType",
    label: "What kind of personalized video you want to boost your business?",
    required: true,
    fieldType: "select",
    options: videoTypeOptions,
  },
  {
    key: "industry",
    label: "What industry do you work in?",
    required: true,
    placeholder: "Enter Your Industry (i.g E-commerce)",
    fieldType: "input",
    type: "text",
  },
  {
    key: "website",
    label: "What’s your website? (If Have)",
    required: false,
    placeholder: "Enter Your Website",
    fieldType: "input",
    type: "text",
  },
  {
    key: "source",
    label: "What’s your website? (If Have)",
    required: false,
    fieldType: "select",
    options: sourceOptions,
  },
];
