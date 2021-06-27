import Link from 'next/link'

const Anchor = ({href, children}) => {
    return <Link href={href}>
        <a>{children}</a>
    </Link>

}

export default Anchor