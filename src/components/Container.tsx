import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

function Container({ children }: ContainerProps): JSX.Element {
  return <div className='container'>{children}</div>;
}

export default Container;
