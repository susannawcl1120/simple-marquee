import { View, Pressable, StyleSheet, Text, Animated } from 'react-native';
import { router } from 'expo-router';
import { images } from '@/constants/images';
import { Image } from 'expo-image';
import { metrics } from '@/theme/metrics';
import { theme } from '@/theme/theme';
import { typography } from '@/theme/typography';
import { useRef } from 'react';

interface Props {
    mode?: 'close' | 'back' | '';
    title?: string | React.ReactNode;
    onClose?: () => void;
    onMore?: () => void;
    onSearch?: () => void;
    noBorder?: boolean;
    noBg?: boolean;
    titleColor?: string;
}

function TopBar({
    mode = 'back',
    title = '',
    onClose,
    onMore,
    onSearch,
    noBorder,
    noBg,
    titleColor
}: Props) {
    const leftIcon = {
        close: noBg ? images.icons.closeWhite : images.icons.close,
        back: noBg ? images.icons.backWhite : images.icons.back
    };

    const handleClose = () => {
        try {
            if (onClose) {
                onClose();
                return;
            }
            if (router.canDismiss()) {
                router.dismiss();
            } else {
                router.replace('/');
            }
        } catch {
            router.push('/');
        }
    };

    const opacity = useRef(new Animated.Value(0)).current;

    const handlePressIn = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 100,
            useNativeDriver: false
        }).start();
    };

    const handlePressOut = () => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false
        }).start();
    };

    return (
        <View style={[styles.header, noBorder && styles.noBorder, noBg && styles.noBg]}>
            <View style={styles.leftContainer}>
                {mode && (
                    <Pressable
                        onPress={handleClose}
                        onPressIn={handlePressIn}
                        onPressOut={handlePressOut}
                    >
                        <Animated.View
                            style={{
                                opacity: opacity.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 0.5]
                                })
                            }}
                        >
                            <Image source={leftIcon[mode]} style={styles.icon} />
                        </Animated.View>
                    </Pressable>
                )}
            </View>

            <View style={styles.centerContainer}>
                {title && (
                    <Text
                        style={[styles.title, titleColor && { color: titleColor }]}
                        numberOfLines={1}
                    >
                        {title}
                    </Text>
                )}
            </View>

            <View style={styles.rightContainer}>
                {onSearch && (
                    <Pressable onPress={onSearch}>
                        <Image source={images.icons.search} style={styles.iconSearch} />
                    </Pressable>
                )}
                {onMore && (
                    <Pressable onPress={onMore}>
                        <Image source={images.icons.more} style={styles.icon} />
                    </Pressable>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: theme.colors.background.primary,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: metrics.spacing.base,
        paddingHorizontal: metrics.spacing.md,
        borderBottomColor: theme.colors.border.lighter,
        borderBottomWidth: 1
    },
    noBorder: {
        borderBottomWidth: 0
    },
    noBg: {
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent'
    },
    leftContainer: {
        width: metrics.wp(56),
        height: metrics.hp(22),
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: metrics.spacing.sm
    },
    rightContainer: {
        width: metrics.wp(56),
        height: metrics.hp(22),
        flexDirection: 'row',
        gap: metrics.spacing.base,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    title: {
        color: theme.colors.text.black,
        textAlign: 'center',
        ...typography.bold.body1
    },
    icon: {
        width: metrics.wp(22),
        height: metrics.hp(22)
    },
    iconSearch: {
        width: metrics.wp(20),
        height: metrics.hp(20)
    }
});

export default TopBar;
