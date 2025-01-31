interface care {
  color?: string;
  width?: number;
  className?: string;
}

export const careTakers: React.FC<care> = ({
  color = "white",
  width = 1.5,
  className,
}) => {
  return (
    <svg
    className={className}
      width={width}
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6786 3.96C13.1586 4.67 13.4386 5.52 13.4386 6.44C13.4286 8.84 11.5386 10.79 9.15859 10.87C9.05859 10.86 8.93859 10.86 8.82859 10.87C6.44859 10.79 4.55859 8.84 4.55859 6.44C4.55859 3.99 6.53859 2 8.99859 2"
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4112 4C18.3512 4 19.9112 5.57 19.9112 7.5C19.9112 9.39 18.4113 10.93 16.5413 11C16.4613 10.99 16.3713 10.99 16.2812 11"
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.15875 14.56C1.73875 16.18 1.73875 18.82 4.15875 20.43C6.90875 22.27 11.4188 22.27 14.1688 20.43C16.5888 18.81 16.5888 16.17 14.1688 14.56C11.4288 12.73 6.91875 12.73 4.15875 14.56Z"
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14"
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
