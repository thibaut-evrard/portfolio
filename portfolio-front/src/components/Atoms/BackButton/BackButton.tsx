import Link from 'next/link';
import {content} from './BackButton.content';
import {Button} from './BackButton.styles';

const BackButton = () => {
    return (
        <Link href={'/'} style={{textDecoration: 'none', margin: 'none'}}>
            <Button>{content.back}</Button>
        </Link>
    );
};

export default BackButton;
