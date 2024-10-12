import { TagContiner } from "./styles";

export type Props = {
    size?: 'small' |'big';
    children: JSX.Element
}

const Tag = ({ children, size = 'small' }: Props) => (
    <TagContiner size={size}>{children}</TagContiner>

)


export default Tag