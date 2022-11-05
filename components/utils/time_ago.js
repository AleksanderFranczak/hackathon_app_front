import TimeAgo from "javascript-time-ago";
import pl from "javascript-time-ago/locale/pl";
TimeAgo.addLocale(pl);

export const timeAgo = new TimeAgo("pl-PL");
