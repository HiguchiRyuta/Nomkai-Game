export const classnames = (...classNames: string[] | { [className: string]: boolean }[]): string => {
  //   const [classNamesString, setClassNamesString] = useState<string>('');
  //   const convertClassNames = useCallback(() => {
  const convertedClassNames = classNames.map((className) => {
    if (typeof className === 'string') {
      return className;
    } else {
      return Object.keys(className)
        .map((key) => {
          if (className[key]) {
            return key;
          }
        })
        .filter((key) => !!key)
        .join(',');
    }
  });
  return convertedClassNames.join(',');
  // setClassNamesString(convertedClassNames.join(','));
  //   }, [classNames]);

  //   useEffect(() => {
  //     convertClassNames();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [classNames]);
};
