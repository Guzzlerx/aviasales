import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { tickets } from "../data/tickets";

const useMockAdapter = () => {
  const mock = new MockAdapter(axios, { delayResponse: 600 });

  mock.onGet("/api/tickets").reply(200, tickets);
};

export default useMockAdapter;
