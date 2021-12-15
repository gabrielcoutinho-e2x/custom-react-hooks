import useAsync from "./useAsync";

export default function AsyncComponent() {
  const { loading, error, value } = useAsync(() => {
    return new Promise((resolve, reject) => {
      const success = true;
      setTimeout(() => {
        success ? resolve("Hi") : reject("Error");
      }, 1000);
    }, 1000);
  });

  return (
    <section>
      <div>Loading: {loading.toString()}</div>
      <div>{error}</div>
      <div>{value}</div>
    </section>
  );
}
