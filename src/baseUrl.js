export const baseApiURL = () => {
  console.log(process.env.REACT_APP_APILINK);
  return process.env.REACT_APP_APILINK;
};
