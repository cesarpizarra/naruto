export const formatArrayOrString = (data: string | string[] | undefined) => {
  if (Array.isArray(data)) {
    return data.join(", ");
  } else if (typeof data === "string") {
    return data;
  } else {
    return "N/A";
  }
};
