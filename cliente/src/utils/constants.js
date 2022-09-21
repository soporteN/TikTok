// const SERVER_IP = "127.0.0.1:8000"; // Local
//const SERVER_IP = "192.168.2.24:8000"; // Emulador Virtual de Android Studio - Oka, es este desactivar en modo desarrollo
const SERVER_IP = "eyyou.herokuapp.com";

export const ENV = {
  BASE_PATH: `https://${SERVER_IP}`,
  BASE_API: `https://${SERVER_IP}/api`,
  API_ROUTES: {
    REGISTER: "auth/register",
    LOGIN: "auth/login",
    REFRESH_TOKEN: "auth/refresh_token",
    VIDEO: "video",
    VIDEO_ACTIONS: "video/actions",
    VIDEO_LIKE: "video_like",
    FOLLOWINGS_VIDEOS: "followings_videos",
    COMMENT: "comment",
    USER_ME: "user/me",
    USERS: "users",
    FOLLOW: "follow",
    FOLLOWEDS_COUNT: "follow/followeds/count",
    FOLLOWERS_COUNT: "follow/followers/count",
    NOTIFICATION: "notification",
  },
  JWT: {
    ACCESS: "access",
    REFRESH: "refresh",
  },
  TYPE_VIDEO: {
    FOLLOWING: "following",
    FOR_YOU: "forYou",
  },
  TAB_MENU_HEIGHT: 70,
  TYPE_NOTIFICATION: {
    SHARED: "SHARED",
    LIKE: "LIKE",
    COMMENT: "COMMENT",
    FOLLOW: "FOLLOW",
  },
};
