function find_average(array) {
  return (array.reduce((total, num) => {return total + num;}))/array.length;
}