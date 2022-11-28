import getUserData from "./index";

describe("export user data", () => {
  describe("it should find all user related data", () => {
    it("should find all user related data", async () => {
      const result = await getUserData("eca9b317-b336-49a1-88c7-cc813d0ee04a");
      expect(result).not.toEqual([
        {
          table: "benefits_coupon",
          data: {
            id: "01759964-26c3-4668-b7c3-4f737c2ff5db",
            date_created: "2022-10-25T14:44:51.000Z",
            date_updated: "2022-11-28T14:55:59.000Z",
            code: "ewkjhwegkwe",
            status: "redeemable",
            deal: "262c1890-6145-4c28-badf-97e5d44af02c",
            user_updated: "39a4f98a-fc5a-4a5a-bba5-96abf5eee75b",
            user_created: "a41cc6ac-efb0-42fc-b9f7-432ffe039ca6",
            suppressed: false,
            assigned_at: "2022-11-21T12:00:00",
            user: "eca9b317-b336-49a1-88c7-cc813d0ee04a",
          },
        },
        {
          table: "job_alert_subscriber",
          data: {
            id: "89db9d8f-3a5f-46fc-aa50-aa079342df59",
            date_created: "2022-11-28T14:59:14.000Z",
            date_updated: null,
            categories: [Array],
            token: "asdasdas",
            time_type: [Array],
            user: "eca9b317-b336-49a1-88c7-cc813d0ee04a",
          },
        },
      ]);
    });
  });
});
