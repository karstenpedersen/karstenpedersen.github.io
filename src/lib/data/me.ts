const ME = {
  name: "Karsten",
  fullName: "Karsten F. Pedersen",
  email: "karstenfp.all@gmail.com",
  age: () => {
    const currentYear = new Date().getFullYear();
    return Math.abs(2003 - currentYear);
  },
  origin: "Denmark",
  location: "Denmark"
};

export default ME;
