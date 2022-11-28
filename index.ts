import { RelationsResponse } from "./relations.types";

const fetch = require("node-fetch");

const getUserData = async (id: string) => {
  console.time("getUserData");

  let userData = [];
  const relationsResp = await fetch(
    "https://directus.aws-dev.enercity.de/relations",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}`,
      },
    }
  );
  if (relationsResp.status !== 200) {
    throw new Error("Could not fetch relations");
  }

  const relations = (await relationsResp.json()) as RelationsResponse;

  const relationsWithUser = relations.data.filter(
    (relation) => relation.related_collection === "user"
  );

  const userRelations = relationsWithUser.map((relation) => ({
    table: relation.collection,
    field: relation.field,
  }));
  // create async loop
  for (const relation of userRelations) {
    const resp = await fetch(
      `https://directus.aws-dev.enercity.de/items/${
        relation.table
      }?${new URLSearchParams({
        filter: JSON.stringify({
          [relation.field]: {
            _eq: id,
          },
        }),
      })}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}`,
        },
      }
    );
    const { data } = await resp.json();

    if (resp.status !== 200) {
      console.error(data);
    }

    userData.push({
      table: relation.table,
      data: data[0],
    });
  }

  console.log(userData);

  return userData;
};

export default getUserData;
