export default function WebStorage() {
  if (typeof window !== "undefined" && "indexedDB" in window) {
    const fn = async () => {
      const obj = await indexedDB.open("test", 1);
      console.log(obj);

      console.log("クッキー", document.cookie);
    };

    fn();
  }

  return (
    <div>
      <h1>WebStorage</h1>
    </div>
  );
}
