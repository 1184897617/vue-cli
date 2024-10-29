interface Option {
  method: "GET" | "POST";
  url: string;
  async?: boolean;
  user?: any | null;
  password?: any | null;
  data?: any | null;
}

function ajax(option: Option) {
  const xhr = new XMLHttpRequest();

  let { async, url, method, data } = option;

  async = typeof async === "boolean" ? async : true;

  if (method === "GET") {
    xhr.open("GET", `${url}?${data}`, async);
    xhr.send();
  } else {
    xhr.open("POST", url, async);
    xhr.send(data);
  }

  xhr.onreadystatechange = () => {
    switch (xhr.readyState) {
      case 4:
        // 逻辑判断
        break;

      default:
        break;
    }
  };
}
