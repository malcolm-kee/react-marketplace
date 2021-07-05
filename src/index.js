import { showNow } from "./show-now";
import { showWeekday } from "./show-weekday";

showNow();

setInterval(showNow, 1000);

showWeekday();