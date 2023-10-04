import axios from "axios";

async function getTicketsRequest() {
  const { data } = await axios.get("/api/tickets");
  return data;
}

export default getTicketsRequest;
