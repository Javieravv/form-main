import { FC } from "react";

interface Props {
  color?: string;
}


const IconCheckBoxCheck: FC<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      fill="none"
      viewBox="0 0 18 18"
      {...props}
    >
      <path
        fill="#0C7D69"
        d="M16.5 0h-15A1.5 1.5 0 000 1.5v15A1.5 1.5 0 001.5 18h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0016.5 0zm-3.22 7.28l-5.25 5.25a.748.748 0 01-1.06 0l-2.25-2.25a.75.75 0 111.06-1.06l1.72 1.72 4.72-4.72a.751.751 0 011.06 1.06z"
      />
    </svg>
  )
}


const IconRadioSelected: FC<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={21}
      fill="none"
      viewBox="0 0 20 21"
      {...props}
    >
      <path
        fill="#0C7D69"
        d="M10 .75a9.75 9.75 0 109.75 9.75A9.76 9.76 0 0010 .75zm0 18a8.25 8.25 0 118.25-8.25A8.26 8.26 0 0110 18.75zm5.25-8.25a5.25 5.25 0 11-10.499 0 5.25 5.25 0 0110.499 0z"
      />
    </svg>
  )
}


const IconSuccesCheck: FC<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={21}
      fill="none"
      viewBox="0 0 20 21"
      {...props}
    >
      <path
        fill="#0C7D69"
        d="M14.28 7.72a.748.748 0 010 1.06l-5.25 5.25a.748.748 0 01-1.06 0l-2.25-2.25a.75.75 0 111.06-1.06l1.72 1.72 4.72-4.72a.75.75 0 011.06 0zm5.47 2.78A9.75 9.75 0 1110 .75a9.76 9.76 0 019.75 9.75zm-1.5 0A8.25 8.25 0 1010 18.75a8.26 8.26 0 008.25-8.25z"
      />
    </svg>
  )
}

const IconStar: FC<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width= {10}
      height={10}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#0C7D69"
        d="M21.947 9.179a1.001 1.001 0 00-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 00-1.822-.001L8.622 8.05l-5.701.453a1 1 0 00-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 001.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 001.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"
      />
    </svg>
  )
}



export {
  IconCheckBoxCheck,
  IconSuccesCheck,
  IconRadioSelected,
  IconStar
}
