const Image64 = ({ data }: any) => (
  <img width='50' height='80' src={`data:image/jpeg;base64,${data}`} />
);
export default Image64;
