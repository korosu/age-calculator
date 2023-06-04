export default function MyInputKai({ children, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm text-Smokey_grey">{children}</p>
      <input
        id={children}
        className="rounded-lg border border-gray-200 h-10 p-2"
        onChange={onChange}
      ></input>
    </div>
  );
}
