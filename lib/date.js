const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");

dayjs.extend(utc);
dayjs.extend(timezone);

export function formatDate(dateString) {
  return dayjs.utc(dateString).tz("Asia/Tokyo").format("YYYY年MM月DD日");
}
