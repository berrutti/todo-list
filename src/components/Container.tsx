import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Container({ children }: Props): JSX.Element {
  return <div>{children}</div>;
}

export default Container;
