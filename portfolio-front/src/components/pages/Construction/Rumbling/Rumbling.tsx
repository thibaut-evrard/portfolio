import {useEffect, useRef, useState, FC} from 'react';
import {Container} from './Rumbling.styles';
import {HTMLMotionProps, motion} from 'framer-motion';
import {TextAnimation} from './Rumbling.animations';

const Rambling: FC<HTMLMotionProps<'div'>> = ({...props}) => {
    const interval = useRef<NodeJS.Timeout | undefined>();
    const [rambles, setRambles] = useState<number[]>([]);

    useEffect(() => {
        if (interval.current) clearInterval(interval.current);
        if (rambles.length >= 5) return;
        interval.current = setInterval(() => {
            setRambles([...rambles, rambles.length]);
        }, 1000);
        return () => {
            clearInterval(interval.current);
        };
    }, [rambles]);

    return (
        <Container {...props}>
            {rambles.map((_, i) => (
                <motion.p {...(TextAnimation as any)} key={i}>
                    [rumble]
                </motion.p>
            ))}
        </Container>
    );
};

export default Rambling;
