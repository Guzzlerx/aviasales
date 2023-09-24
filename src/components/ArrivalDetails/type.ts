import { IFlightInfo } from "../FlightInfoBlock/type";

export interface IArrivalDetailsProps
  extends Pick<
    IFlightInfo,
    "arrival_date" | "arrival_time" | "destination" | "destination_name"
  > {
  textAlignRight?: boolean;
}
