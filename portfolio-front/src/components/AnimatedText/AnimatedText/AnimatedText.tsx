'use client';
import { motion } from 'framer-motion';
import { Container, Letter, Space, Word, Words } from './AnimatedText.styles';
import * as animations from './AnimatedText.animations';
import { EVariants, EMarkup, IAnimatedText } from './AnimatedText.types';
import { FC } from 'react';
import { useParsedNodes } from './AnimatedText.hooks';

// this component will work with nested <b> <em> and <strong> tags
// only one level of nesting is supported
const AnimatedText: FC<IAnimatedText> = ({
    innerHtml,
    isVisible,
    onAnimationEnd = () => undefined,
}) => {
    const textSequence = useParsedNodes(innerHtml);

    const variant = isVisible ? EVariants.Visible : EVariants.Hidden;
    const handleAninationEnd = (variantName: string) => {
        if (variantName === EVariants.Visible) onAnimationEnd();
    };

    if (!textSequence.length) return null;
    return (
        <Container
            {...animations.container}
            animate={variant}
            onAnimationComplete={handleAninationEnd}
        >
            {textSequence.map((item, seqI) => {
                if (item.type === EMarkup.Br) return <br key={`br-${seqI}`} />;

                const words = item.content.split(/(?<= )/); // splits with spaces
                const result = words.map((word, wi) => {
                    if (!word.length) return null;
                    return (
                        <Words key={wi}>
                            <Word>
                                {word.split('').map((letter, li) => {
                                    return letter === ' ' ? (
                                        <Space
                                            {...animations.letter}
                                            key={li}
                                        >
                                            &nbsp;
                                        </Space>
                                    ) : (
                                        <Letter
                                            key={li}
                                            {...animations.letter}
                                        >
                                            {letter}
                                        </Letter>
                                    );
                                })}
                            </Word>
                        </Words>
                    );
                });

                if (item.type === EMarkup.B) return <b key={seqI}>{result}</b>;
                if (item.type === EMarkup.Em) return <em key={seqI}>{result}</em>;
                if (item.type === EMarkup.Strong)
                    return <strong key={seqI}>{result}</strong>;
                return result;
            })}
        </Container>
    );
};

export default AnimatedText;
