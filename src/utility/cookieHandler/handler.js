import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getCookieData = cookieName => {
  const cName = cookieName;
  let cookieData = cookies.get(cName);

  if (cookieData) {
    return cookieData;
  } else {
    return null;
  }
};

export const setCookieData = (cookieName, data, options) => {
  const cName = cookieName;

  cookies.set(cName, data, options);
};
