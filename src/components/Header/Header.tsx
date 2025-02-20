
import { Helmet } from 'react-helmet';

type Props = {
    title: string
    description?: string
}

const Header = ({ title, description = "Soar Task - Application" }: Props) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
    )
}

export default Header