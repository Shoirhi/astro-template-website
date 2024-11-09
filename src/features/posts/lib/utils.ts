import { load } from "cheerio";

export const formatDate = (date?: string) => {
  if (date) {
    const utcDate = new Date(date);
    const year = utcDate.getFullYear();
    const month = String(utcDate.getMonth() + 1).padStart(2, "0");
    const day = String(utcDate.getDate()).padStart(2, "0");

    const formattedDate = `${year}年${month}月${day}日`;
    return formattedDate;
  } else {
    return
  }
};

export const adjustImageSizeAndFormat = (blogContent: string) => {
  const $ = load(blogContent);

  $("img").each((_, img) => {
    $(img).attr("src", $(img).attr("src") + "?fit=clip&w=560&fm=webp");
    $(img).attr("width", "655");
    $(img).attr("height", "655");
  });

  return $.html();
};