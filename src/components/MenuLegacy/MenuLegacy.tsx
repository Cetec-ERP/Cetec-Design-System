import { type KeyboardEvent, useRef, useState } from 'react';

import { cx } from '@styled-system/css';
import {
  menuLegacy,
  type MenuLegacyVariantProps,
} from '@styled-system/recipes';
import { splitProps } from '~/utils/splitProps';
import { useOnClose } from '~/utils/useOnClose';
import { Box, type BoxProps } from '../Box';
import { CheckBox } from '../CheckBox';
import { Divider } from '../Divider';
import { Icon, type IconNamesList } from '../Icon';
import { Link } from '../Link';
import { Spinner } from '../Spinner';
import { Text } from '../Text';
import { Toggle } from '../Toggle';

export type MenuLegacyProps = Omit<BoxProps, keyof MenuLegacyVariantProps> &
  MenuLegacyVariantProps & {
    loading?: boolean;
    onClose?: () => void;
    menuSection: {
      id?: string;
      title?: string;
      divider?: boolean;
      spacer?: boolean;
      link?: boolean;
      items: {
        id: string;
        label: string;
        description?: string;
        value?: string;
        iconName?: string;
        children?: MenuLegacyProps['menuSection'];
        disabled?: boolean;
        href?: string;
      }[];
    }[];
    iconPlacement?: 'left' | 'right';
    variant?: 'single-select' | 'multi-select';
    multiSelectType?: 'checkbox' | 'toggle';
    onChange?: (selected: string[] | string | null) => void;
  };

type MenuLegacySection = MenuLegacyProps['menuSection'][number];

export const MenuLegacy = (props: MenuLegacyProps) => {
  const {
    loading,
    onClose,
    menuSection,
    iconPlacement,
    variant,
    multiSelectType,
    onChange,
    ...rest
  } = props;

  const [className, otherProps] = splitProps(rest);
  const {
    wrapper,
    wrapperInner,
    sectionTitle,
    menuItem,
    menuLabel,
    menuDescription,
    parentLabel,
    multiLevelIcon,
    dividerSection,
    spacerSection,
    iconSection,
    loaderContainer,
  } = menuLegacy({
    iconPlacement,
    multiSelectType,
  });

  const [selected, setSelected] = useState<string[]>([]);
  const [isChildren, setIsChildren] = useState<
    { menu: MenuLegacyProps['menuSection']; parentLabel: string | null }[]
  >([{ menu: menuSection, parentLabel: null as string | null }]);

  const current = isChildren[isChildren.length - 1];
  const menuRef = useRef<HTMLDivElement | null>(null);

  useOnClose(menuRef, onClose);

  const handleSelect = (id: string) => {
    if (variant === 'single-select') {
      if (selected.includes(id)) {
        setSelected([]);
        onChange?.(null);
      } else {
        setSelected([id]);
        onChange?.(id);
      }
      return;
    }

    const nextSelected = selected.includes(id)
      ? selected.filter((x) => x !== id)
      : [...selected, id];

    setSelected(nextSelected);
    onChange?.(nextSelected);
  };

  const handleOpenSubmenu = (
    children: MenuLegacyProps['menuSection'],
    parentMenuLabel: string,
  ) => {
    if (children) {
      setIsChildren([
        ...isChildren,
        { menu: children, parentLabel: parentMenuLabel },
      ]);
    }
  };

  const handleBack = () => {
    setIsChildren(isChildren.slice(0, -1));
  };

  return (
    <Box className={cx(wrapper, className)} {...otherProps} ref={menuRef}>
      {isChildren.length > 1 && (
        <Text
          onClick={handleBack}
          className={parentLabel}
          textStyle={{ base: 'body.lg', md: 'body.md' }}
          color="text"
        >
          <Icon name="caret-left" />
          {current?.parentLabel || 'Back'}
        </Text>
      )}

      <Box
        data-anim={isChildren.length > 1 ? 'slide-left' : undefined}
        className={wrapperInner}
      >
        {loading ? (
          <Box className={loaderContainer}>
            <Spinner size="md" />
          </Box>
        ) : (
          current?.menu?.map((section: MenuLegacySection) => (
            <Box key={section.id}>
              {section.title && (
                <Box className={sectionTitle}>
                  <Text textStyle="body.xs">{section.title}</Text>
                </Box>
              )}

              <Box>
                {section.items.map(
                  (item: MenuLegacySection['items'][number]) => {
                    const hasChildren = Boolean(item.children?.length);
                    const isSelected = selected.includes(item.id);
                    const isDisabled = Boolean(item.disabled);

                    const activateItem = () => {
                      if (isDisabled) {
                        return;
                      }

                      if (item.children) {
                        handleOpenSubmenu(item.children, item.label);
                        return;
                      }

                      handleSelect(item.id);
                    };

                    return (
                      <Box
                        key={item.id}
                        color={{ base: 'slate.100', _dark: 'slate.90' }}
                        className={menuItem}
                        tabIndex={isDisabled ? -1 : 0}
                        disabled={item.disabled}
                        aria-disabled={item.disabled}
                        data-selected={isSelected}
                        onClick={activateItem}
                        onKeyDown={(event: KeyboardEvent<HTMLElement>) => {
                          if (
                            event.key === ' ' ||
                            event.key === 'Spacebar' ||
                            event.key === 'Enter'
                          ) {
                            event.preventDefault();
                            activateItem();
                          }
                        }}
                        role="button"
                        aria-pressed={isSelected}
                      >
                        {(iconPlacement || item.iconName) && (
                          <Box
                            className={iconSection}
                            color={{ base: 'slate.90', _dark: 'slate.0' }}
                          >
                            {item.iconName && (
                              <Icon name={item.iconName as IconNamesList} />
                            )}
                          </Box>
                        )}

                        {variant === 'multi-select' &&
                          multiSelectType === 'checkbox' &&
                          !section.link && (
                            <CheckBox
                              name={item.id}
                              id={item.id}
                              checked={isSelected}
                              onChange={() => handleSelect(item.id)}
                            />
                          )}

                        {variant === 'multi-select' &&
                          multiSelectType === 'toggle' &&
                          !section.link && (
                            <Toggle
                              name={item.id}
                              id={item.id}
                              checked={isSelected}
                              onChange={() => handleSelect(item.id)}
                            />
                          )}

                        {!section.link && (
                          <Box>
                            <Text
                              textStyle={{ base: 'body.lg', md: 'body.md' }}
                              className={menuLabel}
                              color={{ base: 'slate.90', _dark: 'slate.5' }}
                            >
                              {item.label}
                            </Text>

                            {item.description && (
                              <Text
                                textStyle="body.xs"
                                className={menuDescription}
                              >
                                {item.description}
                              </Text>
                            )}
                          </Box>
                        )}

                        {section.link && (
                          <Link
                            href={item.href || '#'}
                            color={{ base: 'slate.90', _dark: 'slate.0' }}
                          >
                            {item.label} <Icon name="arrow-square-out" />
                          </Link>
                        )}

                        {hasChildren && (
                          <Box
                            className={multiLevelIcon}
                            color={{ base: 'slate.90', _dark: 'slate.0' }}
                          >
                            <Icon name="caret-right" />
                          </Box>
                        )}
                      </Box>
                    );
                  },
                )}
              </Box>

              {section.divider && (
                <Box className={dividerSection}>
                  <Divider color="border" />
                </Box>
              )}

              {section.spacer && <Box className={spacerSection} />}
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
};
