import getUserData from "./index";

describe("export user data", () => {
  describe("it should find all user related data", () => {
    it("should find all user related data", async () => {
      const result = await getUserData("eca9b317-b336-49a1-88c7-cc813d0ee04a");
      expect(result).not.toBeNull();
    });
  });
});
