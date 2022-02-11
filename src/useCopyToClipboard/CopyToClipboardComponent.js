import useCopyToClipboard from "./useCopyToClipboard";

export default function CopyToClipboardComponent() {
  const [copyToClipboard, { success }] = useCopyToClipboard();

  return (
    <section>
      <button onClick={() => copyToClipboard("This was copied")}>
        {success ? "Copied" : "Copy Text"}
      </button>
      <input type="text" />
    </section>
  );
}
