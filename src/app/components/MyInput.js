let debuffed = false;
export default function MyIpunt({ children, handleValue, debuff }) {
  const today = new Date();
  const totalDays = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate();

  function getToday(value) {
    switch (children) {
      case "day":
        if (value <= totalDays) {
          if (today.getDate() + 1 - value >= 0) {
            if (debuffed) {
              debuffed = false;
              debuff((prev) => prev + 1);
            }
            return today.getDate() + 1 - value;
          } else {
            console.log(debuffed);
            if (!debuffed) {
              debuff((prev) => prev - 1);
              debuffed = true;
            }

            return totalDays + (today.getDate() - value);
          }
        } else {
          return "error";
        }
      case "month":
        if (value <= 12) {
          if (today.getMonth() + 1 - value >= 0) {
            if (debuffed) {
              debuffed = false;
              debuff((prev) => prev + 1);
            }
            return today.getMonth() + 1 - value;
          } else {
            if (!debuffed) {
              debuff((prev) => prev - 1);
              debuffed = true;
            }
            return 12 + (today.getMonth() + 1 - value);
          }
        } else {
          return "error";
        }
      case "year":
        if (value <= today.getFullYear && value > 1900) {
          return today.getFullYear() - value;
        } else {
          return "error";
        }
    }
  }
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm text-Smokey_grey">{children}</p>
      <input
        className=" rounded-lg border border-gray-200 h-10 p-2"
        onChange={(e) => {
          handleValue(getToday(e.target.value));
        }}
      ></input>
    </div>
  );
}
