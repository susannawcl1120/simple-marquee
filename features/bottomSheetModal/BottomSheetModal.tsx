import { useEffect, useRef, ReactNode, useCallback } from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import { Portal } from '@gorhom/portal';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { metrics } from '@/theme/metrics';
import { Image } from 'expo-image';
import { images } from '@/constants/images';
import { theme } from '@/theme/theme';
import { typography } from '@/theme/typography';
import { palette } from '@/theme/colors';
import CustomBackdrop from './CustomBackdrop';

interface BottomSheetModalProps {
    /** 控制底部表單的可見性 */
    isVisible: boolean;
    /** 關閉事件處理函數 */
    onClose: () => void;
    /** 底部表單的內容 */
    children: ReactNode;
    /** 是否使用 Header */
    header?: boolean;
    /** Header標題 */
    headerTitle?: string;
    /** 是否顯示關閉按鈕 */
    showCloseBtn?: boolean;
}

function BottomSheetHeader({
    close,
    headerTitle,
    showCloseBtn
}: {
    close: () => void;
    headerTitle?: string;
    showCloseBtn?: boolean;
}) {
    return (
        <View style={styles.header}>
            {showCloseBtn && (
                <Pressable onPress={close} style={styles.closeIconContainer}>
                    <Image source={images.icons.close} style={styles.closeIcon} />
                </Pressable>
            )}
            <Text style={styles.headerTitleText}>{headerTitle}</Text>
        </View>
    );
}

function BaseBottomSheetModal({
    isVisible,
    onClose,
    children,
    header,
    headerTitle,
    showCloseBtn = true
}: BottomSheetModalProps) {
    const bottomSheetRef = useRef<BottomSheet>(null);

    useEffect(() => {
        if (isVisible) {
            bottomSheetRef.current?.snapToIndex(0);
        } else {
            bottomSheetRef.current?.close();
        }
    }, [isVisible]);

    const handleSheetChanges = useCallback(
        (index: number) => {
            if (index === -1) {
                onClose();
            }
        },
        [onClose]
    );

    return (
        <Portal>
            <BottomSheet
                ref={bottomSheetRef}
                index={-1}
                snapPoints={[metrics.screenHeight * 0.6]}
                enablePanDownToClose={true}
                onChange={handleSheetChanges}
                backdropComponent={props => <CustomBackdrop isVisible={isVisible} {...props} />}
            >
                <BottomSheetView
                    style={[styles.areaBottomSheet, { minHeight: metrics.screenHeight * 0.6 }]}
                >
                    {header && (
                        <BottomSheetHeader
                            close={onClose}
                            headerTitle={headerTitle}
                            showCloseBtn={showCloseBtn}
                        />
                    )}
                    {children}
                </BottomSheetView>
            </BottomSheet>
        </Portal>
    );
}

const styles = StyleSheet.create({
    areaBottomSheet: {
        flex: 1
    },
    header: {
        paddingHorizontal: metrics.spacing.md,
        paddingBottom: metrics.spacing.md,
        borderColor: theme.colors.border.lighter,
        borderBottomWidth: 1,
        marginBottom: metrics.spacing.sm,
        flexDirection: 'row'
    },
    headerTitleText: {
        textAlign: 'center',
        flex: 1,
        color: palette.neutral[1000],
        ...typography.bold.body1
    },
    closeIconContainer: {
        position: 'absolute',
        left: 16,
        zIndex: 1
    },
    closeIcon: {
        width: metrics.wp(16),
        height: metrics.hp(16)
    }
});

export default BaseBottomSheetModal;
