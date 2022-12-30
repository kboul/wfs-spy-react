import getTimeInMs from "./getTimeInMs";

test("retuns input in miliseconds", () => {
  const timeInMs = getTimeInMs();
  const dateNowSpy = jest.spyOn(Date, "now").mockImplementation(() => timeInMs);

  dateNowSpy.mockRestore();
});
