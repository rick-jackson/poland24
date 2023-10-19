type Request = {
  id: string;
  createdDate: number;
  articles: {
    articleName: string;
    comment: "";
  }[];
  email: string;
  name: string;
  phoneNumber: number;
  status: string;
  comment?: string;
};

export default Request;
