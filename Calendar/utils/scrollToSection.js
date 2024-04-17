const scrollToSection = (id) => {
  const sectionRef = document.getElementById(id);
  sectionRef.scrollIntoView({ behavior: "smooth" });
};

export default scrollToSection;
