import {FC} from 'react';
import {IMenu} from './Menu.types';
import {Container, MediaSelector} from './Menu.styles';

const Menu: FC<IMenu> = ({mediaCount, activeIndex, onSelect}) => {
    const selectors = Array.from(Array(mediaCount).keys());

    return (
        <Container>
            {selectors.map((selector, index) => (
                <MediaSelector
                    key={index}
                    onClick={() => onSelect(index)}
                    active={activeIndex === index}
                />
            ))}
        </Container>
    );
};

export default Menu;
