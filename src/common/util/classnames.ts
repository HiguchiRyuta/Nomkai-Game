export const classnames = (
  ...classNames: (
    | string
    | undefined
    | { [className: string]: boolean | undefined }
  )[]
): string => {
  const convertedClassNames = classNames
    .map((className) => {
      if (typeof className === "string") {
        return className;
      } else if (typeof className === "object") {
        return Object.keys(className)
          .map((key) => {
            if (className[key]) {
              return key;
            }
          })
          .filter((key) => !!key)
          .join(" ");
      }
    })
    .filter((className) => !!className);
  return convertedClassNames.join(" ");
};
