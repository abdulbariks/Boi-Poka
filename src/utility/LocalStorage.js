const getReadList = () => {
  const storedBookSTR = localStorage.getItem("readList");

  if (storedBookSTR) {
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
  } else {
    return [];
  }
};

const addReadList = (id) => {
  const storedBookData = getReadList();

  if (storedBookData.includes(id)) {
    console.log("hello");
    alert("id already exist ");
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList", data);
  }
};

export { getReadList, addReadList };
