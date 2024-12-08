// Formatea un int a notación utilizada en CL
const FormatNumber = (intValue) => {
  const formattedNumber = intValue.toLocaleString("es-CL");
  return formattedNumber;
}

export default FormatNumber;
