const SvgSelector = ({ svg }) => {
  switch (svg) {
    case "yandex":
      return (
        <svg width="24" height="36" viewBox="0 0 24 36" fill="none">
          <path
            d="M24 36H17.6879V4.87306H14.8759C9.72165 4.87306 7.02179 7.44259 7.02179 11.2783C7.02179 15.63 8.88395 17.6462 12.7363 20.2158L15.9111 22.349L6.78702 35.9947H0L8.21165 23.812C3.48955 20.4498 0.832369 17.1674 0.832369 11.6294C0.832369 4.70814 5.67185 0 14.8333 0H23.9573V35.9894H24V36Z"
            fill="white"
            fill-opacity="0.2"
          />
        </svg>
      );

    default:
      return <></>;
  }
};

export default SvgSelector;
