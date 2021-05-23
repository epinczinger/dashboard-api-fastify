"use strict";

let currentId = 28;

const docOptions = {
  schema: {
    body: {
      type: "object",
      required: [
        "status",
        "channel",
        "name",
        "group",
        "date",
        "type",
        "adress",
      ],
      properties: {
        date: {
          type: "string",
        },
        status: {
          type: "string",
        },
        channel: {
          type: "string",
        },
        name: {
          type: "string",
        },
        group: {
          type: "string",
        },
        type: {
          type: "string",
        },
        adress: {
          type: "string",
        },
      },
    },
  },
};

module.exports = async function (fastify, opts) {
  // read
  fastify.get("/", async function (request, reply) {
    const page = parseInt(request.query.page);
    const limit = parseInt(request.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const response = {};

    if (endIndex < data.length) {
      response.next = { page: page + 1, limit };
    }
    if (startIndex > 0) {
      response.previous = { page: page - 1, limit };
    }

    response.data = data.slice(startIndex, endIndex);

    reply.status(200).send(response);
  });

  fastify.post("/", docOptions, async function (request, reply) {
    const { status, channel, name, group, date, type, adress } = request.body;

    const newDoc = {
      status,
      channel,
      name,
      group,
      date,
      type,
      adress,
      id: currentId,
    };

    data.push(newDoc);
    currentId++;

    reply.code(201);
    return newDoc;
  });
};

const data = [
  {
    id: 1,
    status: "Received",
    channel: "PDF",
    name: "Ant design",
    group: "Receipts",
    date: "2020-02-04",
    type: "Prior",
    adress: "/localhost",
  },
  {
    id: 2,
    status: "Received",
    channel: "SMS",
    name: "Laboris somehitng",
    group: "Receipts",
    date: "2020-02-03",
    type: "Non-Prior",
    adress: "/localhost1",
  },
  {
    id: 3,
    status: "Folded",
    channel: "SMS",
    name: "Ant design",
    group: "Fintech",
    date: "2020-02-02",
    type: "Non-Prior",
    adress: "/localhost",
  },
  {
    id: 4,
    status: "Received",
    channel: "PDF",
    name: "Laboris somehitng",
    group: "Users",
    date: "2020-02-02",
    type: "Prior",
    adress: "/localhost2",
  },
  {
    id: 5,
    status: "Received",
    channel: "PDF",
    name: "Ant design",
    group: "Receipts",
    date: "2020-02-04",
    type: "Prior",
    adress: "/localhost",
  },
  {
    id: 6,
    status: "Folded",
    channel: "SMS",
    name: "Laboris somehitng",
    group: "Receipts",
    date: "2020-02-03",
    type: "Non-Prior",
    adress: "/localhost1",
  },
  {
    id: 7,
    status: "Received",
    channel: "SMS",
    name: "Ant design",
    group: "Fintech",
    date: "2020-02-02",
    type: "Non-Prior",
    adress: "/localhost",
  },
  {
    id: 8,
    status: "Received",
    channel: "PDF",
    name: "Laboris somehitng",
    group: "Users",
    date: "2020-02-02",
    type: "Prior",
    adress: "/localhost2",
  },
  {
    id: 9,
    status: "Received",
    channel: "PDF",
    name: "Ant design",
    group: "Receipts",
    date: "2020-02-04",
    type: "Prior",
    adress: "/localhost",
  },
  {
    id: 10,
    status: "Printed",
    channel: "SMS",
    name: "Laboris somehitng",
    group: "Receipts",
    date: "2020-02-03",
    type: "Non-Prior",
    adress: "/localhost1",
  },
  {
    id: 11,
    status: "Printed",
    channel: "SMS",
    name: "Ant design",
    group: "Fintech",
    date: "2020-02-02",
    type: "Non-Prior",
    adress: "/localhost",
  },
  {
    id: 12,
    status: "Printed",
    channel: "PDF",
    name: "Laboris somehitng",
    group: "Users",
    date: "2020-02-02",
    type: "Prior",
    adress: "/localhost2",
  },
  {
    id: 13,
    status: "Printed",
    channel: "SMS",
    name: "Laboris somehitng",
    group: "Receipts",
    date: "2020-02-03",
    type: "Non-Prior",
    adress: "/localhost1",
  },
  {
    id: 14,
    status: "Printed",
    channel: "SMS",
    name: "Ant design",
    group: "Fintech",
    date: "2020-02-02",
    type: "Non-Prior",
    adress: "/localhost",
  },
  {
    id: 15,
    status: "Printed",
    channel: "PDF",
    name: "Laboris somehitng",
    group: "Users",
    date: "2020-02-02",
    type: "Prior",
    adress: "/localhost2",
  },
  {
    id: 16,
    status: "Printed",
    channel: "SMS",
    name: "Laboris somehitng",
    group: "Receipts",
    date: "2020-02-03",
    type: "Non-Prior",
    adress: "/localhost1",
  },
  {
    id: 17,
    status: "Printed",
    channel: "SMS",
    name: "Ant design",
    group: "Fintech",
    date: "2020-02-02",
    type: "Non-Prior",
    adress: "/localhost",
  },
  {
    id: 18,
    status: "Printed",
    channel: "PDF",
    name: "Laboris somehitng",
    group: "Users",
    date: "2020-02-02",
    type: "Prior",
    adress: "/localhost2",
  },
  {
    id: 19,
    status: "Printed",
    channel: "SMS",
    name: "Laboris somehitng",
    group: "Receipts",
    date: "2020-02-03",
    type: "Non-Prior",
    adress: "/localhost1",
  },
  {
    id: 20,
    status: "Printed",
    channel: "SMS",
    name: "Ant design",
    group: "Fintech",
    date: "2020-02-02",
    type: "Non-Prior",
    adress: "/localhost",
  },
  {
    id: 21,
    status: "Printed",
    channel: "PDF",
    name: "Laboris somehitng",
    group: "Users",
    date: "2020-02-02",
    type: "Prior",
    adress: "/localhost2",
  },
  {
    id: 22,
    status: "Printed",
    channel: "SMS",
    name: "Laboris somehitng",
    group: "Receipts",
    date: "2020-02-03",
    type: "Non-Prior",
    adress: "/localhost1",
  },
  {
    id: 23,
    status: "Printed",
    channel: "SMS",
    name: "Ant design",
    group: "Fintech",
    date: "2020-02-02",
    type: "Non-Prior",
    adress: "/localhost",
  },
  {
    id: 24,
    status: "Printed",
    channel: "PDF",
    name: "Laboris somehitng",
    group: "Users",
    date: "2020-02-02",
    type: "Prior",
    adress: "/localhost2",
  },
  {
    id: 25,
    status: "Printed",
    channel: "SMS",
    name: "Laboris somehitng",
    group: "Receipts",
    date: "2020-02-03",
    type: "Non-Prior",
    adress: "/localhost1",
  },
  {
    id: 26,
    status: "Printed",
    channel: "SMS",
    name: "Ant design",
    group: "Fintech",
    date: "2020-02-02",
    type: "Non-Prior",
    adress: "/localhost",
  },
  {
    id: 27,
    status: "Printed",
    channel: "PDF",
    name: "Laboris somehitng",
    group: "Users",
    date: "2020-02-02",
    type: "Prior",
    adress: "/localhost2",
  },
];
