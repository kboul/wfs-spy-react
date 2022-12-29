import getTimeInMs from "./getTimeInMs";

test("retuns input in miliseconds", () => {
  const mockDate = getTimeInMs();
  const spy = jest
    .spyOn(global, "Date")
    .mockImplementation(() => mockDate as unknown as string);

  spy.mockRestore();
});
