const helloworld = () => {
  alert("helloworld");
};

const getdogpicture = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");

  const data = await response.json();

  const dogpictureframe = document.getElementById("dogpictureframe");

  dogpictureframe.setAttribute("src", data.message);
};
