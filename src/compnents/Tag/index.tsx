import { TagContiner } from "./styles";

export type Props = {
    size?: 'small' |'big';
    children: string
}

const Tag = ({ children, size = 'small' }: Props) => (
    <TagContiner size={size}>{children}</TagContiner>

)


export default Tag